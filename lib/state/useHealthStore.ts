import { create } from 'zustand'
import { SleepEntry, CalorieEntry } from '@/lib/types'

interface HealthState {
  sleepLog: SleepEntry[]
  steps: number
  waterIntake: number
  waterGoal: number
  caloriesLog: CalorieEntry[]
  caloriesGoal: number
  logSleep: (entry: SleepEntry) => void
  logSteps: (count: number) => void
  logWater: () => void
  logCalories: (entry: CalorieEntry) => void
}

export const useHealthStore = create<HealthState>()(set => ({
  sleepLog: [],
  steps: 0,
  waterIntake: 0,
  waterGoal: 8,
  caloriesLog: [],
  caloriesGoal: 2200,
  logSleep: entry => set(state => ({ sleepLog: [...state.sleepLog, entry] })),
  logSteps: count => set({ steps: count }),
  logWater: () => set(state => ({ waterIntake: state.waterIntake + 1 })),
  logCalories: entry => set(state => ({ caloriesLog: [...state.caloriesLog, entry] })),
}))
