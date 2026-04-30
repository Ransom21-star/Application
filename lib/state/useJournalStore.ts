import { create } from 'zustand'
import { JournalEntry } from '@/lib/types'

interface JournalState {
  entries: JournalEntry[]
  selectedMood: string | null
  currentEntry: Record<string, string>
  addEntry: (entry: JournalEntry) => void
  setMood: (mood: string) => void
  updatePromptResponse: (index: number, text: string) => void
}

export const useJournalStore = create<JournalState>()(set => ({
  entries: [],
  selectedMood: null,
  currentEntry: {},
  addEntry: entry => set(state => ({ entries: [...state.entries, entry] })),
  setMood: mood => set({ selectedMood: mood }),
  updatePromptResponse: (index, text) => set(state => ({ currentEntry: { ...state.currentEntry, [index]: text } })),
}))
