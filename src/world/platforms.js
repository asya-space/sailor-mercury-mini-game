import { WIDTH, ctx } from '../utils/canvas.js';
import { cameraX } from '../script.js';
import { stoneHand } from '../assets/images.js'; 

export const platforms = [];

export function createPlatforms() {
    platforms.length = 0;
    // Platforms throughout the level
    const platData = [
        // Section 1 - start area
        { x: 200, y: 400, w: 150 }, { x: 450, y: 340, w: 120 }, { x: 650, y: 280, w: 140 },
        { x: 850, y: 350, w: 130 }, { x: 1050, y: 300, w: 150 },
        // Section 2
        { x: 1300, y: 380, w: 120 }, { x: 1480, y: 310, w: 140 }, { x: 1700, y: 250, w: 130 },
        { x: 1900, y: 340, w: 150 }, { x: 2100, y: 280, w: 120 },
        // Section 3
        { x: 2350, y: 360, w: 140 }, { x: 2550, y: 300, w: 130 }, { x: 2750, y: 240, w: 150 },
        { x: 2950, y: 320, w: 120 }, { x: 3150, y: 370, w: 140 },
        // Section 4
        { x: 3400, y: 350, w: 130 }, { x: 3600, y: 280, w: 150 }, { x: 3800, y: 320, w: 120 },
        { x: 4000, y: 260, w: 140 }, { x: 4200, y: 350, w: 130 },
        // Section 5 - boss area
        { x: 4500, y: 380, w: 200 }, { x: 4750, y: 300, w: 150 },
        { x: 4900, y: 200, w: 200 },
    ];

    platData.forEach((platform, index) => {
        const img = stoneHand;
                //    ? bonesPlatform
                //    : stoneHand;
        const h = platform.w * img.ratio;
        platforms.push({ 
            x: platform.x, 
            y: platform.y, 
            w: platform.w, 
            h, 
            img });
    });
}

export function getPlatformX(platform) {
    const x = platform.x - cameraX;
    if (x + platform.w < -10 || x > WIDTH + 10) return null;
    return x;
}

export function drawPlatforms() {
    platforms.forEach((platform) => {
        const x = getPlatformX(platform);
        
        if (x === null) return;
        ctx.drawImage(platform.img, x, platform.y, platform.w, platform.h);
    });
}