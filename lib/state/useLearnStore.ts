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
  videoRecommendations: [
    { id: 'vid-1', title: 'Activate Your Sovereign Mindset', url: 'https://youtu.be/example1', thumbnail: 'https://via.placeholder.com/400x225', channel: 'AEON Academy', reason: 'A practical starter to build discipline, focus, and clarity.', level: 'Beginner', watched: false },
    { id: 'vid-2', title: 'Rituals for Consistent Energy', url: 'https://youtu.be/example2', thumbnail: 'https://via.placeholder.com/400x225', channel: 'Momentum Lab', reason: 'Use rituals to keep momentum through the week.', level: 'Intermediate', watched: false },
  ],
  books: [
    { id: 'book-1', title: 'Rituals of Power', author: 'S. Vale', pages: 240, currentPage: 72, done: false, quizDone: false },
    { id: 'book-2', title: 'The Focus Code', author: 'N. Hart', pages: 198, currentPage: 0, done: false, quizDone: false },
  ],
  transactions: [],
  activeBookQuiz: null,
  markVideoWatched: id => set(state => ({ videoRecommendations: state.videoRecommendations.map(video => video.id === id ? { ...video, watched: true } : video) })),
  addBook: book => set(state => ({ books: [...state.books, book] })),
  updateBookPage: (id, page) => set(state => ({ books: state.books.map(book => book.id === id ? { ...book, currentPage: page } : book) })),
  finishBook: id => set(state => ({ books: state.books.map(book => book.id === id ? { ...book, done: true } : book) })),
  addTransaction: tx => set(state => ({ transactions: [...state.transactions, tx] })),
}))
