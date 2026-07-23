import './main.scss'
import { ctx } from './utils/canvas.js';
import { images } from './assets/images.js';
import { preload } from './utils/preload.js';
import { createGround } from './world/ground.js';
import { createPlatforms } from './world/platforms.js';
import { drawParallax } from './world/parallax.js';
import { drawGround } from './world/ground.js';
import { drawPlatforms } from './world/platforms.js';
import { drawHero } from './hero/drawHero.js';
import { drawEnemies } from './enemies/drawEnemies.js';
import { gameLoop } from './game/loop.js';
import './game/input.js';

let gameRunning = false;
export let cameraX = 0;
// how to follow by state of the game

preload(images, () => {
    createGround();
    createPlatforms();
});

gameLoop();

