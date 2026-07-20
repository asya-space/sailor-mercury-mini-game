import { WIDTH, ctx } from '../utils/canvas.js';
import { GROUND_Y, LEVEL_WIDTH } from "../constants.js";
import { cameraX } from '../script.js';
import { mercury } from '../assets/images.js';

const heroW = 80;
const heroH = heroW * (675 / 396);
export const hero = {
    x: 100,
    y: 365,
    w: heroW,
    h: heroH
}

export function drawMercury() {
    ctx.drawImage(mercury, hero.x - cameraX, hero.y, hero.w, hero.h);
}