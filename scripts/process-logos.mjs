import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

/**
 * CLI Logo Processor
 * Replaces black and white pixels in template PNGs with two sets of brand colors.
 * 
 * Usage: 
 * node scripts/process-logos.js <light_c1> <light_c2> <dark_c1> <dark_c2>
 * 
 * c1: Replaces Black (#000000)
 * c2: Replaces White (#FFFFFF)
 */

const args = process.argv.slice(2);
if (args.length < 4) {
    console.error('Usage: node scripts/process-logos.js <light_c1> <light_c2> <dark_c1> <dark_c2>');
    console.log('Example: node scripts/process-logos.js "#FFFFFF" "#D4E7D8" "#005724" "#548A18"');
    process.exit(1);
}

const [lightC1, lightC2, darkC1, darkC2] = args;

let logosDir = path.resolve(process.cwd(), 'logos');

if (!fs.existsSync(logosDir)) {
    // Try parent directory
    logosDir = path.resolve(process.cwd(), '..', 'logos');
}

if (!fs.existsSync(logosDir)) {
    console.error(`Directory not found in ${process.cwd()} or parent.`);
    process.exit(1);
}

const files = fs.readdirSync(logosDir).filter(f => f.endsWith('.png') && !f.includes('_light') && !f.includes('_dark'));

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

async function processImage(file, c1, c2, suffix) {
    const filePath = path.join(logosDir, file);
    const image = await Jimp.read(filePath);
    const { width, height } = image.bitmap;

    const rgb1 = hexToRgb(c1);
    const rgb2 = hexToRgb(c2);

    if (!rgb1 || !rgb2) {
        throw new Error(`Invalid hex color: ${c1} or ${c2}`);
    }

    image.scan(0, 0, width, height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        const a = this.bitmap.data[idx + 3];

        // Only process visible pixels
        if (a > 0) {
            // Brightness (0 = black, 1 = white)
            const brightness = (r + g + b) / 3 / 255;

            // Linear interpolation between the two target colors based on original brightness
            this.bitmap.data[idx + 0] = Math.round(rgb1.r * (1 - brightness) + rgb2.r * brightness);
            this.bitmap.data[idx + 1] = Math.round(rgb1.g * (1 - brightness) + rgb2.g * brightness);
            this.bitmap.data[idx + 2] = Math.round(rgb1.b * (1 - brightness) + rgb2.b * brightness);
            // Alpha (transparency) from original file is preserved
        }
    });

    const outPath = path.join(logosDir, file.replace('.png', `${suffix}.png`));
    await image.write(outPath);
    console.log(`✔ Created: ${path.basename(outPath)}`);
}

async function main() {
    console.log('--- Logo Processor ---');
    console.log(`Setting Light: ${lightC1}, ${lightC2}`);
    console.log(`Setting Dark:  ${darkC1}, ${darkC2}`);
    console.log('----------------------');

    for (const file of files) {
        console.log(`Processing ${file}...`);
        await processImage(file, lightC1, lightC2, '_light');
        await processImage(file, darkC1, darkC2, '_dark');
    }

    console.log('Done!');
}

main().catch(err => {
    console.error('Error processing images:', err);
    process.exit(1);
});
