import { enemies } from './enemies';
import { hero } from '../hero/hero.js';
import { enemyAttackUpdate, updateEnemyProjectile } from './enemyProjectiles.js';

export function updateEnemies() {
    enemies.forEach((enemy) => {
        if (!enemy.alive) return;
        const dx = hero.x - enemy.x,
              distance = Math.abs(dx),
              heroOnRight = hero.x > enemy.x,
              lookingAtHero = (heroOnRight && enemy.direction === 1) || (!heroOnRight && enemy.direction === -1),
              purpleLookingAtHero = (heroOnRight && enemy.direction === -1) || (!heroOnRight && enemy.direction === 1);

        enemy.x += enemy.velocityX * enemy.direction;
        if (distance <= enemy.visionRange && purpleLookingAtHero) { // if hero is too close, enemy will stop walking
            enemyAttackUpdate(enemy);
        } else {
            enemy.velocityX = 2;
        }

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

    updateEnemyProjectile();
}