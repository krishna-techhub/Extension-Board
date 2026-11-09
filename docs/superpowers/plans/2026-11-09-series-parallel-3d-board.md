# Series & Parallel 3D Interactive Exhibition Board Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a photorealistic, fully interactive 3D virtual exhibition board (`index.html`) demonstrating Series vs Parallel electrical circuits with physics calculations, electron particle flow, toggle switches, bulb unscrew mechanics, digital multimeter, and a complete school DIY hardware build guide.

**Architecture:** Single self-contained HTML5 file utilizing Three.js (r128) and OrbitControls via CDN with procedurally generated high-resolution textures (wood grain, brushed brass, battery label) and Web Audio API synthesized sound effects. Circuit logic is maintained in a decoupled state engine that re-calculates Ohm's Law in real time and updates light emission, particle velocity, and HUD meters.

**Tech Stack:** Three.js (r128), OrbitControls, Tailwind CSS CDN, HTML5 Canvas 2D (procedural textures), Web Audio API, Vanilla JavaScript (ES6+).

**Spec:** `docs/superpowers/specs/2026-11-09-series-parallel-3d-board-design.md`

## Global Constraints
- Single self-contained file (`index.html`) runnable by double-clicking in any modern browser without local build tools or Node.js.
- 100% offline capable: All textures (wood, labels, battery graphics) and audio sounds (switch snaps, bulb clicks) generated procedurally via Canvas 2D and Web Audio API.
- Raycaster click interaction for both SPST switches and all 6 individual bulbs.
- Strict physics accuracy:
  - Series: $R = 30\,\Omega$, $I = 0.3\,\text{A}$, $3\,\text{V}$ per bulb $\implies$ dim warm glow. Unscrewing any bulb breaks the entire circuit.
  - Parallel: $R = 3.33\,\Omega$, $I = 2.7\,\text{A}$ ($0.9\,\text{A}$ per branch), $9\,\text{V}$ per bulb $\implies$ full bright glow. Unscrewing one bulb leaves other bulbs unaffected.

---

### Task 1: Scaffolding, Texture Synthesizers & Sound Engine

**Files:**
- Create: `index.html`
- Create: `tests/verify_scaffold.js`

**Interfaces:**
- Produces: 
  - `ProceduralTextures.createWoodTexture()`: returns `THREE.CanvasTexture`
  - `ProceduralTextures.createBatteryTexture()`: returns `THREE.CanvasTexture`
  - `ProceduralTextures.createPlaqueTexture(title, subtitle)`: returns `THREE.CanvasTexture`
  - `SoundFX.playSwitch(on)`: synthesizes mechanical switch snap
  - `SoundFX.playUnscrew()`: synthesizes plastic/metal ratchet click

- [ ] **Step 1: Write test to verify procedural textures and audio initialization**

Create `tests/verify_scaffold.js` to test procedural texture generation and canvas outputs:
```javascript
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('ProceduralTextures') || !html.includes('SoundFX')) {
  console.error('FAIL: Missing ProceduralTextures or SoundFX module');
  process.exit(1);
}
console.log('PASS: Scaffold verification passed');
```

- [ ] **Step 2: Implement procedural canvas texture generators and Web Audio synthesizer in `index.html`**

Write standard HTML5 skeleton in `index.html`:
- CDN links for Tailwind CSS, Three.js r128, OrbitControls.
- `ProceduralTextures`: Canvas 2D functions creating realistic polished cedar wood grain, 9V battery litho-print label with hazard signs and voltage rating, brass metallic plate labels with engraved serif fonts.
- `SoundFX`: Web Audio API oscillator/noise nodes synthesizing snappy toggle switch click and subtle ceramic/bulb unscrew clicks.

- [ ] **Step 3: Run verification test**

Run: `node tests/verify_scaffold.js`  
Expected: `PASS: Scaffold verification passed`

- [ ] **Step 4: Commit progress**

---

### Task 2: 3D Scene Setup, Lighting & Exhibition Base Board

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: `ProceduralTextures.createWoodTexture()`, `ProceduralTextures.createPlaqueTexture()`
- Produces: `scene`, `camera`, `renderer`, `controls`, `boardMesh`, `seriesPlaque`, `parallelPlaque`

- [ ] **Step 1: Configure Three.js Scene, Camera, Shadows, and Studio Lighting**

- Setup `THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)`.
- Set initial position at `(0, 24, 28)` looking at `(0, 0, 0)`.
- Setup `THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" })` with ACESFilmicToneMapping and soft shadows.
- Add Key DirectionalLight with shadows, Fill DirectionalLight, and warm AmbientLight.

