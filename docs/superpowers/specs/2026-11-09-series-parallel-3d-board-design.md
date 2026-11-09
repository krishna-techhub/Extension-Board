# 3D Interactive School Project Board: Series vs Parallel Circuit

**Date:** 2026-11-09  
**Status:** Approved  
**Delivery Format:** Single Self-Contained Web App (`index.html`)  

---

## 1. Project Overview & Goal
The objective is to create a realistic, photorealistic 3D interactive physics and electronics exhibition board demonstrating **Series** and **Parallel** electric circuits. 
The application serves two critical purposes:
1. **Interactive Virtual 3D Lab:** An interactive exhibition demonstration suitable for smartboards, laptops, and project submissions with real-time 3D lighting, physics, particle current flow, switch toggles, and bulb unscrew break-circuit demonstrations.
2. **Physical DIY Model Blueprint:** A complete school project guide with exact bill of materials, circuit wiring diagrams, and Viva/presentation questions for crafting the real hardware board using plywood/sunboard, 9V batteries, mini bulbs, and rocker switches.

---

## 2. 3D Board Architecture & Layout

### 2.1 Display Board Geometry
* **Base Board:** Dimensions scaled to standard $30\text{ cm} \times 20\text{ cm} \times 1.5\text{ cm}$ wooden exhibition board with beveled edges, realistic polished cedar/plywood texture, corner metallic mounting brackets, and rear angled easel stands.
* **Partition & Labels:**
  * Laser-engraved divider down the middle dividing the board into **Top Half (Series Circuit)** and **Bottom Half (Parallel Circuit)**.
  * Brass label plates with 3D text decals showing Circuit Names, Schematics, and Mathematical formulas.

### 2.2 3D Components
1. **9V Transistor Batteries (x2):**
   * Realistic rectangular 9V battery 3D models with vinyl label graphics, snap connectors (positive octagonal female, negative circular male), and mounting brackets.
2. **SPST Knife/Toggle Switches (x2):**
   * Realistic ceramic/bakelite base with metallic brass contact jaws and hinged knife lever.
   * Smooth physics rotation animation when toggling between ON ($0^\circ$) and OFF ($40^\circ$), with synthesized click sound.
3. **Miniature Screw Bulb Sockets & Filament Bulbs (x6: 3 Series, 3 Parallel):**
   * Threaded brass base socket mounted to the board.
   * Miniature transparent glass envelope (`MeshPhysicalMaterial` with transmission, roughness, and specular highlights).
   * Internal tungsten filament wire and supporting leads.
   * Interactive Unscrew interaction: Clicking a bulb initiates a smooth unscrew & float animation, breaking electrical contact in that specific socket.
4. **Color-Coded Circuit Wiring:**
   * Positive leads (Red insulated cable) and Negative/Return leads (Black insulated cable).
   * 3D smooth tube geometry (`TubeGeometry` created from `CatmullRomCurve3` splines) fastened to the board with miniature cable clips.
5. **Dynamic Electron Particle Flow:**
   * High-performance instanced glowing particle system along wire paths.
   * Flow speed dynamically driven by calculated current $I = V / R$.
   * Particles halt when a switch is opened or when a bulb is unscrewed in a series path.

---

## 3. Electrical Simulation & Physics Engine

### 3.1 Physics Calculation
Each bulb has a nominal resistance $R = 10\,\Omega$. Battery provides $V_{bat} = 9\,\text{V}$.

1. **Series Circuit:**
   * $R_{eq} = R_1 + R_2 + R_3 = 10 + 10 + 10 = 30\,\Omega$
   * Current: $I = \frac{V}{R_{eq}} = \frac{9}{30} = 0.3\,\text{A}$
   * Voltage Drop per bulb: $V_i = I \times R_i = 0.3 \times 10 = 3.0\,\text{V}$ (1/3rd of battery voltage $\implies$ Dim warm glow)
   * **Failure Condition:** If any bulb is unscrewed, $R_{eq} \to \infty$, $I \to 0$, all bulbs extinguish simultaneously.

2. **Parallel Circuit:**
   * $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} = \frac{3}{10} \implies R_{eq} = 3.33\,\Omega$
   * Voltage per branch: $V_1 = V_2 = V_3 = 9.0\,\text{V}$ (Full battery voltage $\implies$ Intense bright warm-white glow)
   * Branch Current: $I_i = \frac{9}{10} = 0.9\,\text{A}$
   * Total Current: $I_{total} = 0.9 \times 3 = 2.7\,\text{A}$
   * **Failure Condition:** If one bulb is unscrewed, its individual branch current drops to $0$, but the other branches maintain full $9.0\,\text{V}$ and continue glowing at full brightness.

### 3.2 Dynamic Visual Shading
* Bulbs use dynamic `PointLight` sources combined with emissive glow bloom shaders.
* Series bulb emissive intensity = $0.35$, light distance = $3.0$, warm orange tint (`#ff9329`).
* Parallel bulb emissive intensity = $1.0$, light distance = $7.0$, bright warm white tint (`#fff1c2`).

---

## 4. User Interface & Controls

1. **Direct 3D Interaction:**
   * Three.js `Raycaster` detecting clicks on Switches (toggles ON/OFF) and Bulbs (unscrews/re-screws).
   * Hover cursor indicator and subtle outline highlight on interactable 3D objects.
2. **Real-Time Multimeter HUD:**
   * Floating glassmorphic HUD panel displaying live electrical metrics:
     * Mode: Voltage ($V$), Current ($A$), Resistance ($\Omega$), Power ($W$).
     * Side-by-side comparison table showing theoretical vs live readings.
3. **Camera Viewport Presets:**
   * Smooth tweened camera transitions via buttons:
     * `Perspective 3D` (Hero angle)
     * `Top Blueprint` (Direct overhead circuit board schematic view)
     * `Series Zoom` (Close-up of series circuit)
     * `Parallel Zoom` (Close-up of parallel circuit)
4. **Physical Project DIY Guide Modal:**
   * Full modal with tabs:
     * **Materials Checklist:** 6V-9V mini bulbs, bulb holders, 9V battery & clips, SPST switches, jumper wires, sunboard/plywood base.
     * **Step-by-step assembly guide:** Cutting, component placement, soldering/screw connections.
     * **Viva/Teacher Q&A:** Top 10 viva questions on Series vs Parallel circuits with concise, winning answers.

---

## 5. Technical Stack & Implementation Details

* **Language:** Single self-contained HTML5 file (`index.html`).
* **Libraries (loaded via CDN):**
  * `Three.js` (r128)
  * `OrbitControls.js`
  * `Tailwind CSS` (CDN)
  * `Lucide Icons` / SVG icons
  * `Canvas-generated procedural textures` for photorealistic wood grain, brushed metal, and battery labels (no external image assets required $\implies$ works completely offline).
* **Audio Synthesis:** Web Audio API procedural sound synthesis for switch clicks and bulb unscrew ratchets (no external sound files required).
* **Browser Compatibility:** Chrome, Edge, Firefox, Safari on Windows, macOS, Android, and iOS.
