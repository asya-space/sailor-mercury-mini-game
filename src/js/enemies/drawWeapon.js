import { cameraX } from '../game/camera.js';
import { ctx } from '../utils/canvas.js';
import { drawBalls } from '../utils/functions.js';

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

function drawMonstersBalls(projectiles) {
    projectiles.forEach(projectile => {
        drawBalls(projectile.x, projectile.y, projectile.color1, projectile.color2);
    });
}

export { drawWeapon, drawMonstersBalls };