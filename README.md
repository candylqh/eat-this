# Eat This!

A lunch-decision app for office workers: not *where* to eat, but whether you can get there and back before your next meeting.

Implemented from the `Eat This v3 cute.dc.html` Claude Design prototype (see `../project/`, `../chats/`, `../README.md` at the repo root for the original design bundle and its design history).

## Stack

React + TypeScript + Vite, mobile-first responsive web app. No backend — state (screen, credits, owned/worn accessories, decline reason, post-lunch outcome) lives in a single reducer in `src/state.tsx`, mirroring the prototype's state machine exactly.

## Screens

Budget → Suggestion → Feasibility (the ten-second pitch), Going, Declined → Replacement (the one-swap learning loop), Plates (stall collection board), Post-lunch contribution, Add-a-stall, and the Kaya Cat avatar/credits shop.

## Develop

```
npm install
npm run dev
```
