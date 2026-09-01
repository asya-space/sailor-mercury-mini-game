import { ctx, canvas } from "../utils/canvas";
import { enemies } from "../enemies/createEnemies";


function drawRemainingMonsters() {
    const aliveEnemies = enemies.filter(enemies => enemies.alive === true).length;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(canvas.width - 140, 10, 130, 24);
    ctx.fillStyle = '#ccc';
    ctx.font = '12px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`Monsters: ${aliveEnemies}`, canvas.width - 15, 27);
};

export { drawRemainingMonsters };