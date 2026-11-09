# Mobile Responsive & 2 Sockets + 5mm LED + 1 Bulb Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the 3D extension board layout to feature **2 Sockets (each with a 5mm LED indicator below it) + 1 Bulb** per row (Series and Parallel), make the entire web experience 100% mobile responsive with touch support, and document the complete GitHub Pages hosting guide.

**Architecture:** 
- Board Layout: Per row (Series $Z = -5.0$, Parallel $Z = +5.0$), arrange: 1 Master Rocker Switch + 2 Switch-Socket pairs (each socket with a realistic 5mm LED indicator right below it) + 1 Dedicated B22/E27 Bulb Holder with an incandescent bulb.
- Sockets are clean Indian 3-pin universal sockets (no bulb plugs sticking inside them).
- 5mm LEDs: Colored indicator LEDs (translucent 5mm dome with point light & glow material) positioned below each socket indicating live branch power.
- Mobile Responsiveness: Dynamic camera framing for mobile portrait mode (aspect < 1.0), touch-friendly header and action drawer, mobile bottom-sheet multimeter HUD, and touch pointer raycasting.
- Hosting: Complete step-by-step GitHub Pages instructions.

**Tech Stack:** Three.js (r128), Procedural Canvas 2D Textures, OrbitControls, Tailwind CSS, Web Audio API.

---

### Task 1: 3D Layout Update (2 Sockets + 5mm LEDs + 1 External Bulb per row)
- [x] Update `createModularSocket` to remove bulb adapters from socket holes and leave authentic Indian 6A 3-pin universal faceplate.
- [x] Build `create5mmIndicatorLED(x, z, colorHex)`: 5mm translucent colored dome with chrome bezel ring and internal point light.
- [x] Build `createBulbHolderWithBulb(x, z, circuitType)`: Dedicated cylindrical brass/bakelite bulb holder with glass bulb and tungsten filament.
- [x] Position layout per row ($Z = -5.0$ Series, $Z = +5.0$ Parallel):
  - Master Switch: $X = -12.5$
  - Switch 1: $X = -8.0$, Socket 1 + 5mm LED: $X = -4.0$
  - Switch 2: $X = 0.5$, Socket 2 + 5mm LED: $X = 4.5$
  - Bulb Holder + Bulb: $X = 10.0$

### Task 2: Circuit State & Ohm's Law Simulation Update
- [x] Update `CircuitState`:
  - `switches: [true, true, true]` (individual switches)
  - `bulbs: [true, true, true]` (loads for socket 1, socket 2, and dedicated bulb)
- [x] Series Physics: Single closed loop with 2 socket loads + 1 bulb ($R_{eq} = 10 + 10 + 10 = 30\Omega$, $I = 0.3\text{A}$, $3\text{V}$ across each). Any switch OFF or load unplugged breaks entire loop.
- [x] Parallel Physics: 3 independent parallel branches (Socket 1 branch, Socket 2 branch, Bulb branch). Each branch receives full 9V line voltage ($0.9\text{A}$ each, up to $2.7\text{A}$ total).
- [x] 5mm LEDs glow dynamically based on voltage delivered to each socket.

### Task 3: Mobile Responsiveness & Touch Optimization
- [x] Update Camera Framing on Resize & Init: If `window.innerWidth < 768` (mobile portrait), adjust camera distance (`camera.position.set(0, 36, 36)`) so full 36-unit board fits on mobile without horizontal clipping.
- [x] Touch Raycaster: Ensure `touchstart` / `pointerdown` events trigger switch toggles and load interactions smoothly without double clicks.
- [x] Responsive Header: Collapsible/compact action bar on mobile with icons and clean touch targets (min 44px).
- [x] Mobile Multimeter HUD: Format as floating bottom card/drawer on small screens (`max-h-[50vh]`) so 3D board remains fully visible and interactive.

### Task 4: GitHub Pages Hosting Guide
- [x] Create detailed, beginner-friendly instructions in `README.md` and in a clean on-screen help modal explaining how to push to GitHub and enable GitHub Pages in 2 clicks.
