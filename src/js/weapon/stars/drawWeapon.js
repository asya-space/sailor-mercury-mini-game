import { cameraX } from '../../game/camera.js';
import { ctx } from '../../utils/canvas.js';

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