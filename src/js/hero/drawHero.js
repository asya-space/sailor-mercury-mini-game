import { mercury } from '../../assets/images.js';
import { hero } from './hero.js';
import { ctx } from '../utils/canvas.js';
import { cameraX } from '../game/camera.js';
import { drawMoonStick, drawCharge } from './heroAttack.js';

export function drawHero() {
    if (!hero.alive) return;
    ctx.save();
    if (hero.hitTimer > 0) {
        ctx.globalAlpha = 0.4;

        if (Math.floor(hero.hitTimer / 4) % 2 === 0) {
            ctx.globalAlpha = 0.7;
        };
    };

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
    ctx.restore();
};