/**
 * One-time script to purge unused CSS from source files.
 * Run with: node scripts/purge-source-css.js
 *
 * WARNING: This modifies source files permanently. Make sure you have git to restore if needed.
 */

const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const ROOT = path.join(__dirname, '..');

// CSS files to purge (only the custom/template ones, not third-party minified libs)
const CSS_FILES_TO_PURGE = [
  'public/main-assets/css/style.css',
  'public/main-assets/css/react-adjustment.css',
  'public/custom-styles.css',
];

// Files to leave alone (minified vendor files)
const SKIP_FILES = [
  'bootstrap.min.css',
  'fontawesome.min.css',
  'magnific-popup.min.css',
  'nice-select.min.css',
  'slick.min.css',
  'remixicon.css',
  'fonts.css',
];

async function purgeSourceCSS() {
  console.log('Purging source CSS files...\n');

  const contentFiles = glob.sync('src/**/*.{js,jsx,ts,tsx}', {
    cwd: ROOT,
    absolute: true
  });

  let totalBefore = 0;
  let totalAfter = 0;

  for (const relativePath of CSS_FILES_TO_PURGE) {
    const cssFile = path.join(ROOT, relativePath);

    if (!fs.existsSync(cssFile)) {
      console.log(`  Skipping ${relativePath} (not found)`);
      continue;
    }

    const beforeSize = fs.statSync(cssFile).size;
    totalBefore += beforeSize;

    const result = await new PurgeCSS().purge({
      content: contentFiles,
      css: [cssFile],
      safelist: {
        standard: [
          /^slick/,
          /^mfp/,
          /^modal/,
          /^fade/,
          /^show/,
          /^collapse/,
          /^collapsing/,
          /^nav/,
          /^navbar/,
          /^dropdown/,
          /^btn/,
          /^container/,
          /^row/,
          /^col-/,
          /^d-/,
          /^text-/,
          /^bg-/,
          /^p-/,
          /^m-/,
          /^g-/,
          /^justify-/,
          /^align-/,
          /^flex-/,
          /^w-/,
          /^h-/,
          /^position-/,
          /^overflow-/,
          /^active/,
          /^disabled/,
          /^ri-/,
          /^fa-/,
          /^la-/,
          /^offcanvas/,
          /^accordion/,
          /^carousel/,
          /^tooltip/,
          /^popover/,
          /^toast/,
          /^spinner/,
          /^form-/,
          /^input-/,
          /^is-/,
          /^was-/,
          /^has-/,
        ],
        deep: [/slick/, /magnific/, /mfp/],
      },
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    });

    if (result[0]) {
      fs.writeFileSync(cssFile, result[0].css);
      const afterSize = fs.statSync(cssFile).size;
      totalAfter += afterSize;

      const saved = beforeSize - afterSize;
      const percent = ((saved / beforeSize) * 100).toFixed(0);
      console.log(`  ${relativePath}`);
      console.log(`    ${(beforeSize/1024).toFixed(1)}KB → ${(afterSize/1024).toFixed(1)}KB (saved ${(saved/1024).toFixed(1)}KB, ${percent}%)\n`);
    }
  }

  console.log(`Total: ${(totalBefore/1024).toFixed(1)}KB → ${(totalAfter/1024).toFixed(1)}KB`);
  console.log(`Saved: ${((totalBefore - totalAfter)/1024).toFixed(1)}KB`);
}

purgeSourceCSS().catch(console.error);
