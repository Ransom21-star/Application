# Sovereign

Sovereign is a full-stack, mobile-first RPG life operating system powered by AEON — an AI sage that helps turn real-life progress into an epic quest.

## What it contains

- Next.js 14 App Router application
- TypeScript front-end and backend
- Tailwind CSS styling with a dark glassmorphism theme
- Framer Motion animations on key pages
- Unified AI backend through `/app/api/chat/route.ts`
- Gemini API support for chat, Serper API for live video search, and Gemini Vision for food image analysis
- Zustand state management for hunter profile, missions, journal, health, and learning
- Vercel deployment configuration

## Stack

- `next` ^14.2.0
- `react` ^18.3.0
- `react-dom` ^18.3.0
- `tailwindcss` ^3.4.0
- `framer-motion` ^11.0.0
- `zustand` ^4.5.0
- `typescript` ^5.4.0

## Key files

- `app/layout.tsx` — root layout and global styles import
- `app/page.tsx` — landing entry page
- `app/boot/page.tsx` — boot screen
- `app/onboarding/page.tsx` — onboarding flow
- `app/dashboard/page.tsx` — dashboard HUD
- `app/aeon/page.tsx` — AEON chat interface
- `app/journal/page.tsx` — journaling flow
- `app/missions/page.tsx` — mission hub
- `app/growth/page.tsx` — skills and growth overview
- `app/knowledge/page.tsx` — knowledge and learning recommendations
- `app/shop/page.tsx` — solar exchange
- `app/api/chat/route.ts` — unified AI backend
- `lib/aeon.ts` — frontend AI helper
- `lib/systemActions.ts` — parser for AEON system actions
- `lib/state/*` — Zustand stores
- `lib/types/index.ts` — core TypeScript types
- `styles/globals.css` — Tailwind base and theme
- `next.config.mjs` — Next.js config
- `vercel.json` — Vercel function config

## Environment variables

Set these in Vercel or a local `.env` file (not committed):

```bash
GEMINI_API_KEY=your_google_gemini_api_key
SERPER_API_KEY=your_serper_api_key
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Deploy to Vercel with the standard flow:

```bash
vercel
vercel env add GEMINI_API_KEY
vercel env add SERPER_API_KEY
vercel --prod
```

## Notes

- All AI requests are routed through `/api/chat` only.
- `next.config.mjs` is used for compatibility with Next.js 14.
- `framer-motion` pages are client components using `'use client'`.
