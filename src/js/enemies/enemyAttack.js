import { enemyTypes } from './enemyData.js';
import { enemies } from './enemies.js';
import { ctx, WORLD_WIDTH, canvas } from '../utils/canvas.js';
import { cameraX } from '../game/camera.js';
import { starForPurple } from '../../assets/images.js';
import { hero } from '../hero/hero.js';
import { createPurpleStar, createRedStar, enemyProjectiles } from '../weapon/createWeapon.js';

function enemyAttackUpdate(enemy) {
    // start charging
    if (enemy.state === 'walking' || enemy.state === 'flying') {
        enemy.state = 'charging';
        enemy.timer = enemy.attackCharge;
        return;
    };
    // charging
    if (enemy.state === 'charging') {
        enemy.timer--;

        if (enemy.timer <= 0) {
            enemy.state = 'shooting';
            enemy.shotLeft = 3;
            if (enemy.type === 'purpleMonster') enemy.shotLeft = 1;
            enemy.shotTimer = 10;
        };
        return;
    };

    // shooting
    if (enemy.state === 'shooting') {
        enemy.shotTimer--;

        if (enemy.shotTimer <= 0) {
            if (enemy.type === 'purpleMonster') {
                createPurpleStar(enemy);
            };

            if (enemy.type === 'redMonster') {
                createRedStar(enemy);
            }

            enemy.shotLeft--;

            if (enemy.shotLeft > 0) {
                enemy.shotTimer = 10;
            } else {
                enemy.state = 'cooldown';
                enemy.timer = enemy.attackCooldown;
            };
        };
        return;
    };

    // cooldown
    if (enemy.state === 'cooldown') {
        enemy.timer--;

        if (enemy.timer <= 0) {
            enemy.state = 'walking';
        }
    }
};


export { enemyAttackUpdate };