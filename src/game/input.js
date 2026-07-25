// hero //
import { hero } from '../hero/hero.js';

document.addEventListener('keydown', (event) => {
    if (event.key === 'd' || event.key === 'ArrowRight') hero.velocityX = hero.speed; 
    if (event.key === 'a' || event.key === 'ArrowLeft') hero.velocityX = -hero.speed;
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'd' || event.key === 'a'
        || event.key === 'ArrowRight' || event.key === 'ArrowLeft') hero.velocityX = 0;
})