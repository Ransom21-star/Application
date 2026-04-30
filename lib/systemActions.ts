import { useMissionStore } from '@/lib/state/useMissionStore'
import { useHunterStore } from '@/lib/state/useHunterStore'

export interface SystemAction {
  action: string
  mission?: any
  index?: number
  name?: string
  amount?: number
  value?: string
  id?: number
  msg?: string
  title?: string
  desc?: string
  xp?: number
  solar?: number
  time?: string
  skill?: any
  text?: string
}

export function parseAndExecuteActions(fullResponse: string): string {
  const actionRegex = /<SYSTEM_ACTION>(.*?)<\/SYSTEM_ACTION>/gs
  const matches = [...fullResponse.matchAll(actionRegex)]

  matches.forEach(match => {
    try {
      const action: SystemAction = JSON.parse(match[1])
      executeAction(action)
    } catch (e) {
      console.warn('Failed to parse system action:', match[1])
    }
  })

  return fullResponse.replace(/<SYSTEM_ACTION>.*?<\/SYSTEM_ACTION>/gs, '').trim()
}

function executeAction(action: SystemAction) {
  const hunter = useHunterStore.getState()
  const missions = useMissionStore.getState()

  switch (action.action) {
    case 'add_mission':
      if (action.mission) missions.addMission({ ...action.mission, id: Date.now(), done: false })
      break
    case 'remove_mission':
      if (action.index !== undefined) missions.removeMission(action.index)
      break
    case 'add_nn':
      if (action.name) missions.addNN(action.name)
      break
    case 'remove_nn':
      if (action.index !== undefined) missions.removeNN(action.index)
      break
    case 'add_xp':
      if (action.amount) hunter.addXP(action.amount)
      break
    case 'add_solars':
      if (action.amount) hunter.addSolars(action.amount)
      break
    case 'set_frequency':
      if (action.value) hunter.setFrequency(action.value as any)
      break
    case 'unlock_milestone':
      if (action.id) missions.unlockMilestone(action.id, action.msg || '')
      break
    case 'add_skill':
      if (action.skill) hunter.addSkill(action.skill)
      break
    case 'update_goal_affirmation':
      if (action.text) useHunterStore.setState({ goalAffirmation: action.text })
      break
  }
}
