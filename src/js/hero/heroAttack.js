import { hero } from './hero.js';
import { enemies } from '../enemies/enemies.js';

import { ctx } from '../utils/canvas.js';
import { cameraX } from '../game/camera.js';

import { stick } from '../../assets/images.js';
import { drawBalls, spawnAttacks } from '../functions.js';

const heroProjectiles = [];
export function drawMoonStick(ctx) {
    const stickW = 10,
          stickH = stickW * stick.ratio,
          stickX = (hero.direction === 1) ? (hero.x + hero.w - 20) : (hero.x + 10),
          stickY = hero.y + 25;

    ctx.drawImage(stick, stickX - cameraX, stickY, stickW, stickH);
};

// charging attack
function drawCharge() {
    if (hero.cooldown > 5 || hero.cooldown <= 0) return;

    const progress = 1 - hero.cooldown / 5,
          radius = 4 + progress * 6,
          x = (hero.direction === 1) ? (hero.x + hero.w - 15) : (hero.x + 15),
          y = hero.y + 25;

    ctx.save();

    ctx.shadowBlur = 18;
    ctx.shadowColor = "#66d9ff";

    ctx.beginPath();
    ctx.arc(x - cameraX, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#8fefff";
    ctx.fill();

    ctx.restore();
};

function drawHeroAttack() {
    heroProjectiles.forEach((ball) => {
        drawBalls(ball.x, ball.y, '#66d9ff', '#8fefff');
    });
};

function updateHeroAttacks() {
    if (!hero.isAttacking) {
        heroProjectiles.forEach((item) => { 
            item.x += item.speed;
        });
        return;
    };

    hero.attackDuration--;

    if (hero.cooldown > 0) {
        hero.cooldown--;
    };

    if (hero.cooldown <= 0) {
        spawnAttacks(heroProjectiles, hero);
        hero.cooldown = 10;
    }

    if (hero.attackDuration <= 0) {
            hero.isAttacking = false;
    };

    heroProjectiles.forEach((item) => {
            item.x += item.speed;
    });
};

export { heroProjectiles, drawCharge, drawHeroAttack, updateHeroAttacks }
