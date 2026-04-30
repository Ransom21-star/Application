import { create } from 'zustand'
import { VideoRecommendation, Book, Transaction, BookQuiz } from '@/lib/types'

interface LearnState {
  videoRecommendations: VideoRecommendation[]
  books: Book[]
  transactions: Transaction[]
  activeBookQuiz: BookQuiz | null
  markVideoWatched: (id: string) => void
  addBook: (book: Book) => void
  updateBookPage: (id: string, page: number) => void
  finishBook: (id: string) => void
  addTransaction: (tx: Transaction) => void
}

export const useLearnStore = create<LearnState>()(set => ({
  videoRecommendations: [],
  books: [],
  transactions: [],
  activeBookQuiz: null,
  markVideoWatched: id => set(state => ({ videoRecommendations: state.videoRecommendations.map(video => video.id === id ? { ...video, watched: true } : video) })),
  addBook: book => set(state => ({ books: [...state.books, book] })),
  updateBookPage: (id, page) => set(state => ({ books: state.books.map(book => book.id === id ? { ...book, currentPage: page } : book) })),
  finishBook: id => set(state => ({ books: state.books.map(book => book.id === id ? { ...book, done: true } : book) })),
  addTransaction: tx => set(state => ({ transactions: [...state.transactions, tx] })),
}))
