import sharp from 'sharp'
import path from 'path'


// This script is used to process images for the website.
// It resizes the images to 400, 800, and 1200 pixels wide and saves them in the public/images/romephoto directory.
// It also saves the images in webp and jpg formats.
//to run: node scripts/process-images.js, replace romephoto.jpg with the name of the image you want to process
//make sure that the image directory under public/images/{x} has the same name as the image you want to process



const folderAndImageName = 'icelanddog'
const inputPath = `public/images/${folderAndImageName}`
const outputPath = `public/images/${folderAndImageName}`

async function processImage(filename) {
  const sizes = [400, 800, 1200, 1600]
  const formats = ['webp', 'jpg']

  for (const size of sizes) {
    for (const format of formats) {
      await sharp(`${inputPath}/${filename}`)
        .resize(size, null, { // null maintains aspect ratio
          withoutEnlargement: true
        })
        .toFormat(format, { 
          quality: 90 // Increased from 80 to 90
        })
        .toFile(`${outputPath}/${path.parse(filename).name}-${size}w.${format}`)
    }
  }
}

// Process the image
processImage(`${folderAndImageName}.jpg`)
  .then(() => console.log('Done processing images'))
  .catch(err => console.error('Error processing images:', err)) 