import { enemies } from "./enemies";

export function updateEnemies() {
    enemies.forEach((enemy) => {
        if (!enemy.alive) return;
        enemy.x += enemy.velocityX * enemy.direction;

        if (enemy.x <= enemy.leftLimit ) {
            enemy.x = enemy.leftLimit;
            enemy.direction = 1;
            enemy.facing = 1;
        }
        if (enemy.x >= enemy.rightLimit) {
            enemy.x = enemy.rightLimit;
            enemy.direction = -1;
            enemy.facing = -1;
        }
    })
}