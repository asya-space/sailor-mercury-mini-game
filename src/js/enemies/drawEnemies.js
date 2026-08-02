import { enemies } from './enemies.js';
import { cameraX } from '../game/camera.js';
import { ctx } from '../utils/canvas.js';

export function drawEnemies() {
    enemies.forEach(enemy => {
        if (!enemy.alive) return;
        ctx.save();
        if (enemy.direction === -1) {
            ctx.translate(enemy.x - cameraX + enemy.w, enemy.y);
            ctx.scale(-1, 1);
            ctx.drawImage(enemy.image, 0, 0, enemy.w, enemy.h);
        } else {
            ctx.drawImage(enemy.image, enemy.x - cameraX, enemy.y, enemy.w, enemy.h);
        };
        ctx.restore();
    });
}