import { canvas, WORLD_WIDTH, ctx } from '../utils/canvas.js';
import { GROUND_Y } from '../constants.js';
import { cameraX } from '../game/camera.js';
import { basic } from '../assets/images.js';

const ground = [];

export const createGround = () => {
    ground.length = 0;
    ground.push({ x: 0, y: GROUND_Y, w: WORLD_WIDTH, h: 45 });
};

export function drawGround() {
    const tileSize = 45;
    const startX = Math.floor(cameraX / tileSize) * tileSize;
    const endX = cameraX + canvas.width + tileSize;

    for (let x = startX; x < endX; x += tileSize) {
        ctx.drawImage(basic, x - cameraX, GROUND_Y, tileSize, tileSize);
    }
}
