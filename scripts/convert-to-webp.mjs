/**
 * Converts all PNG/JPEG in src/assets to WebP (quality 85).
 * Run: node scripts/convert-to-webp.mjs
 */
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, '..', 'src', 'assets')

function getImageFiles(dir, list = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      getImageFiles(full, list)
    } else if (/\.(png|jpe?g)$/i.test(e.name)) {
      list.push(full)
    }
  }
  return list
}

const files = getImageFiles(assetsDir)
console.log(`Converting ${files.length} images to WebP...`)
for (const file of files) {
  const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp')
  await sharp(file).webp({ quality: 85 }).toFile(webpPath)
  console.log('  ', path.relative(assetsDir, webpPath))
}
console.log('Done.')
