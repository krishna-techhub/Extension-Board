# Real Modular Extension Board Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform `index.html` into a realistic 3D Modular Extension Board (Multi-Plug Gang Box) demonstrating Series vs Parallel domestic electrical wiring with realistic Indian 3-pin sockets, rocker switches, glowing bulb plugs, power cord, and an interactive X-Ray view showing the internal Phase, Neutral, and Earth wires.

**Architecture:** Single self-contained HTML5 file utilizing Three.js (r128), OrbitControls, Tailwind CSS, procedural Canvas 2D textures for modular switch/socket faces, Web Audio API sound synthesis, and real-time Ohm's Law circuit simulation.

**Spec:** `docs/superpowers/specs/2026-11-09-extension-board-series-parallel-design.md`

## Global Constraints
- Standalone single file `index.html` runnable directly in any browser.
- 100% offline-ready: No external textures or audio files.
- Realistic modular extension board aesthetics: Glossy white PVC casing, molded socket faces with 3-pin holes, rocker switches with red indicator dots, red neon indicator lamp, and black flexible power cable.
- Raycaster click interaction for rocker switches and bulb plugs.
- "X-Ray Inside Wiring" mode revealing internal Phase (Red), Neutral (Black), and Earth (Green) looped wiring and electron particles.

---

### Task 1: Realistic Modular Extension Board Procedural Textures & Audio
- [x] Create socket faceplate Canvas 2D texture (Earth round pin, Live/Neutral shutter slots, 6A 240V rating text).
- [x] Create rocker switch plate Canvas 2D texture (subtle rocker bevel, I/O label, red status dot).
- [x] Create extension board branding decal (Anchor/Havells style "SAFETY-PRO MULTI-PLUG 240V AC 50Hz").
- [x] Synthesize snappy mechanical rocker switch click in `SoundFX`.

### Task 2: 3D Modular Extension Box (PVC Gang Box, Power Cord & Neon Indicator)
- [x] Build glossy white/ivory PVC gang-box base and top faceplate.
- [x] Add side rubber strain-relief grommet with a curved black heavy-duty 3-core power cord.
- [x] Add 4 corner chrome mounting screws.
- [x] Add red translucent neon power indicator jewel cap with internal point light.

### Task 3: 3D Indian 3-Pin Universal Sockets & Rocker Switches
- [x] Build 3D modular socket units (white PVC frame, recessed socket plate, 3-pin metal-lined holes).
- [x] Build 3D piano/rocker switch units (pivoting rocker lever tilting $-12^\circ \leftrightarrow +12^\circ$).
- [x] Assemble Series Row (Top): Master Rocker Switch + 3 Sockets.
- [x] Assemble Parallel Row (Bottom): Master Rocker Switch + 3 Sockets with individual switches.

### Task 4: 3-Pin Plug-Top Bulb Adapters & Glow Visuals
- [x] Build 3D 3-pin plug-top bulb adapters inserted into each socket.
- [x] Transparent glass bulb with coiled filament and PointLight.
- [x] Animate plug-top removal on click (unplugging translates $+2.5$ units up and tilts).

### Task 5: Internal Phase/Neutral/Earth Wiring & X-Ray Mode
- [x] Route internal Phase (Red), Neutral (Black), and Earth (Green) wires inside the box:
  - Series Row: End-to-end series jumper loop.
  - Parallel Row: Common Phase bus, Common Neutral bus, Common Earth bus.
- [x] Add particle flow along internal wire routes.
- [x] Implement "X-Ray View (See Inside Wiring)" button toggling the top plate transparency.

### Task 6: UI, Multimeter HUD & School Viva Guide
- [x] Update header title to "Extension Board 3D: Series vs Parallel Domestic Wiring".
- [x] Update Multimeter metrics and descriptive explanations reflecting real 240V domestic extension board physics.
- [x] Update Physical DIY Guide modal with extension board wiring schematics, components, and Viva Q&A.
- [x] Verify execution with automated test script.