- [ ] **Step 2: Build the 3D Exhibition Base Board**

- Main board: `BoxGeometry(34, 1.2, 24)` with beveled chamfer edges, applied with the procedural wood grain texture.
- Add 4 corner metallic brass brackets with screw head details.
- Add 2 rear angled wooden easel legs for display tilt.
- Add engraved brass divider line running horizontally across the center separating the Series (top) and Parallel (bottom) halves.
- Add 3D title plaques:
  - Top Half: "SERIES CIRCUIT — [ $R_{eq} = R_1 + R_2 + R_3$ | Current is constant ]"
  - Bottom Half: "PARALLEL CIRCUIT — [ $1/R_{eq} = 1/R_1 + 1/R_2 + 1/R_3$ | Voltage is constant ]"

- [ ] **Step 3: Test 3D rendering and OrbitControls**

Ensure camera orbits smoothly, shadows fall onto the table, and window resizing adjusts camera aspect ratio.

- [ ] **Step 4: Commit progress**

---

### Task 3: 3D Component Models (9V Batteries, Knife Switches, Sockets & Bulbs)

**Files:**
- Modify: `index.html`

**Interfaces:**
- Produces: 
  - `createBattery(x, z)`: returns Battery Group with realistic snap terminals.
  - `createSwitch(x, z, id)`: returns SPST Switch Group with hinged knife blade.
  - `createBulbSocket(x, z, id, type)`: returns Socket Group with screw socket, glass envelope, filament, and point light.
  - State registry: `circuitState = { series: { switch: true, bulbs: [true, true, true] }, parallel: { switch: true, bulbs: [true, true, true] } }`.

- [ ] **Step 1: Build 3D 9V Battery Model**

- Rectangular prism casing with battery texture decal.
- Top metallic terminal plate with Octagonal female terminal (+) and Circular male terminal (-).
- Plastic mounting strap clamping battery to the board.
- Instantiate Battery 1 in Series section at `(-12, 1.2, -6)` and Battery 2 in Parallel section at `(-12, 1.2, 6)`.

- [ ] **Step 2: Build 3D SPST Knife / Toggle Switch Model**

- Bakelite base block with brass terminal blocks.
- Rotating knife blade lever with insulated handle hinged on pivot pin.
- Lever rotates smoothly between $0^\circ$ (Closed / ON) and $40^\circ$ (Open / OFF).
- Instantiate Series Switch at `(-5, 1.2, -6)` and Parallel Switch at `(-5, 1.2, 6)`.

- [ ] **Step 3: Build 3D Screw Bulb Socket & Transparent Filament Bulb**

- Socket: Cylindrical brass threaded collar with black plastic insulating base.
- Glass Bulb: Transparent sphere + neck `MeshPhysicalMaterial` (`roughness: 0.1, transmission: 0.9, thickness: 0.5, ior: 1.5`).
- Internal tungsten filament: Glowing coiled spiral/hairpin wire inside glass.
- PointLight placed inside filament center (`castShadow: false` for optimal performance).
- Bulb unscrew animation: Clicking bulb triggers rotation + vertical translation $+2.5$ units up and tilted to show it is disconnected.
- Instantiate 3 bulbs for Series at `(3, 1.2, -6)`, `(8, 1.2, -6)`, `(13, 1.2, -6)`.
- Instantiate 3 bulbs for Parallel at `(3, 1.2, 3)`, `(8, 1.2, 6)`, `(13, 1.2, 9)`.

- [ ] **Step 4: Commit progress**

---

### Task 4: Color-Coded 3D Wiring & Dynamic Electron Particle Flow

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Component terminal positions
- Produces:
  - `createWire(points, color)`: returns `THREE.TubeGeometry` mesh.
  - `createElectronParticles(curve, count, color)`: returns `THREE.InstancedMesh` flowing along curve.
  - `updateParticles(delta)`: updates electron particle positions based on current speed.

- [ ] **Step 1: Construct 3D Curved Wire Paths**

- Use `THREE.CatmullRomCurve3` with spline points clamped neatly along the board surface:
  - **Series Loop:** Battery(+) $\to$ Switch $\to$ Bulb 1 $\to$ Bulb 2 $\to$ Bulb 3 $\to$ Battery(-). Red positive, black negative return.
  - **Parallel Bus:** Battery(+) $\to$ Switch $\to$ Common Rail (+) feeding Bulbs 1, 2, 3 $\to$ Common Rail (-) returning to Battery(-).
