const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: index.html does not exist');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

const checks = [
  { name: 'Procedural Textures module', token: 'ProceduralTextures' },
  { name: 'Extension Board Texture Generator', token: 'createExtensionBoardTexture' },
  { name: 'Modular Socket Faceplate Generator', token: 'createSocketTexture' },
  { name: 'Modular Rocker Switch Faceplate Generator', token: 'createRockerSwitchTexture' },
  { name: 'Web Audio SoundFX module', token: 'SoundFX' },
  { name: 'Mechanical Rocker Switch Click Sound', token: 'playRockerSwitch' },
  { name: 'Plug Insert / Eject Sound', token: 'playPlug' },
  { name: 'Inside Wiring (X-Ray) Mode Toggle', token: 'btn-toggle-xray' },
  { name: 'Multimeter HUD close button', token: 'btn-close-multimeter' },
  { name: 'Multimeter HUD toggle header button', token: 'btn-toggle-multimeter' },
  { name: 'Multimeter HUD slide-out reopen tab', token: 'btn-open-multimeter-tab' },
  { name: 'Segmented wire: positive bus 1 to 2', token: 'pWireNode1ToNode2' },
  { name: 'Segmented wire: positive bus 2 to 3', token: 'pWireNode2ToNode3' },
  { name: 'Segmented wire: negative return bus 3 to 2', token: 'pWireNeg3To2' },
  { name: 'Segmented wire: negative return bus 2 to 1', token: 'pWireNeg2To1' },
  { name: 'Safety Earth Green Bus Wire', token: 'earthWire1' },
  { name: 'Conditional electron particle stream logic', token: 'conditionFn' },
  { name: 'Ohm law series current (9V / 30 ohm)', token: '9.0 / 30.0' },
  { name: 'Ohm law parallel branch voltage (9V)', token: 'pVoltPerBulb = 9.0' },
  { name: 'DIY Model Guide Modal', token: 'diy-modal' },
  { name: 'Series individual switches array', token: 'switches: [true, true, true]' },
  { name: 'Series switch components array', token: 'seriesItems' },
  { name: 'Parallel switch components array', token: 'parallelItems' },
  { name: 'Red illuminated master switch indicator', token: 'isRed' },
  { name: '5mm Indicator LED builder', token: 'create5mmIndicatorLED' },
  { name: 'Removable Appliance Plug builder', token: 'createAppliancePlug' },
  { name: 'Dedicated Batten Bulb Holder builder', token: 'createBulbHolderWithBulb' },
  { name: 'Responsive Camera Framing for mobile', token: 'updateResponsiveCamera' },
  { name: 'GitHub Pages free hosting button', token: 'btn-hosting-guide' },
  { name: 'GitHub Pages step-by-step hosting guide', token: 'tab-content-hosting' }
];

let failed = false;
for (const check of checks) {
  if (!html.includes(check.token)) {
    console.error(`FAIL: Missing check for [${check.name}] (token: ${check.token})`);
    failed = true;
  } else {
    console.log(`PASS: ${check.name}`);
  }
}

if (failed) {
  console.error('E2E Verification Failed');
  process.exit(1);
}

console.log('\n========================================');
console.log('ALL VERIFICATIONS PASSED SUCCESSFULLY!');
console.log('========================================');
