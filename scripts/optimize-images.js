const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../public/assets');

const imagesToConvert = [
  { input: 'logo.jpg', output: 'logo.webp', quality: 85 },
  { input: 'prodslider.jpg', output: 'prodslider.webp', quality: 80 },
  { input: 'michael_dennis_portrait.jpg', output: 'michael_dennis_portrait.webp', quality: 85 },
  { input: 'about_portrait.jpg', output: 'about_portrait.webp', quality: 85 },
  { input: 'footerlogo.png', output: 'footerlogo.webp', quality: 85 },
];

async function convertImages() {
  console.log('Converting images to WebP...\n');

  for (const img of imagesToConvert) {
    const inputPath = path.join(assetsDir, img.input);
    const outputPath = path.join(assetsDir, img.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`  ⚠ Skipping ${img.input} (not found)`);
      continue;
    }

    try {
      const inputStats = fs.statSync(inputPath);

      await sharp(inputPath)
        .webp({ quality: img.quality })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`  ✓ ${img.input} → ${img.output}`);
      console.log(`    ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
    } catch (err) {
      console.log(`  ✗ Error converting ${img.input}: ${err.message}`);
    }
  }

  console.log('Done!');
}

convertImages();
