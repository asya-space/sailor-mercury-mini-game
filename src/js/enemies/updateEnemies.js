import { enemies } from './enemies.js';
import { hero } from '../hero/hero.js';
import { enemyProjectiles } from '../weapon/stars/createWeapon.js';
import { updateEnemyProjectile } from '../weapon/stars/updateProjectiles.js';
import { enemyAttackUpdate } from './enemyAttack.js';
import { cameraX } from '../game/camera.js';

function drawEnemy(ctx) {
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

function lookingAtHero(enemy, hero) {
    const heroOnRight = hero.x > enemy.x;

    if (enemy.reverseDirection) {
        return (heroOnRight && enemy.direction === -1) 
               || (!heroOnRight && enemy.direction === 1);
    }

    return (heroOnRight && enemy.direction === 1)
           || (!heroOnRight && enemy.direction === -1);
};

function updateEnemies() {
    enemies.forEach((enemy) => {
        if (!enemy.alive) return;
        const dx = hero.x - enemy.x,
              distance = Math.abs(dx);

        enemy.x += enemy.velocityX * enemy.direction;
        if (distance <= enemy.visionRange && lookingAtHero(enemy, hero)) { // if hero is too close, enemy will stop walking
            enemyAttackUpdate(enemy);
            enemy.velocityX = 2;
        };

        if (enemy.x <= enemy.leftLimit) {
            enemy.x = enemy.leftLimit;
            enemy.direction = 1;
        };

        if (enemy.x >= enemy.rightLimit) {
            enemy.x = enemy.rightLimit;
            enemy.direction = -1;
        };

        if (enemy.flying) {
            enemy.flightTime += 0.08;
            enemy.y = enemy.baseY + Math.sin(enemy.flightTime) * 20;
        };
    });

    updateEnemyProjectile(enemyProjectiles);
};

export { drawEnemy, lookingAtHero, updateEnemies };

console.log(enemies);