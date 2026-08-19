import { ctx, canvas } from '../utils/canvas.js';

import { drawParallax } from '../world/parallax.js';
import { drawGround } from '../world/ground.js';
import { drawPlatforms } from '../world/platforms.js';
import { drawHero } from '../hero/drawHero.js';
import { drawHeroAttack } from '../hero/heroAttack.js';

import { updateHeroAttacks } from '../hero/heroAttack.js';

import { updateHero } from '../hero/updateHero.js';
import { updateCamera } from './camera.js';

import { boss } from '../boss/boss.js';

function update() {
    updateHero();
    updateCamera();
    updateHeroAttacks();
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
    boss.draw(ctx);
};

export function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
};