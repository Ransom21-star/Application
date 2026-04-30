import { Rarity } from '@/lib/types'

export const shopItems: { id: number; title: string; price: number; rarity: Rarity; description: string }[] = [
  { id: 1, title: 'Fresh Juice', price: 120, rarity: 'common', description: 'A refreshing reward to support your vitality.' },
  { id: 2, title: 'Grilled Meat', price: 220, rarity: 'uncommon', description: 'Power nourishment for strength and focus.' },
  { id: 3, title: 'Premium Coffee', price: 280, rarity: 'rare', description: 'A focused reward to amplify your energy spikes.' },
  { id: 4, title: 'Spa Evening', price: 860, rarity: 'legendary', description: 'A rare treat for deep rest and recovery.' },
]
