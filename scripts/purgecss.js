const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

async function purge() {
  const outDir = path.join(__dirname, '..', 'out');

  // Find all CSS files in out directory
  const cssFiles = glob.sync('**/*.css', { cwd: outDir, absolute: true });

  if (cssFiles.length === 0) {
    console.log('No CSS files found in out/ directory');
    return;
  }

  console.log(`Found ${cssFiles.length} CSS files to process...`);

  // Get content files to scan for used classes
  const contentFiles = glob.sync('src/**/*.{js,jsx,ts,tsx}', {
    cwd: path.join(__dirname, '..'),
    absolute: true
  });

  let totalBefore = 0;
  let totalAfter = 0;

  for (const cssFile of cssFiles) {
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
      if (saved > 0) {
        console.log(`  ${path.basename(cssFile)}: ${(beforeSize/1024).toFixed(1)}KB → ${(afterSize/1024).toFixed(1)}KB (saved ${(saved/1024).toFixed(1)}KB)`);
      }
    }
  }

  console.log(`\nTotal: ${(totalBefore/1024).toFixed(1)}KB → ${(totalAfter/1024).toFixed(1)}KB`);
  console.log(`Saved: ${((totalBefore - totalAfter)/1024).toFixed(1)}KB (${(100 - (totalAfter/totalBefore)*100).toFixed(1)}%)`);
}

purge().catch(console.error);
