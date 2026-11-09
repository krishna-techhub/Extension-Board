# 🔌 3D Modular Extension Board (Series vs Parallel Domestic Wiring)

Interactive 3D Physics and Electrical Engineering Exhibition Board designed for School Science Exhibitions (CBSE / ICSE / State Boards). Demonstrates why household extension boards and domestic wiring are strictly wired in **Parallel** and why **Series** fails.

Built with **Three.js (r128)**, procedural textures, interactive sound effects (Web Audio API), and real-time Ohm's Law circuit simulation in a **single standalone file (`index.html`)** with zero build tools or external servers required.

---

## 🌟 Key Features

1. **Authentic Indian Modular Gang Box:**
   - Realistic ivory/white PVC modular chassis ($36 \times 1.2 \times 24$ units) with rounded bevels, elevating rubber feet, and chrome corner mounting screws.
   - Side rubber strain-relief grommet with flexible 3-core heavy-duty power cord and molded Indian 3-pin plug resting on the floor.
   - Central red neon indicator lamp.

2. **2 Sockets + 5mm LEDs + 1 Dedicated Test Bulb (Per Row):**
   - **Indian 6A Universal Sockets:** Clean 3-pin faceplate (Earth pin hole, Live & Neutral shutter slots, 2-pin universal slot wings). Sockets feature removable appliance plugs.
   - **5mm Indicator LEDs:** Placed directly beneath each socket on the gang box faceplate. Glowing colored dome with chrome bezel ring indicates branch power status (amber dim for series, emerald green radiant for parallel).
   - **Dedicated Batten Lamp Holder:** Cylindrical lamp holder with removable incandescent tungsten filament bulb acting as the external test load.
   - **Modular Rocker Switches:** Realistic mechanical switches with dynamic red ON indicator dot (tilts $-12^\circ$ for ON, $+12^\circ$ for OFF).

3. **Inside Wiring (X-Ray) Mode:**
   - Switches the top faceplate to transparent acrylic ($0.88$ transmission, $0.32$ opacity).
   - Reveals internal color-coded electrical busbars:
     - **Phase / Live:** Red (`#ef4444`) looped through switches to socket Live terminals.
     - **Neutral:** Black (`#0f172a`) return path.
     - **Safety Earth:** Green (`#10b981`) connected to Earth pin sockets.
   - Animated electron particle streams with segmented conditional routing.

4. **100% Mobile & Touch Friendly:**
   - Dynamic camera framing: Automatically switches between desktop landscape view (`fov: 45`) and elevated mobile vertical view (`fov: 54`, `camera.position.set(0, 36, 36)`) to ensure the board fits without horizontal clipping.
   - Pointer & touch raycasting: Tap switches, appliance plugs, or test bulbs smoothly on smartphones without double clicks or interfering with OrbitControls rotation.
   - Floating collapsible Multimeter HUD and quick-access camera angle presets.

---

## ⚡ Circuit Physics Specifications

### 1. Series Row (Daisy Chain - Failure Mode)
- **Circuit Equation:** $R_{eq} = R_1 + R_2 + R_3 = 10\Omega + 10\Omega + 10\Omega = 30\Omega$
- **Current:** $I = V / R_{eq} = 9.0\text{V} / 30.0\Omega = 0.30\text{A}$ (identical throughout loop)
- **Voltage:** Divides equally across all 3 loads: $V_i = 3.0\text{V}$ each.
- **Visual:** 5mm indicator LEDs and bulb glow dimly in warm amber.
- **Critical Failure Mode:** Unplugging any single appliance plug, unscrewing the test bulb, or switching OFF any individual switch breaks the entire closed circuit loop. **All appliances shut down simultaneously ($0\text{V}, 0\text{A}$).**

### 2. Parallel Row (Standard Domestic Extension Board)
- **Circuit Equation:** $1/R_{eq} = \sum (1/R_i) \implies R_{eq} = 10\Omega / N_{active}$ (for 3 active branches: $R_{eq} \approx 3.33\Omega$)
- **Branch Voltage:** Full line voltage across every branch: $V_i = 9.0\text{V}$
- **Branch Current:** $I_i = 9.0\text{V} / 10.0\Omega = 0.90\text{A}$ per branch. Total current: $I_{total} = N_{active} \times 0.90\text{A}$ (up to $2.70\text{A}$).
- **Visual:** 5mm indicator LEDs glow brilliant emerald green and the test bulb radiates at full brightness.
- **Independence:** Switching OFF or unplugging one appliance has **zero effect** on the other branches.

---

## 🚀 How to Host on GitHub Pages (100% Free Lifetime)

