import { mercury } from '../assets/images.js';
import { hero } from './hero.js';
import { ctx } from '../utils/canvas.js';
import { cameraX } from '../script.js';

export function drawHero() {
    ctx.drawImage(mercury, hero.x - cameraX, hero.y, hero.w, hero.h);
}