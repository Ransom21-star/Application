export type Rank = 'E' | 'D' | 'C' | 'B' | 'A' | 'S'
export type Frequency = 'CRISIS' | 'SLIPPING' | 'COASTING' | 'ALIGNED' | 'ELEVATED' | 'PEAK'
export type PillarStatus = 'STRONG' | 'MODERATE' | 'DEVELOPING'
export type Rarity = 'common' | 'uncommon' | 'rare' | 'legendary'
export type Difficulty = 'easy' | 'normal' | 'hard' | 'nightmare'
export type MilestoneCheckType = 'auto' | 'input' | 'streak'

export interface Skill {
  id: number
  name: string
  icon: string
  rank: string
  progress: number
  rarity: Rarity
}

export interface Mission {
  id: number
  name: string
  difficulty: Difficulty
  xp: number
  solar: number
  reason: string
  done: boolean
  category?: string
}

export interface NonNeg {
  id: number
  name: string
  done: boolean
}

export interface SideQuest {
  id: number
  title: string
  description: string
  tangibleBenefit: string
  xpReward: number
  solarReward: number
  difficulty: Difficulty
  accepted: boolean
  done: boolean
}

export interface Milestone {
  id: number
  title: string
  description: string
  timeframe: string
  status: 'active' | 'locked' | 'completed'
  progress: number
  xpReward: number
  solarReward: number
  checkType: MilestoneCheckType
  checkCondition: string
  inputPrompt?: string
  inputValue?: string
}

export interface Blockage {
  area: string
  description: string
  remedy: string
}

export interface CategoryPlan {
  categories: Category[]
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  specificTarget: string
  plan: { phase1: string; phase2: string; phase3: string }
  dailyMissions: string[]
  keyMetric: string
}

export interface GoalIntelligence {
  objective: string
  categories: Category[]
}

export interface PillarsData {
  mind: { score: number; assessment: string }
  body: { score: number; assessment: string }
  spirit: { score: number; assessment: string }
}

export interface LogEntry {
  type: 'mission' | 'unlock' | 'penalty' | 'reward' | 'rank' | 'health'
  text: string
  time: string
}

export interface StreakData {
  name: string
  count: number
  history: { date: string; done: boolean }[]
  lastDate: string | null
}

export interface JournalEntry {
  date: string
  mood: string
  responses: { prompt: string; response: string }[]
  frequency: Frequency
  aeonFeedback: string
}

export interface VideoRecommendation {
  id: string
  title: string
  url: string
  thumbnail: string
  channel: string
  reason: string
  level: string
  watched: boolean
}

export interface Book {
  id: string
  title: string
  author: string
  pages: number
  currentPage: number
  done: boolean
  quizDone: boolean
}

export interface BookQuiz {
  bookId: string
  bookTitle: string
  questions: { q: string; hint: string }[]
}

export interface CalorieEntry {
  id: string
  description: string
  calories: number
  macros: { protein: number; carbs: number; fat: number }
  suitable: boolean
  verdict: string
  imageUrl?: string
  timestamp: string
}

export interface SleepEntry {
  date: string
  bedtime: string
  wakeTime: string
  duration: number
  cycles: number
}

export interface Transaction {
  id: number
  desc: string
  amount: number
  category: string
  date: string
}

export interface SystemAction {
  action: string
  [key: string]: any
}
