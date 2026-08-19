import { createPurpleStar, createRedStar } from '../weapon/stars/createWeapon.js';
import { catProjectiles, blueMonsterProjectiles } from '../weapon/balls/ballsMonstersProjectiles.js';
import { spawnAttacks } from '../functions.js';

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
            };

            if (enemy.type === 'cat') {
                spawnAttacks(catProjectiles, enemy);
            };

            if (enemy.type === 'blueMonster') {
                spawnAttacks(blueMonsterProjectiles, enemy);
            }

            enemy.shotLeft--;

            if (enemy.shotLeft > 0) {
                enemy.shotTimer = 10;
            } else {
                enemy.state = 'cooldown';
                enemy.timer = enemy.cooldown;
            };
        };
        return;
    };

    // cooldown
    if (enemy.state === 'cooldown') {
        enemy.timer--;

        if (enemy.timer <= 0) {
            enemy.state = 'walking';
        };
    };
};

export { enemyAttackUpdate };