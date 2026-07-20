import { GROUND_Y } from '../constants.js';
import { LEVEL_WIDTH } from '../constants.js';
import { getPlatformX } from './platforms.js';
import { WIDTH, ctx } from '../utils/canvas.js';
import { cameraX } from '../script.js';

import { bg1, bg2, bg3, bg4, bg5  } from '../assets/images.js';

export const layers = [
    { img: bg1, speed: 0.05 },
    { img: bg2, speed: 0.1 },
    { img: bg3, speed: 0.15 },
    { img: bg4, speed: 0.25 },
    { img: bg5, speed: 0.4 },
];

export function drawParallax() {
    layers.forEach((layer) => {
        const x = -cameraX * layer.speed;
        ctx.drawImage(layer.img, x, 0);
    });
}