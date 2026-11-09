# Project Context: Modular Extension Board 3D (Series vs Parallel Domestic Wiring)

## Overview
Self-contained 3D interactive physics and electrical engineering exhibition board designed for school science projects (CBSE/ICSE/State boards). Demonstrates why household extension boards and domestic wiring are strictly wired in **Parallel** vs why **Series** fails, using a photorealistic Indian modular multi-plug extension board with Three.js (r128), procedural textures, 3-pin universal sockets with dedicated 5mm indicator LEDs below each socket, dedicated B22 batten lamp holders with incandescent tungsten test bulbs, piano/rocker switches with status indicators, removable 3-pin appliance plugs, flexible 3-core power cord with molded wall plug, master neon indicator, dynamic mobile responsive camera framing, and an interactive **"Inside Wiring (X-Ray)" mode** that makes the casing transparent to show internal Phase (Red), Neutral (Black), and Safety Earth (Green) looped wiring and flowing electron streams.

## Project Structure
- `index.html`: Standalone single-file application containing Three.js (r128), OrbitControls, Tailwind CSS, procedural Canvas 2D texture generators (`createExtensionBoardTexture`, `createSocketTexture`, `createRockerSwitchTexture`), Web Audio API sound synthesizer (`SoundFX`), dynamic responsive camera framing (`updateResponsiveCamera`), touch/pointer raycaster, and real-time Ohm's Law circuit simulation.
- `README.md`: Complete exhibition guide, GitHub Pages 1-click free hosting guide, circuit physics formulas, Viva Voce Q&A, and physical working model construction instructions.
- `docs/superpowers/specs/2026-11-09-extension-board-series-parallel-design.md`: Extension board architecture and electrical design specification.
- `docs/superpowers/plans/2026-11-09-mobile-and-2socket-led-bulb.md`: Implementation plan for 2 sockets + 5mm LEDs + 1 bulb layout and mobile optimization.
- `tests/e2e_verify.js`: Automated Node.js verification script checking 30 core tokens (textures, audio, HUD, 5mm LEDs, appliance plugs, bulb holders, responsive camera, segmented wires, Ohm's law, GitHub hosting, and X-Ray mechanics).

## How to Run & Verify
- **Browser Execution:** Simply double click `index.html` or open in any web browser (Chrome, Edge, Firefox, Safari, Mobile Safari/Chrome). Zero build steps or external dependencies required; 100% offline-ready.
- **Automated Verification:** Run `node tests/e2e_verify.js` to verify all 30 structural, procedural, and electrical checks.
- **Free Online Hosting:** Hosted via GitHub Pages with root `/index.html`. Quick setup guide accessible via the "Host Free" button in the web header.

## Circuit Physics Specifications
- **Series Row (Daisy-Chain Failure Mode):**
  - $R_{eq} = R_1 + R_2 + R_3 = 30\,\Omega$ (2 socket loads + 1 bulb @ $10\,\Omega$ each)
  - Current is identical across all components: $I = V / R_{eq} = 9\text{V} / 30\Omega = 0.30\text{A}$
  - Voltage divides equally: $V_i = 3.0\text{V}$ each (5mm LEDs and bulb glow dimly in warm amber)
  - Failure mode: Unplugging either appliance plug, unscrewing the test bulb, or switching OFF any single switch breaks the continuous loop; all sockets, LEDs, and the bulb shut off simultaneously ($0\text{V}, 0\text{A}$).
- **Parallel Row (Standard Domestic Extension Board):**
  - $1/R_{eq} = \sum (1/R_i) \implies R_{eq} = 10\Omega / N_{active}$ (for 3 active branches, $R_{eq} \approx 3.33\,\Omega$)
  - Voltage is identical across each branch: $V_i = 9.0\text{V}$ full line voltage (5mm LEDs glow bright emerald green, bulb radiant)
  - Current divides across branches: $I_i = 0.90\text{A}$ per active branch, $I_{total} = N_{active} \times 0.90\text{A}$ (up to $2.70\text{A}$)
  - Independence: Turning off or unplugging any single branch leaves all other branches operating at full voltage and brightness.
- **Discrete Segmented Particle Flow:**
  - Parallel rail current terminates at the last active branch and does not travel past inactive sockets (`pWireNode1ToNode2`, `pWireNode2ToNode3`, `conditionFn`).

## Modular Extension Board Hardware Features
- **High-Gloss PVC Gang Box:** Ivory/white chassis ($36 \times 1.2 \times 24$ units) with rounded edges, elevating rubber anti-skid feet, and 4 corner chrome mounting screws.
- **Power Supply Cord & Wall Plug:** Flexible black heavy-duty 3-core power cord exiting via a side rubber strain-relief grommet and terminating in a molded Indian 3-pin plug with brass prongs resting on the floor.
- **Indian 6A Universal Sockets (2 per row):** Clean 3-pin faceplates with oversized circular Earth pin hole, Live and Neutral shutter slots, 2-pin universal slot wings, and brass electrical contacts. Sockets hold removable appliance plugs.
- **5mm Indicator LEDs (2 per row):** Mounted directly beneath each socket on the gang box faceplate. Realistic translucent colored dome (`MeshPhysicalMaterial`) with chrome bezel ring and internal point light.
- **Dedicated Batten Lamp Holder + Bulb (1 per row):** Stepped ivory batten holder with removable incandescent tungsten filament test bulb.
- **Piano / Rocker Switches (3 per row):** 3 dedicated ivory rocker switches per row (`SW 1`, `SW 2`, `BULB SW`) with red status dot tilting along the X-axis ($-12^\circ$ for ON, $+12^\circ$ for OFF). Each socket and dedicated bulb holder has its own independent switch.
- **Mobile Touch Optimization:** Pointer distance tracking (`dist < 12px && elapsed < 400ms`) ensures smooth tapping on mobile touch screens without double triggers or OrbitControls interference.
- **Inside Wiring (X-Ray) Mode:** Dynamically transitions top plate `MeshPhysicalMaterial` transmission ($0.88$, opacity $0.32$, transparent) revealing internal Phase (Red `#ef4444`), Neutral (Black `#0f172a`), and Safety Earth (Green `#10b981`) looped busbars.
- **Multimeter HUD & Exhibition Guide:** Collapsible mobile bottom sheet multimeter and DIY School Exhibition Viva Q&A modal with physical wiring and GitHub Pages hosting instructions.
