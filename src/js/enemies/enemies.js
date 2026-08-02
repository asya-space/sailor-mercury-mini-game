import { enemyTypes } from './enemyData.js';
import { platforms } from '../world/platforms.js';
import { GROUND_Y } from '../constants.js';

const enemies = [];
function createEnemies() {
    enemies.length = 0;

    function createEnemy(monsterType, type, x, y, leftLimit, rightLimit) {
        return {
            ...monsterType,
            type,
            x,
            y,
            leftLimit,
            rightLimit,
            direction: 1, // speed is always +
            alive: true,
            cooldownTimer: 0, // currency state
            chargeTimer: 0,
            isCharging: false,
            state: 'walking', // initial state for all enemies
            timer: 0,
            shotLeft: 0,
            shotTimer: 0
        }
    };

    function flyingEnemy(monsterType, type, x, y, leftLimit, rightLimit) {
        return {
            ...monsterType,
            type,
            x, 
            y,
            leftLimit,
            rightLimit,
            direction: 1,
            baseY: y,
            alive: true,
            flightTime: Math.random() * Math.PI * 2,
            state: 'flying',
            timer: 0,
            shotLeft: 0,
            shotTimer: 0
        }
    };
    enemies.push(
        /* purpleMonster */
        createEnemy(
            enemyTypes.purpleMonster,
            'purpleMonster',
            450, 
            GROUND_Y - enemyTypes.purpleMonster.h,
            450,
            900
        ),
        createEnemy(
            enemyTypes.purpleMonster,
            'purpleMonster',
            1650, 
            GROUND_Y - enemyTypes.purpleMonster.h,
            1650,
            2050
        ),
        createEnemy(
            enemyTypes.purpleMonster,
            'purpleMonster',
            3150,
            GROUND_Y - enemyTypes.purpleMonster.h,
            3150, 
            3550
        ),
        createEnemy(
            enemyTypes.purpleMonster,
            'purpleMonster',
            4550,
            GROUND_Y - enemyTypes.purpleMonster.h,
            4550,
            5000
        ),
        /* catMonster */
        createEnemy(
            enemyTypes.cat,
            'cat',
            1480, 
            platforms[6].y - enemyTypes.cat.h, 
            platforms[6].x, 
            platforms[6].x + platforms[6].w - enemyTypes.cat.w
        ),
        createEnemy(
            enemyTypes.cat,
            'cat',
            2350,
            platforms[10].y - enemyTypes.cat.h,
            platforms[10].x,
            platforms[10].x + platforms[10].w - enemyTypes.cat.w 
        ),
        createEnemy(
            enemyTypes.cat,
            'cat',
            4500,
            platforms[20].y - enemyTypes.cat.h,
            platforms[20].x,
            platforms[20].x + platforms[20].w - enemyTypes.cat.w
        ),
        /* blueMonster */
        createEnemy(
            enemyTypes.blueMonster,
            'blueMonster',
            2750,
            platforms[12].y - enemyTypes.blueMonster.h,
            platforms[12].x,
            platforms[12].x + platforms[12].w - enemyTypes.blueMonster.w
        ),
        createEnemy(
            enemyTypes.blueMonster,
            'blueMonster',
            3600,
            platforms[16].y - enemyTypes.blueMonster.h,
            platforms[16].x,
            platforms[16].x + platforms[16].w - enemyTypes.blueMonster.w
        ),
        createEnemy(
            enemyTypes.blueMonster,
            'blueMonster',
            4900,
            platforms[22].y - enemyTypes.blueMonster.h,
            platforms[22].x,
            platforms[22].x + platforms[22].w - enemyTypes.blueMonster.w
        ),
        /* redMonster */
        flyingEnemy(
            enemyTypes.redMonster,
            'redMonster',
            1700,
            platforms[2].y - enemyTypes.redMonster.h,
            platforms[2].x - 100,
            platforms[2].x + platforms[2].w - enemyTypes.redMonster.w + 100
        ),
        flyingEnemy(
            enemyTypes.redMonster,
            'redMonster',
            1700,
            platforms[7].y - enemyTypes.redMonster.h,
            platforms[7].x - 100,
            platforms[7].x + platforms[7].w - enemyTypes.redMonster.w + 100
        ),
        flyingEnemy(
            enemyTypes.redMonster,
            'redMonster',
            3800,
            platforms[18].y - enemyTypes.redMonster.h,
            platforms[18].x - 100,
            platforms[18].x + platforms[18].w - enemyTypes.redMonster.w + 100
        )
    )
}

export { enemies, createEnemies }