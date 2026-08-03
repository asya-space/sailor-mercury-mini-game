import { ctx, canvas } from '../utils/canvas.js';
import { images } from '../../assets/images.js';

import { drawParallax } from '../world/parallax.js';
import { drawGround } from '../world/ground.js';
import { drawPlatforms } from '../world/platforms.js';
import { drawHero } from '../hero/drawHero.js';
import { drawEnemies } from '../enemies/drawEnemies.js';
import { drawHeroAttack, heroProjectiles } from '../hero/heroAttack.js';
import { drawWeapon } from '../weapon/stars/drawWeapon.js';
import { drawCatAttack, drawBlueMonsterAttack } from '../weapon/balls/ballsMonstersProjectiles.js';

import { updateAttacks, updateBallProjectiles } from '../functions.js';
import { updateHero } from '../hero/updateHero.js';
import { updateEnemies } from '../enemies/updateEnemies.js';
import { updateCamera } from './camera.js';

import { boss } from '../boss/boss.js';
import { hero } from '../hero/hero.js';

import { enemyProjectiles } from '../weapon/stars/createWeapon.js';
import { catProjectiles, blueMonsterProjectiles } from '../weapon/balls/ballsMonstersProjectiles.js';

function update() {
    updateHero();
    updateEnemies();
    updateCamera();
    updateAttacks(hero, heroProjectiles);
    updateBallProjectiles(catProjectiles);
    updateBallProjectiles(blueMonsterProjectiles);
    boss.update();
}

function draw() {
    // clean of each frame
    // for moving characters, background etc. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawParallax();
    drawGround();
    drawPlatforms();
    drawEnemies();
    drawHero();
    drawHeroAttack();
    drawWeapon(enemyProjectiles);
    drawCatAttack();
    drawBlueMonsterAttack();
    boss.draw(ctx);
}

export function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}