- Generate smooth `TubeGeometry(curve, 64, 0.12, 8, false)` with red/black flexible PVC insulation materials.
- Add small metallic cable clamps securing wires to the board.

- [ ] **Step 2: Implement Dynamic Electron Flow (Particle System)**

- Create `THREE.InstancedMesh` of small glowing spheres placed on spline curves.
- In `render()` loop, advance each particle's curve parameter $t = (t + \text{speed} \cdot \Delta t) \bmod 1.0$.
- Particle speed directly tied to calculated circuit current $I$:
  - If current $I = 0$ (open switch or unscrewed series bulb), particle speed $= 0$ (stopped).
  - Parallel branches only run particles when their specific branch is intact.

- [ ] **Step 3: Commit progress**

---

### Task 5: Circuit Physics Simulation Engine & Raycasting Interaction

**Files:**
- Modify: `index.html`

**Interfaces:**
- Produces:
  - `calculateCircuits()`: evaluates Ohm's law and updates bulb glow intensities and colors.
  - `setupInteractivity()`: Three.js `Raycaster` click handlers for switches and bulbs.

- [ ] **Step 1: Implement Ohm's Law Simulation Engine**

```javascript
function updateCircuitPhysics() {
  // SERIES CIRCUIT CALCULATION
  const sSwitch = state.series.switch;
  const sBulbs = state.series.bulbs; // [bool, bool, bool]
  const sAllConnected = sBulbs.every(b => b);
  const sActive = sSwitch && sAllConnected;
  
  const V_series = 9.0;
  const R_bulb = 10.0;
  const R_series_total = sAllConnected ? 30.0 : Infinity;
  const I_series = sActive ? (V_series / R_series_total) : 0.0; // 0.3 A
  const V_bulb_series = sActive ? (I_series * R_bulb) : 0.0; // 3.0 V each
  
  // PARALLEL CIRCUIT CALCULATION
  const pSwitch = state.parallel.switch;
  const pBulbs = state.parallel.bulbs;
  const V_parallel = 9.0;
  let activeParallelBranches = 0;
  pBulbs.forEach((connected, i) => {
    const branchActive = pSwitch && connected;
    if (branchActive) activeParallelBranches++;
  });
  const R_parallel_total = activeParallelBranches > 0 ? (R_bulb / activeParallelBranches) : Infinity;
  const I_parallel_total = pSwitch ? (activeParallelBranches * (V_parallel / R_bulb)) : 0.0;
  
  // Update bulb filaments, light brightness, colors, and HUD
  applyVisualEffects({ sActive, V_bulb_series, I_series, pSwitch, pBulbs, V_parallel, I_parallel_total });
}
```

- [ ] **Step 2: Implement Visual Lighting & Glow Updates**

- Series bulbs: Dim warm-amber glow (`emissive: 0xff7700`, intensity `0.4`, point light `distance: 3.5`, `intensity: 0.8`).
- Parallel bulbs: Intense warm-white radiance (`emissive: 0xffea88`, intensity `1.2`, point light `distance: 8.0`, `intensity: 2.2`).
- Unscrewed bulb: Displaced $+2.5$ units up, tilted, emissive off, light off.

- [ ] **Step 3: Implement Raycaster Click Interaction**

- Setup mouse move and click raycaster.
- Hover effect: cursor turns to `pointer`, hovered switch or bulb shows subtle emissive outline.
- Click on Switch: plays `SoundFX.playSwitch()`, animates knife lever between $0^\circ \leftrightarrow 40^\circ$, toggles state, recalculates circuits.
- Click on Bulb: plays `SoundFX.playUnscrew()`, animates unscrew/rescrew, toggles state, recalculates circuits.

- [ ] **Step 4: Commit progress**

---

### Task 6: Glassmorphic Multimeter HUD, Info Panels & Camera Presets

**Files:**
- Modify: `index.html`

**Interfaces:**
- Produces:
  - Top Navigation Bar with title, subtitle, and action buttons.
  - Live Digital Multimeter with Series vs Parallel live comparison.
  - Camera View Controller with smooth tweening to preset angles.

- [ ] **Step 1: Build Glassmorphic Multimeter & Comparison Table**

