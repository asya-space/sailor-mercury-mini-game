import { canvas, WORLD_WIDTH } from '../utils/canvas.js';
import { hero } from '../hero/hero.js';

let cameraX = 0;
function updateCamera() {
    cameraX = hero.x - canvas.width / 2;
    if (cameraX < 0) cameraX = 0;
    if (cameraX > WORLD_WIDTH - canvas.width) {
        cameraX = WORLD_WIDTH - canvas.width;
    }
}

export { cameraX, updateCamera }