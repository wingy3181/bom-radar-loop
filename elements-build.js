const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/bom-radar-loop/runtime.js',
    './dist/bom-radar-loop/polyfills.js',
    './dist/bom-radar-loop/scripts.js',
    './dist/bom-radar-loop/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/bom-radar-loop.js');
  await fs.copyFile(
    './dist/bom-radar-loop/styles.css',
    'elements/styles.css'
  );
})();