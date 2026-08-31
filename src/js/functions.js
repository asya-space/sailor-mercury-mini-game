import { hero } from './hero/hero.js';
import { ctx } from './utils/canvas.js';
import { cameraX } from './game/camera.js';

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

function spawnAttacks(array, character) {
    const direction = getTargetHeroX() > character.x ? 1 : -1;
    array.push({
        x: (direction === 1) ? (character.x + character.w - 10) : (character.x + 10),
        y: character.y + 25,
        speed: 8 * direction,
        damage: 10,
        color1: character.color1,
        color2: character.color2
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
    weaponStartY
}