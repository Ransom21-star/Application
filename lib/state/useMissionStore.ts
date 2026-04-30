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
  sideQuests: [],
  milestones: [],
  goals: null,
  pillarsData: null,
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
