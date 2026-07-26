import { hero } from './hero.js';
import { WORLD_WIDTH, WORLD_HEIGHT } from '../utils/canvas.js';
import { GROUND_Y } from '../constants.js';

export function updateHero() {
    if (!hero.alive) return;
    hero.x += hero.velocityX;

    // borders by X-asix
    if (hero.x < 0) hero.x = 0;
    if (hero.x + hero.w > WORLD_WIDTH) hero.x = WORLD_WIDTH - hero.w;
    // borders by Y-asix
    if (hero.y < 0) hero.y = 0;
    if (hero.y + hero.h > WORLD_HEIGHT) hero.y = WORLD_HEIGHT - hero.h;
    
    hero.velocityY += 0.5;
    hero.y += hero.velocityY;

    if (hero.y + hero.h >= GROUND_Y) {
        hero.y = GROUND_Y - hero.h;
        hero.velocityY = 0;
        hero.onGround = true;
    }
}