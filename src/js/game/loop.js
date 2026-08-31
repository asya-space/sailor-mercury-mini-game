import { ctx, canvas } from '../utils/canvas.js';

import { drawParallax } from '../world/parallax.js';
import { drawGround } from '../world/ground.js';
import { drawPlatforms } from '../world/platforms.js';
import { drawHero } from '../hero/drawHero.js';
import { drawHeroAttack } from '../hero/heroAttack.js';

import { updateHeroAttacks } from '../hero/heroAttack.js';
import { updateHero } from '../hero/updateHero.js';
import { updateCamera } from './camera.js';

import { enemies, monsterProjectiles } from '../enemies/createEnemies.js';
import { enemyProjectiles } from '../enemies/enemyData.js';
import { drawWeapon, drawMonstersBalls } from '../enemies/drawWeapon.js';
import { updateEnemyProjectile, updateMonsterProjectiles } from '../enemies/updateProjectiles.js';

import { boss } from '../boss/boss.js';

function update() {
    updateHero();
    updateCamera();
    updateHeroAttacks();
    enemies.forEach(enemy => enemy.update());
    updateEnemyProjectile(enemyProjectiles);
    updateMonsterProjectiles(monsterProjectiles);
    boss.update();
};

function draw() {
    // clean of each frame
    // for moving characters, background etc. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawParallax();
    drawGround();
    drawPlatforms();
    drawHero();
    drawHeroAttack();
    enemies.forEach(enemy => enemy.draw())
    drawWeapon(enemyProjectiles);
    drawMonstersBalls(monsterProjectiles);
    boss.draw(ctx);
};

export function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
};