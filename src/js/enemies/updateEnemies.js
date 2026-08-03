import { enemies } from './enemies';
import { hero } from '../hero/hero.js';
import { enemyProjectiles } from '../weapon/stars/createWeapon.js';
import { updateEnemyProjectile } from '../weapon/stars/updateProjectiles.js';
import { enemyAttackUpdate } from './enemyAttack.js';

function lookingAtHero(enemy, hero) {
    const heroOnRight = hero.x > enemy.x;

    if (enemy.reverseDirection) {
        return (heroOnRight && enemy.direction === -1) 
               || (!heroOnRight && enemy.direction === 1);
    }

    return (heroOnRight && enemy.direction === 1)
           || (!heroOnRight && enemy.direction === -1);
};

export function updateEnemies() {
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