- Fixed HUD overlay positioned top-right with dark frosted glass styling (`backdrop-blur-md bg-slate-900/80 border border-slate-700/50 rounded-2xl p-4 text-white`).
- Live metrics readout:
  - **Series:** Voltage ($3.0\,\text{V}$ / bulb), Current ($0.30\,\text{A}$ total), Resistance ($30\,\Omega$), Status ("CIRCUIT INTACT" or "CIRCUIT BROKEN").
  - **Parallel:** Voltage ($9.0\,\text{V}$ / bulb), Current ($0.90\,\text{A}$ / branch, $2.70\,\text{A}$ total), Resistance ($3.33\,\Omega$), Status.
- Key comparison takeaways highlighted:
  - Series: Current same, voltage divides, one breaks $\implies$ all off!
  - Parallel: Voltage same, current divides, one breaks $\implies$ others stay on!

- [ ] **Step 2: Add Camera Preset Controls**

- Floating HUD toolbar bottom-center:
  - `Default 3D` (`camera.position.set(0, 24, 28)`)
  - `Top Blueprint` (`camera.position.set(0, 36, 0.1)`)
  - `Series Zoom` (`camera.position.set(4, 12, -4)`)
  - `Parallel Zoom` (`camera.position.set(4, 12, 12)`)
- Smooth camera animation using requestAnimationFrame interpolation (LERP) toward target position.

- [ ] **Step 3: Commit progress**

---

### Task 7: Physical School Project DIY Guide Modal & Viva Voce Q&A

**Files:**
- Modify: `index.html`

**Interfaces:**
- Produces:
  - Modal with 3 comprehensive tabs:
    1. **Bill of Materials (Khareedari List):** Components, estimated cost in INR, specifications.
    2. **Step-by-Step Assembly Guide:** Tool checklist, board prep, wiring instructions, safety tips.
    3. **Teacher Viva Voce / Presentation Q&A:** Top 10 frequently asked questions with top-scoring answers.

- [ ] **Step 1: Implement DIY Guide Modal Layout & Tabs**

- Add "Physical Model Kaise Banayein? (DIY Guide)" button in header with glowing badge.
- Modal with clean tab navigation:
  - **Tab 1: Materials List:**
    - Sunboard/MDF board ($30\times 20\,\text{cm}$) ~ ₹50
    - 6x 6V-9V Mini torch screw bulbs + sockets ~ ₹60
    - 2x 9V standard batteries + snap clips ~ ₹50
    - 2x SPST switches ~ ₹30
    - Red & Black connecting wire roll ~ ₹30
    - Glue gun / double sided tape
  - **Tab 2: Step-by-Step Assembly Instructions:**
    - Step 1: Board marking and divider line.
    - Step 2: Fixing bulb holders and switches.
    - Step 3: Series circuit loop wiring (End-to-end connection).
    - Step 4: Parallel circuit wiring (Common positive rail, common negative rail).
    - Step 5: Battery connection and testing.
  - **Tab 3: Viva Voce & Teacher Questions:**
    - Q1: *Ghar ki domestic wiring series me hoti hai ya parallel me aur kyu?* (Answer: Parallel, taaki ek appliance band karne par baaki chalte rahein aur sabko 220V mile).
    - Q2: *Series me bulbs dim kyu jalte hain?* (Answer: Total voltage 3 bulbs me divide ho jata hai: $9\text{V}/3 = 3\text{V}$, power $P = V^2/R$ kam hoti hai).
    - Q3: *Parallel circuit ka equivalent resistance series se kam kyu hota hai?* (Formula proof $1/R = 1/R_1 + \dots$).
    - Q4: *Fairy lights (Diwali ladi) series me hoti hai ya parallel me?*

- [ ] **Step 2: Commit progress**

---

### Task 8: Verification, Polish, Performance & Responsiveness

**Files:**
- Create: `tests/e2e_verify.js`
- Modify: `index.html`

**Interfaces:**
- End-to-end testing script validating HTML structure, canvas textures, Three.js initialization, circuit logic, and UI elements.

- [ ] **Step 1: Write automated end-to-end validation test**

Create `tests/e2e_verify.js` validating:
- Zero syntax errors in HTML/JS.
- Presence of all required components (batteries, switches, bulbs, wires, multimeter, DIY modal, audio engine).
- Correct mathematical resistance and voltage calculation logic.

- [ ] **Step 2: Run verification test**

Run: `node tests/e2e_verify.js`  
Expected: `ALL VERIFICATIONS PASSED`

- [ ] **Step 3: Final polish & documentation**
- Verify responsive layout on mobile screens, tablets, and full desktop monitors.
- Ensure audio context unlocks on first user click.
- Clean up any stray debug logs.
