import { hero } from './hero.js';
import { WORLD_WIDTH, WORLD_HEIGHT, ctx } from '../utils/canvas.js';
import { GROUND_Y, GRAVITY } from '../constants.js';
import { platforms } from '../world/platforms.js';
import { enemies } from '../enemies/createEnemies.js';
import { boss } from '../boss/boss.js';
import { resolveCollisions } from '../game/resolveCollisions.js';

export function updateHero() {
    if (!hero.alive) return;
    hero.x += hero.velocityX;

    // borders by X-asix
    if (hero.x < 0) hero.x = 0;
    if (hero.x + hero.w > WORLD_WIDTH) hero.x = WORLD_WIDTH - hero.w;
    // borders by Y-asix
    if (hero.y < 0) hero.y = 0;
    if (hero.y + hero.h > WORLD_HEIGHT) hero.y = WORLD_HEIGHT - hero.h;
    
    hero.velocityY += GRAVITY ;
    hero.y += hero.velocityY;

    if (hero.y + hero.h >= GROUND_Y) {
        hero.y = GROUND_Y - hero.h;
        hero.velocityY = 0;
        hero.onGround = true;
    };

    if (hero.hitTimer > 0) {
        hero.hitTimer--;
    }

    // collisions hero with platforms
    platforms.forEach((platform) => {
        const collisionWithPlatform = 
            hero.x < platform.x + platform.w 
            && hero.x + hero.w > platform.x 
            && hero.y + hero.h >= platform.y 
            && hero.y + hero.h <= platform.y + hero.velocityY;

        if (hero.velocityY > 0 && collisionWithPlatform) {
            hero.y = platform.y - hero.h;
            hero.velocityY = 0;
            hero.onGround = true;
        };
    });

    // collisions hero with enemies
    for (const enemy of enemies) {
        resolveCollisions(hero, enemy);
    };

    resolveCollisions(hero, boss);
}