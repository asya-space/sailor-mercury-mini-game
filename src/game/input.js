// hero //
import { hero } from '../hero/hero.js';

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
            hero.velocityX = hero.speed;
    };

    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
        hero.velocityX = -hero.speed;
    };
    
    if (event.code === 'Space' && hero.onGround) {
        hero.velocityY = hero.jumpPower;
        hero.onGround = false;
    };
})

document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyD' || event.code === 'KeyA' || event.code === 'ArrowRight' 
        || event.code === 'ArrowLeft') {
            hero.velocityX = 0;
    };
})