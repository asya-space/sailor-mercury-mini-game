import './main.scss'
import { images } from './assets/images.js';
import { preload } from './utils/preload.js';
import { createGround } from './world/ground.js';
import { createPlatforms } from './world/platforms.js';
import { gameLoop } from './game/loop.js';
import { createEnemies } from './enemies/enemies.js';
import { enemyTypes } from './enemies/enemyData.js';
import { platforms } from './world/platforms.js';
import { GROUND_Y } from './constants.js';
import './game/input.js';

let gameRunning = false;
export let cameraX = 0;
// how to follow by state of the game

preload(images, () => {
    createGround();
    createPlatforms();

    createEnemies();
});

gameLoop();
