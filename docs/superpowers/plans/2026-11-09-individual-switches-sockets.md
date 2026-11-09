# Dedicated Switch Per Socket (Indian Modular Extension Board) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add dedicated individual modular rocker switches for all 3 sockets in both Series and Parallel rows (Total: 1 Master Switch + 3 Socket Switches per row), matching authentic Indian modular extension board standards and wiring physics.

**Architecture:** Extend `CircuitState` to track `switches: [true, true, true]` per row, update 3D positions so each socket has its dedicated rocker switch right beside it, connect raycaster click toggles, wire internal Phase/Neutral/Earth lines through the switches, and update the circuit simulation and multimeter HUD.

**Tech Stack:** Three.js (r128), Procedural Canvas 2D Textures, Web Audio API, HTML5/Tailwind.

**Spec Reference:** `docs/superpowers/specs/2026-11-09-extension-board-series-parallel-design.md`

## Global Constraints
- Standalone single-file application (`index.html`) runnable offline.
- Zero external texture/audio assets.
- Maintain backwards compatibility for existing tokens (`switchOn`, `ProceduralTextures`, etc.).
- Both rows maintain 3 bulbs and 3 sockets with their 3 dedicated switches plus master switch.

---

### Task 1: State Engine & Component Model Updates
- [x] Modify `CircuitState` in `index.html` to add `switches: [true, true, true]` to both `series` and `parallel`.
- [x] Update `createRockerSwitch(x, z, circuitType, label, switchIndex = null, isRed = false)` to support individual socket switches (`switchIndex = 0, 1, 2`) and red illuminated master switches.
- [x] Support clicking on individual switches in `onPointerClick`:
  - Toggle `CircuitState[circuitType].switches[switchIndex] = !CircuitState[circuitType].switches[switchIndex]`.
  - Animate rocker paddle tilt ($-0.21 \leftrightarrow +0.21$).
  - Update paddle texture red indicator dot.
  - Recalculate circuit simulation.

### Task 2: 3D Layout & Socket-Switch Pairing
- [x] Position 3 Switch-Socket pairs in each row ($Z = -5.0$ Series, $Z = +5.0$ Parallel):
  - Master Switch: $X = -13.5$
  - Pair 1: Switch 1 ($X = -8.5$), Socket 1 ($X = -4.5$)
  - Pair 2: Switch 2 ($X = -0.5$), Socket 2 ($X = +3.5$)
  - Pair 3: Switch 3 ($X = +7.5$), Socket 3 ($X = +11.5$)
- [x] Update Reset button to reset all 8 switches (2 master + 6 individual).

### Task 3: Procedural Board Decal Texture Updates
- [x] Update `ProceduralTextures.createExtensionBoardTexture` canvas drawing:
  - Footprint decals for Master Switch at $PX = 256$ ($X = -13.5$).
  - Footprint decals for 3 switch-socket pairs at their exact coordinates with labels ("SW 1", "OUTLET 1", etc.).

### Task 4: Circuit Simulation Physics & Multimeter HUD
- [x] Update `updateCircuitSimulation()`:
  - **Series:** Loop active only if Master Switch is ON AND all 3 individual switches are ON AND all 3 bulbs are plugged in. If any switch is OFF, entire series breaks ($0\text{V}$, $0\text{A}$).
  - **Parallel:** Each branch $i$ is active if Master Switch is ON AND Switch $i$ is ON AND Bulb $i$ is plugged in ($9\text{V}$, $0.9\text{A}$ per active branch).
- [x] Update Multimeter HUD badges and descriptive explanations to reflect individual switch states.

### Task 5: Internal Wire Splines (X-Ray Mode)
- [x] Re-route internal Phase (Red) and Neutral (Black) splines:
  - Parallel: Phase bus branches into individual switches, then into socket Live terminals.
  - Series: Daisy-chain loop routes from switch to socket sequentially.
- [x] Adjust electron particle streams to follow the new wire paths.

### Task 6: Automated Verification & E2E Tests
- [x] Update `tests/e2e_verify.js` to verify individual switch arrays, click handlers, and circuit simulation logic.
