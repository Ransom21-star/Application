'use client'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatMessages({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={`${message.role}-${index}`}
          className={`rounded-3xl p-4 ${message.role === 'assistant' ? 'bg-[rgba(51,170,255,0.08)] text-white' : 'bg-[rgba(255,255,255,0.06)] text-text'}`}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-text-dim">{message.role}</p>
          <p className="mt-2 whitespace-pre-line">{message.content}</p>
        </div>
      ))}
    </div>
  )
}
