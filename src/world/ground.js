import { WIDTH, ctx } from '../utils/canvas.js';
import { GROUND_Y, LEVEL_WIDTH } from '../constants.js';
import { cameraX } from '../script.js';
import { basic } from '../assets/images.js';

const ground = [];

export const createGround = () => {
    ground.length = 0;
    ground.push({ x: 0, y: GROUND_Y, w: LEVEL_WIDTH, h: 50 });
};

export function drawGround() {
    const tileSize = 50;
    for (let x = 0; x < LEVEL_WIDTH; x += tileSize) {
        ctx.drawImage(basic, x - cameraX, GROUND_Y, tileSize, tileSize);
    };
}
