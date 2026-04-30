import { NextRequest, NextResponse } from 'next/server'

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
const SERPER_URL = 'https://google.serper.dev/videos'

interface GeminiMessage {
  author: string
  content: {
    text: string[]
  }
}

async function requestGemini(body: any, apiKey: string) {
  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    const errorText = await response.text()
    return { text: '', error: `Gemini request failed: ${errorText}` }
  }
  const data = await response.json()
  const text = data?.candidates?.[0]?.content?.[0]?.text || data?.output?.[0]?.content?.[0]?.text || ''
  return { text }
}

async function handleChat({ system, messages, maxTokens, geminiKey }: { system?: string; messages: { role: string; content: string }[]; maxTokens?: number; geminiKey: string }) {
  const prompt: GeminiMessage[] = []
  if (system) {
    prompt.push({ author: 'system', content: { text: [system] } })
  }
  prompt.push(...messages.map(item => ({ author: item.role === 'user' ? 'user' : 'assistant', content: { text: [item.content] } })))

  const geminiRes = await requestGemini({
    prompt,
    maxOutputTokens: maxTokens ?? 1000,
    temperature: 0.7,
  }, geminiKey)

  return NextResponse.json({ text: geminiRes.text, engine: 'gemini', error: geminiRes.error ? true : false })
}

async function handleVideoSearch({ query, system, geminiKey, serperKey }: { query?: string; system?: string; geminiKey: string; serperKey: string }) {
  if (!query) {
    return NextResponse.json({ text: '', error: 'No query provided' })
  }
  const searchRes = await fetch(SERPER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${serperKey}`,
    },
    body: JSON.stringify({ q: query, num: 10 }),
  })

  if (!searchRes.ok) {
    const errorText = await searchRes.text()
    return NextResponse.json({ text: '', error: `Serper search failed: ${errorText}` })
  }

  const results = await searchRes.json()
  const items = results?.organic ?? []
  const top = (items as any[]).slice(0, 10).map(item => ({
    title: item.title || item.title_raw || '',
    url: item.link || item.url || '',
    thumbnail: item.thumbnail || '',
    channel: item.source || item.channel || 'Unknown',
    duration: item.duration || item.length || '',
  }))

  const summaryPrompt: GeminiMessage[] = [
    { author: 'system', content: { text: [system || 'You are AEON, a wise guide choosing the best video for the user.'] } },
    { author: 'user', content: { text: [`Choose the best video from the following results for the user based on their level and life goal. Reply with the title, url, thumbnail, channel, duration and a short reason.`] } },
    { author: 'assistant', content: { text: [JSON.stringify(top)] } },
  ]

  const geminiRes = await requestGemini({ prompt: summaryPrompt, maxOutputTokens: 500 }, geminiKey)

  return NextResponse.json({ text: geminiRes.text, video: top[0] || null, error: geminiRes.error ? true : false })
}

async function handleVision({ imageBase64, system, geminiKey }: { imageBase64?: string; system?: string; geminiKey: string }) {
  if (!imageBase64) {
    return NextResponse.json({ text: '', error: 'No image provided' })
  }

  const geminiRes = await requestGemini({
    prompt: [{ author: 'system', content: { text: [system || 'You are AEON. Analyze the food photo and estimate calories, macros, and suitability.'] } }, { author: 'user', content: { text: ['Analyze the following food image and return calories, macros, suitability, and a wise verdict.'] } }],
    imageContexts: [{ image: imageBase64 }],
    maxOutputTokens: 600,
    temperature: 0.2,
  }, geminiKey)

  const text = geminiRes.text
  const parsed = {
    text,
    calories: null,
    macros: null,
    suitable: null,
    verdict: null,
  }

  return NextResponse.json(parsed)
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const { mode = 'chat', system, messages, maxTokens = 1000, query, imageBase64 } = body

  const geminiKey = process.env.GEMINI_API_KEY
  const serperKey = process.env.SERPER_API_KEY

  if (!geminiKey) {
    return NextResponse.json({ text: '', error: 'GEMINI_API_KEY not set' })
  }

  if (mode === 'chat') {
    return handleChat({ system, messages, maxTokens, geminiKey })
  }

  if (mode === 'search') {
    if (!serperKey) {
      return NextResponse.json({ text: '', error: 'SERPER_API_KEY not set' })
    }
    return handleVideoSearch({ query, system, geminiKey, serperKey })
  }

  if (mode === 'vision') {
    return handleVision({ imageBase64, system, geminiKey })
  }

  return NextResponse.json({ text: '', error: 'Invalid mode' })
}
