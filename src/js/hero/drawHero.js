import { mercury } from '../../assets/images.js';
import { hero } from './hero.js';
import { ctx } from '../utils/canvas.js';
import { cameraX } from '../game/camera.js';
import { drawMoonStick, drawCharge } from './heroAttack.js';

export function drawHero() {
    if (hero.direction === 1) {
        ctx.drawImage(mercury, hero.x - cameraX, hero.y, hero.w, hero.h);
    } else {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(mercury, -(hero.x - cameraX) - hero.w, hero.y, hero.w, hero.h);
        ctx.restore();
    };

    if (hero.isAttacking) {
        drawMoonStick(ctx);
        drawCharge();
    };
};