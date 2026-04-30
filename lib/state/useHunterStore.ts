import { create } from 'zustand'
import { Blockage, CategoryPlan, LogEntry, Skill, StreakData, Frequency } from '@/lib/types'

interface HunterState {
  hunterName: string
  rank: 'E' | 'D' | 'C' | 'B' | 'A' | 'S'
  level: number
  title: string
  xp: number
  xpMax: number
  solars: number
  frequency: Frequency
  goalAffirmation: string
  stats: Record<string, number>
  onboardAnswers: Record<string, any>
  skills: Skill[]
  blockages: Blockage[]
  categoryPlan: CategoryPlan | null
  aeonMessage: string
  mentalPillar: 'STRONG' | 'MODERATE' | 'DEVELOPING'
  physicalPillar: 'STRONG' | 'MODERATE' | 'DEVELOPING'
  spiritualPillar: 'STRONG' | 'MODERATE' | 'DEVELOPING'
  systemLog: LogEntry[]
  streakData: Record<string, StreakData>
  streakShields: Record<string, number>
  activeEngine: 'gemini' | 'none'
  addXP: (amount: number) => void
  addSolars: (amount: number) => void
  setFrequency: (freq: Frequency) => void
  addSkill: (skill: Skill) => void
  updateStat: (stat: string, value: number) => void
  addLog: (type: LogEntry['type'], text: string) => void
  recordStreak: (id: string, name: string) => void
}

export const useHunterStore = create<HunterState>()(set => ({
  hunterName: 'Hunter',
  rank: 'D',
  level: 3,
  title: 'Awakening Sovereign',
  xp: 320,
  xpMax: 500,
  solars: 240,
  frequency: 'ALIGNED',
  goalAffirmation: 'I move with purpose and rise each day.',
  stats: {
    Discipline: 72,
    Mindset: 78,
    Vitality: 62,
    Ambition: 70,
    Adaptability: 66,
    Focus: 75,
    Spiritual: 58,
    Emotional: 69,
  },
  onboardAnswers: {},
  skills: [
    { id: 1, name: 'Focus Mastery', icon: '⚡', rank: 'C', progress: 42, rarity: 'uncommon' },
    { id: 2, name: 'Manifestation Ritual', icon: '✨', rank: 'D', progress: 25, rarity: 'rare' },
  ],
  blockages: [],
  categoryPlan: null,
  aeonMessage: 'AEON is monitoring your current level and crafting your path.',
  mentalPillar: 'MODERATE',
  physicalPillar: 'DEVELOPING',
  spiritualPillar: 'MODERATE',
  systemLog: [],
  streakData: {},
  streakShields: {},
  activeEngine: 'none',
  addXP: amount => set(state => ({ xp: state.xp + amount })),
  addSolars: amount => set(state => ({ solars: state.solars + amount })),
  setFrequency: freq => set({ frequency: freq }),
  addSkill: skill => set(state => ({ skills: [...state.skills, skill] })),
  updateStat: (stat, value) => set(state => ({ stats: { ...state.stats, [stat]: value } })),
  addLog: (type, text) => set(state => ({ systemLog: [...state.systemLog, { type, text, time: new Date().toISOString() }] })),
  recordStreak: (id, name) => set(state => ({ streakData: { ...state.streakData, [id]: { name, count: (state.streakData[id]?.count ?? 0) + 1, history: [...(state.streakData[id]?.history ?? []), { date: new Date().toISOString().slice(0, 10), done: true }], lastDate: new Date().toISOString().slice(0, 10) } } })),
}))
