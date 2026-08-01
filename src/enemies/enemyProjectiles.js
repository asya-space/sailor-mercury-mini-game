import { enemyTypes } from './enemyData.js';
import { enemies } from './enemies.js';
import { ctx, WORLD_WIDTH, canvas } from '../utils/canvas.js';
import { cameraX } from '../game/camera.js';
import { starForPurple } from '../assets/images.js';
import { hero } from '../hero/hero.js';

const enemyProjectiles = [];

function enemyAttackUpdate(enemy) {
    // start charging
    if (enemy.state === 'walking') {
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

function createPurpleStar(enemy) {
    const weaponStartX = (enemy.direction === 1) ? (enemy.x + enemy.weaponOffsetX)
                        : (enemy.x + enemy.w - enemy.weaponOffsetX),
          weaponStartY = enemy.y + enemy.weaponOffsetY; 
    // hero's center
    const targetHeroX = hero.x + hero.w / 2,
          targetHeroY = hero.y + hero.h / 2;
    // attacking direction
    let dx = targetHeroX - weaponStartX,
          dy = targetHeroY - weaponStartY;
    // direction normalize
    const length = Math.sqrt((dx * dx) + (dy * dy));
    dx /= length;
    dy /= length;

    const weaponSpeed = 8;
    // attacking vector
    const vx = dx * weaponSpeed,
          vy = dy * weaponSpeed;

    enemyProjectiles.push({
        img: starForPurple,
        x: weaponStartX,
        y: weaponStartY,
        vx,
        vy,
        damage: 1
    });
};

function drawWeapon() {
    const weaponW = 20,
          weaponH = weaponW * starForPurple.ratio;
    
    enemyProjectiles.forEach((weapon) => {
        ctx.drawImage(starForPurple, weapon.x - cameraX, weapon.y, weaponW, weaponH);
    })
};

function updateEnemyProjectile() {
    for (let i = enemyProjectiles.length - 1; i >= 0; i--) {

        const weapon = enemyProjectiles[i];

        weapon.x += weapon.vx;
        weapon.y += weapon.vy;

        if (
            weapon.x < -100 ||
            weapon.x > WORLD_WIDTH + 100 ||
            weapon.y < -100 ||
            weapon.y > canvas.height + 100
        ) {
            enemyProjectiles.splice(i, 1);
        }
    }
};
export { enemyAttackUpdate, enemyProjectiles, updateEnemyProjectile, drawWeapon };