import { hero } from './hero.js';
import { enemies } from '../enemies/enemies.js';
import { ctx } from '../utils/canvas.js';
import { cameraX } from '../game/camera.js';
import { stick } from '../../assets/images.js';

const projectiles = [];

function spawnAttacks() {
    projectiles.push({
        x: (hero.direction === 1) ? (hero.x + hero.w - 10) : (hero.x + 10),
        y: hero.y + 25,
        speed: 8 * hero.direction,
        damage: 10
    });
}

export function drawMoonStick(ctx) {
    const stickW = 10,
          stickH = stickW * stick.ratio,
          stickX = (hero.direction === 1) ? (hero.x + hero.w - 20) : (hero.x + 10),
          stickY = hero.y + 25;

    ctx.drawImage(stick, stickX - cameraX, stickY, stickW, stickH);
}

// charging attack
function drawCharge() {
    if (hero.attackCoolDown > 5 || hero.attackCoolDown <= 0) return;

    const progress = 1 - hero.attackCoolDown / 5,
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
}

function drawBalls(x, y) {
    if (hero.attackCoolDown <= 0) return;
    ctx.save();
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#66d9ff";

    ctx.beginPath();
    ctx.arc(x - cameraX, y, 6, 0, Math.PI * 2);

    ctx.fillStyle = "#8fefff";
    ctx.fill();
    // white light on the ball
    ctx.beginPath();
    ctx.arc(x - cameraX - 2, y - 2, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();
}

function drawHeroAttack() {
    projectiles.forEach((ball) => {
        drawBalls(ball.x, ball.y);
    })
}

function updateAttacks() {
    if (hero.isAttacking) {
        hero.attackDuration--;

        if (hero.attackCoolDown > 0) {
            hero.attackCoolDown--;
        };

        if (hero.attackCoolDown === 0) {
            spawnAttacks();
            hero.attackCoolDown = 10;
        }

        if (hero.attackDuration <= 0) {
            hero.isAttacking = false;
        };
    };

    projectiles.forEach((bullet) => {
        bullet.x += bullet.speed;
    });
}

export { spawnAttacks, projectiles, drawCharge, drawHeroAttack, updateAttacks }
