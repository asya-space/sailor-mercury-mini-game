import '../scss/main.scss'
import { images } from '../assets/images.js';
import { preload } from './utils/preload.js';
import { createGround } from './world/ground.js';
import { createPlatforms } from './world/platforms.js';
import { createEnemy, enemies } from './enemies/createEnemies.js';
import { gameLoop } from './game/loop.js';
import { platforms } from './world/platforms.js';
import './game/input.js';

let gameRunning = false;
// how to follow by state of the game

function initGame() {
        preload(images, () => {
        createGround();
        createGround();
        createPlatforms();
        createEnemy();
        gameLoop();
    });
};
initGame();
