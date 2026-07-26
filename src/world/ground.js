import { canvas, WORLD_WIDTH, ctx } from '../utils/canvas.js';
import { GROUND_Y } from '../constants.js';
import { cameraX } from '../game/camera.js';
import { basic } from '../assets/images.js';

const ground = [];

export const createGround = () => {
    ground.length = 0;
    ground.push({ x: 0, y: GROUND_Y, w: WORLD_WIDTH, h: 50 });
};

export function drawGround() {
    const tileSize = 50;
    for (let x = 0; x < WORLD_WIDTH; x += tileSize) {
        ctx.drawImage(basic, x - cameraX, GROUND_Y, tileSize, tileSize);
    };
}
