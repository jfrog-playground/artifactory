#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
fs.writeFileSync(
  path.join(distDir, 'build-info.json'),
  JSON.stringify({
    buildTime: new Date().toISOString(),
    name: 'test-artifact-view',
  }, null, 2)
);
console.log('Build complete: dist/ created');
