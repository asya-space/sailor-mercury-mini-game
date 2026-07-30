// hero //
import { hero } from '../hero/hero.js';

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
        hero.velocityX = hero.speed;
        hero.direction = 1;
    };

    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        hero.velocityX = -hero.speed;
        hero.direction = -1;
    };
    
    if (event.code === 'Space' && hero.onGround) {
        hero.velocityY = hero.jumpPower;
        hero.onGround = false;
    };

    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        hero.isAttacking = true;
        hero.attackCoolDown = 5;
        hero.attackDuration = 30;
    }
})

document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyD' || event.code === 'KeyA' || event.code === 'ArrowRight' 
        || event.code === 'ArrowLeft') {
            hero.velocityX = 0;
    };
})