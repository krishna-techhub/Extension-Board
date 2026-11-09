# Real Modular Extension Board: Series vs Parallel Circuit Demonstration

**Date:** 2026-11-09  
**Status:** Approved  
**Target:** Realistic Indian 3-Pin Modular Extension Board (Multi-Plug Gang Box) demonstrating why domestic extension boards use Parallel wiring vs what happens in Series wiring.

---

## 1. Physical Anatomy & Dimensions
- **Enclosure:** High-gloss ivory/white PVC modular gang box ($34 \times 1.6 \times 22$ units) with rounded edges, mounting screws, and a heavy-duty 3-core power cord ($1.5\,\text{mm}^2$ flexible black PVC cable) exiting via a rubber strain-relief grommet.
- **Top Row (Series Extension Module):**
  - Red Master Rocker Switch ("SERIES DEMO • 30Ω TOTAL LOOP").
  - 3x Indian 6A Universal Sockets (Large Earth hole, Live and Neutral slots) wired end-to-end in Series.
  - 3x 3-Pin Plug-Top Bulb Adapters with transparent glass filament bulbs.
- **Bottom Row (Parallel Extension Module):**
  - Blue Master Rocker Switch ("PARALLEL (NORMAL HOME EXTENSION BOARD)").
  - 3x Indian 6A Universal Sockets with individual rocker switches wired in Parallel.
  - 3x 3-Pin Plug-Top Bulb Adapters.
- **Master Neon Power Indicator:** Red translucent lens illuminated with internal neon glow.
- **X-Ray / Inside Wiring Mode:** Allows making the PVC top cover transparent to display internal Phase (Red), Neutral (Black), and Earth (Green) looped busbars and wires.

---

## 2. Electrical Physics Engine
- **Mains AC / DC Demonstration:** Nominal $240\,\text{V}$ (or $9\,\text{V}$ DC scale, calibrated to standard domestic equivalent).
  - **Series Row:** Voltage divides equally across active bulbs ($80\,\text{V}$ / bulb or $3.0\,\text{V}$ / bulb). Total current $I$ is low ($0.30\,\text{A}$). Filaments glow with a dim warm-orange tint. Removing or turning off any single plug breaks the entire chain $\implies$ all sockets dead.
  - **Parallel Row:** Full line voltage across every socket ($240\,\text{V}$ or $9.0\,\text{V}$). Current drawn is additive ($0.9\,\text{A}$ per active socket, up to $2.7\,\text{A}$). Filaments glow with bright warm-white radiance. Turning off or unplugging any socket does not affect any other socket.

---

## 3. Interactivity & Controls
- Click on any Rocker Switch: Plays realistic mechanical switch snap, rotates rocker lever, recalculates electrical states.
- Click on any Bulb / Plug: Smoothly animates unplugging upward ($+2.5$ units) and tilts, opening the socket circuit.
- "X-Ray Inside Wiring" Button: Toggles PVC top casing opacity between $1.0$ (solid glossy white PVC) and $0.22$ (transmissive transparent acrylic), revealing internal copper/brass terminals, busbars, and flowing electrons.
- Digital Multimeter HUD: Displays Socket Voltage, Line Current, Net Resistance, and School Viva answers.
