import { create } from 'zustand'
import { Mission, NonNeg, SideQuest, Milestone, GoalIntelligence, PillarsData } from '@/lib/types'

interface MissionState {
  missions: Mission[]
  nonNeg: NonNeg[]
  sideQuests: SideQuest[]
  milestones: Milestone[]
  goals: GoalIntelligence | null
  pillarsData: PillarsData | null
  toggleMission: (id: number) => void
  toggleNN: (id: number) => void
  acceptSideQuest: (id: number) => void
  completeSideQuest: (id: number) => void
  unlockMilestone: (id: number, msg: string) => void
  addMission: (mission: Mission) => void
  removeMission: (index: number) => void
  addNN: (name: string) => void
  removeNN: (index: number) => void
}

export const useMissionStore = create<MissionState>()(set => ({
  missions: [
    { id: 1, name: 'Morning ceremony', difficulty: 'easy', xp: 30, solar: 15, reason: 'Start with a clear intention.', done: false },
    { id: 2, name: 'Core focus hour', difficulty: 'normal', xp: 70, solar: 35, reason: 'Strengthen your discipline muscle.', done: false },
  ],
  nonNeg: [
    { id: 1, name: 'Hydrate 8 glasses', done: false },
    { id: 2, name: 'Sleep before midnight', done: false },
  ],
  sideQuests: [
    { id: 1, title: 'Intention letter', description: 'Write a letter to your future self to lock in your direction for the day.', tangibleBenefit: 'clarity', xpReward: 40, solarReward: 20, difficulty: 'easy', accepted: false, done: false },
    { id: 2, title: 'Review long-term objective', description: 'Revisit your highest-priority goal and align today’s mission to it.', tangibleBenefit: 'focus', xpReward: 55, solarReward: 30, difficulty: 'normal', accepted: false, done: false },
  ],
  milestones: [
    { id: 1, title: '7-day focus streak', description: 'Honor your daily commitments for one week.', timeframe: '7 days', status: 'locked', progress: 24, xpReward: 120, solarReward: 80, checkType: 'streak', checkCondition: 'Complete daily quests 7 days in a row' },
    { id: 2, title: 'Clarity journal launch', description: 'Complete 3 daily journal entries in a row.', timeframe: '3 days', status: 'locked', progress: 10, xpReward: 90, solarReward: 55, checkType: 'input', checkCondition: 'Submit three journal entries', inputPrompt: 'What insight did you gain?' },
  ],
  goals: {
    objective: 'Build sustainable momentum across health, skill, and meaning.',
    categories: [
      {
        id: 'health',
        name: 'Health & Energy',
        icon: '💪',
        color: '#7c3aed',
        specificTarget: 'Move with intention 5x per week',
        plan: {
          phase1: 'Establish morning body check',
          phase2: 'Build a recovery ritual',
          phase3: 'Track energy daily',
        },
        dailyMissions: ['Hydrate', 'Walk', 'Sleep early'],
        keyMetric: 'Energy score',
      },
      {
        id: 'learning',
        name: 'Skill & Knowledge',
        icon: '📚',
        color: '#2563eb',
        specificTarget: 'Complete 3 micro-learning sessions',
        plan: {
          phase1: 'Pick a key resource',
          phase2: 'Practice work block',
          phase3: 'Reflect on insight',
        },
        dailyMissions: ['Read', 'Watch', 'Summarize'],
        keyMetric: 'Focus minutes',
      },
    ],
  },
  pillarsData: {
    mind: { score: 72, assessment: 'Clearer thinking through ritual and focus.' },
    body: { score: 64, assessment: 'Moderate energy; rest and movement are priorities.' },
    spirit: { score: 60, assessment: 'Connection is rising with daily reflection.' },
  },
  toggleMission: id => set(state => ({ missions: state.missions.map(item => item.id === id ? { ...item, done: !item.done } : item) })),
  toggleNN: id => set(state => ({ nonNeg: state.nonNeg.map(item => item.id === id ? { ...item, done: !item.done } : item) })),
  acceptSideQuest: id => set(state => ({ sideQuests: state.sideQuests.map(item => item.id === id ? { ...item, accepted: true } : item) })),
  completeSideQuest: id => set(state => ({ sideQuests: state.sideQuests.map(item => item.id === id ? { ...item, done: true } : item) })),
  unlockMilestone: (id, msg) => set(state => ({ milestones: state.milestones.map(item => item.id === id ? { ...item, status: 'active', description: `${item.description} ${msg}` } : item) })),
  addMission: mission => set(state => ({ missions: [...state.missions, mission] })),
  removeMission: index => set(state => ({ missions: state.missions.filter((_, idx) => idx !== index) })),
  addNN: name => set(state => ({ nonNeg: [...state.nonNeg, { id: Date.now(), name, done: false }] })),
  removeNN: index => set(state => ({ nonNeg: state.nonNeg.filter((_, idx) => idx !== index) })),
}))
