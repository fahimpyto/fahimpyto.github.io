import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const images = [
  {
    src: 'public/fa_lkn.png',
    width: 400,
    height: 400,
  },
  {
    src: 'public/images/metascrub-hero.png',
    width: 800,
    height: null,
  },
];

for (const img of images) {
  const inputPath = join(root, img.src);
  const outputPath = inputPath.replace(/\.\w+$/, '.webp');

  await sharp(inputPath)
    .resize(img.width, img.height, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);

  const before = (await sharp(inputPath).metadata()).size;
  const after = (await sharp(outputPath).metadata()).size;
  const pct = ((1 - after / before) * 100).toFixed(1);
  console.log(`${img.src}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${pct}% smaller)`);
}

console.log('\nDone. Update <img> src attributes to use .webp versions.');
