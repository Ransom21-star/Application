import { Frequency } from '@/lib/types'

export const frequencyMap: Record<Frequency, { color: string; label: string; desc: string; orb: string; emotional: { label: string; color: string }; mental: { label: string; color: string } }> = {
  CRISIS: { color: '#ff1133', label: 'CRISIS', desc: 'You have drifted far. Return.', orb: '🔴', emotional: { label: 'Overwhelmed', color: '#ff1133' }, mental: { label: 'Scattered', color: '#ff1133' } },
  SLIPPING: { color: '#ff6600', label: 'SLIPPING', desc: 'Momentum is fading. Recalibrate.', orb: '🟠', emotional: { label: 'Anxious', color: '#ff6600' }, mental: { label: 'Unfocused', color: '#ff6600' } },
  COASTING: { color: '#ffcc00', label: 'COASTING', desc: 'Stable. But not growing.', orb: '🟡', emotional: { label: 'Neutral', color: '#ffcc00' }, mental: { label: 'Drifting', color: '#ffcc00' } },
  ALIGNED: { color: '#00ff88', label: 'ALIGNED', desc: 'You are on the path. Keep walking.', orb: '🟢', emotional: { label: 'Grounded', color: '#00ff88' }, mental: { label: 'Clear', color: '#00ff88' } },
  ELEVATED: { color: '#0099ff', label: 'ELEVATED', desc: 'Sharp. Intentional. Focused.', orb: '🔵', emotional: { label: 'Driven', color: '#0099ff' }, mental: { label: 'Focused', color: '#0099ff' } },
  PEAK: { color: '#bb00ff', label: 'PEAK', desc: 'Full alignment. This is rare.', orb: '🟣', emotional: { label: 'Sovereign', color: '#bb00ff' }, mental: { label: 'Locked In', color: '#bb00ff' } },
}
