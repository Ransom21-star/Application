interface AEONCallParams {
  system?: string
  messages: { role: 'user' | 'assistant'; content: string }[]
  maxTokens?: number
}

interface AEONResponse {
  text: string
  engine?: string
  error?: boolean
}

export async function callAEON(params: AEONCallParams): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'chat', ...params }),
  })
  if (!res.ok) return ''
  const data: AEONResponse = await res.json()
  return data.text || ''
}

export async function searchVideo(query: string, userContext: string): Promise<any> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'search', query, system: userContext }),
  })
  if (!res.ok) return null
  return res.json()
}

export async function analyseFood(imageBase64: string, userContext: string): Promise<any> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode: 'vision', imageBase64, system: userContext }),
  })
  if (!res.ok) return null
  return res.json()
}