You can publish this interactive 3D board online in less than 2 minutes at zero cost. Students, teachers, and science fair judges can open the link directly on their smartphones or scan a printed QR Code at your exhibition booth!

### Step 1: Create a GitHub Account & New Repository
1. Go to [github.com](https://github.com) and log in (or create a free account).
2. In the top-right corner, click **"+"** &rarr; **"New repository"**.
3. Name your repository (e.g., `extension-board-3d`).
4. Select **Public** and leave other options unchecked.
5. Click **"Create repository"**.

### Step 2: Upload Files
1. On the repository page, click **"uploading an existing file"** (or use git push).
2. Drag and drop `index.html` and `README.md` into the browser window.
3. Scroll down and click **"Commit changes"**.

### Step 3: Enable GitHub Pages
1. Go to the repository's **Settings** tab (gear icon at the top).
2. In the left navigation menu, click **Pages** (under the "Code and automation" section).
3. Under **"Build and deployment" &rarr; "Branch"**:
   - Change `None` to `main` (or `master`).
   - Leave the folder as `/ (root)`.
4. Click **Save**.

### Step 4: Get Your Live Link & QR Code
1. Wait 30–60 seconds for GitHub to build your site. Refresh the Pages tab.
2. Your live website URL will appear at the top:
   ```
   https://<your-username>.github.io/extension-board-3d/
   ```
3. Copy this URL and paste it into any free QR Code Generator (e.g., `qr-code-generator.com` or `canva.com`).
4. Print the QR Code and paste it on your school exhibition chart paper!

---

## 🛠️ Physical Working Model Guide (School Science Project)

Want to build a physical version of this board for your CBSE/ICSE science exhibition?

### Budget & Component Shopping List (Approx. ₹250 - ₹300)
| Item | Quantity | Approx. Cost |
| :--- | :--- | :--- |
| Indian 8-Module or 12-Module PVC Gang Box with Faceplate | 1 | ₹80 - ₹100 |
| Indian 6A 3-Pin Universal Sockets | 4 (2 Series + 2 Parallel) | ₹80 |
| Indian 6A Piano/Rocker Switches | 6 (3 Series: SW1, SW2, BULB SW + 3 Parallel: SW1, SW2, BULB SW) | ₹60 |
| 5mm Indicator LEDs + 1kΩ Resistors | 4 | ₹15 |
| B22 Batten Bulb Holders + 15W Night Bulbs | 2 | ₹30 |
| Color-coded wires (Red Phase, Black Neutral, Green Earth) | 2 meters | ₹30 |
| **Total Estimated Budget** | | **₹295 - ₹315** |

### Safety Notice for School Exhibitions
> ⚠️ **Important Safety Guideline:**  
> For school competitions, **DO NOT connect directly to 240V AC mains electricity**. Instead, use a **9V DC battery** or a **12V 2A DC adapter** with 12V LED bulbs / indicator LEDs. This makes the physical board 100% shock-safe for students and judges to touch and inspect.

---

## 🎓 Viva Voce Q&A for School Science Fair

**Q1: Why are household appliances connected in parallel and not in series?**  
*Answer:* In parallel connection:
1. Each appliance receives the full rated line voltage (240V in India).
2. Every appliance can be controlled independently by its own switch.
3. If one appliance fails or is switched off, other appliances continue to operate normally.
In series, voltage divides among devices (making them work inefficiently or not at all), and if any single appliance breaks, the entire household power shuts off.

**Q2: What happens to total resistance when more appliances are added in parallel?**  
*Answer:* The equivalent resistance decreases: $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots$. Consequently, total current drawn from the main supply increases ($I_{total} = I_1 + I_2 + \dots$).

**Q3: What is the purpose of the Safety Earth (Green) wire in a 3-pin socket?**  
*Answer:* The Earth pin connects the metallic chassis of high-power appliances (iron, refrigerator, microwave) to the ground. In case of insulation failure where the live wire touches the metal casing, current flows safely to ground, tripping the MCB/fuse and preventing fatal electric shocks.

---

## 💻 Tech Stack & Offline Usage

- **Zero dependencies to install:** 100% offline runnable in any modern web browser.
- **Three.js (r128)** + OrbitControls.
- **HTML5 Canvas 2D:** Generates all textures procedurally without downloading external image files.
- **Web Audio API:** Generates realistic tactile switch clicks and socket plugging audio in real time.
- **Tailwind CSS:** Responsive HUD with glassmorphism design.

---

## 📜 License
MIT License — Free to use for school science projects, educational exhibitions, and pedagogical demonstrations.
