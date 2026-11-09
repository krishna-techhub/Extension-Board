const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: index.html does not exist');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

const requiredTokens = [
  'ProceduralTextures',
  'SoundFX',
  'createWoodTexture',
  'createBatteryTexture',
  'createPlaqueTexture',
  'playSwitch',
  'playUnscrew'
];

let failed = false;
for (const token of requiredTokens) {
  if (!html.includes(token)) {
    console.error(`FAIL: Missing token: ${token}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log('PASS: Scaffold verification passed');
