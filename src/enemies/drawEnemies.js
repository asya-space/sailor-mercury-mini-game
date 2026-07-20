import { enemies } from './enemies.js';
import { cameraX } from '../script.js';
import { ctx } from '../utils/canvas.js';

export function drawEnemies() {
    enemies.forEach(enemy => {
        if (!enemy.alive) return;
        ctx.drawImage(enemy.image, enemy.x - cameraX, enemy.y, enemy.w, enemy.h)
    });
}