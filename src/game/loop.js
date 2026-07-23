import { ctx, canvas } from '../utils/canvas.js';
import { images } from '../assets/images.js';
import { createGround } from '../world/ground.js';
import { createPlatforms } from '../world/platforms.js';
import { drawParallax } from '../world/parallax.js';
import { drawGround } from '../world/ground.js';
import { drawPlatforms } from '../world/platforms.js';
import { drawHero } from '../hero/drawHero.js';
import { drawEnemies } from '../enemies/drawEnemies.js';
import { updateHero } from '../hero/updateHero.js';

function update() {
    updateHero();
}

function draw() {
    // clean of each frame
    // for moving characters, background etc. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawParallax();
    drawGround();
    drawEnemies();
    drawPlatforms();
    drawHero();
}

export function gameLoop() {
    update();
    draw();

    requestAnimationFrame(gameLoop);
}