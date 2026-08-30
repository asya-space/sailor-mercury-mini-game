import { hero } from './hero/hero.js';
import { ctx } from './utils/canvas.js';
import { cameraX } from './game/camera.js';

// draw attacks for GroundMonster and AirMonster

function drawWeapon(array) {
    array.forEach((weapon) => {
        const weaponW = 20;
        const weaponH = weaponW * weapon.img.ratio;

        ctx.drawImage(
            weapon.img,
            weapon.x - cameraX,
            weapon.y,
            weaponW,
            weaponH
        );
    });
};

// balls attacks
function drawBalls(x, y, glowColor, color) {
    //if (hero.cooldown <= 0) return;
    const highlightX = x - cameraX - 2,
          highlightY = y - 2,
          highlightRadius = 2;
    ctx.save();
    ctx.shadowBlur = 18;
    ctx.shadowColor = glowColor;

    ctx.beginPath();
    ctx.arc(x - cameraX, y, 6, 0, Math.PI * 2);

    ctx.fillStyle = color;
    ctx.fill();
    // white light on the ball
    ctx.beginPath();
    ctx.arc(highlightX, highlightY, highlightRadius, 0, Math.PI * highlightRadius);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.restore();
};

function updateBallProjectiles(balls) {
    balls.forEach((ball) => {
        ball.x += ball.speed;
    });
}

function spawnAttacks(array, character) {
    array.push({
        x: (character.direction === 1) ? (character.x + character.w - 10) : (character.x + 10),
        y: character.y + 25,
        speed: 8 * character.direction,
        damage: 10
    });
};

// center of hero + stars-attacks (redMonster, purpleMonster)

function getTargetHeroX() {
    return hero.x + hero.w / 2;
};

function getTargetHeroY() {
    return hero.y + hero.h / 2;
};

function weaponStartX(enemy) {
    return (enemy.direction === 1) ? (enemy.x + enemy.weaponOffsetX)
            : (enemy.x + enemy.w - enemy.weaponOffsetX);
};

function weaponStartY(enemy) {
    return enemy.y + enemy.weaponOffsetY;
};

export { 
    drawBalls, 
    spawnAttacks, 
    getTargetHeroX, 
    getTargetHeroY, 
    weaponStartX, 
    weaponStartY, 
    updateBallProjectiles,
    drawWeapon 
}