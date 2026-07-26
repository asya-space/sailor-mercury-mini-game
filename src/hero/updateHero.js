import { hero } from './hero.js';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../utils/canvas.js';

export function updateHero() {
    if (!hero.alive) return;
    hero.x += hero.velocityX;

    // borders by X-asix
    if (hero.x < 0) hero.x = 0;
    if (hero.x + hero.w > WORLD_WIDTH) hero.x = WORLD_WIDTH - hero.w;
    // borders by Y-asix
    if (hero.y < 0) hero.y = 0;
    if (hero.y + hero.h > WORLD_HEIGHT) hero.y = WORLD_HEIGHT - hero.h;

}