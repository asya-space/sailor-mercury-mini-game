// hero //
import { hero } from '../hero/hero.js';

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') hero.dx = hero.speed;
    if (event.key === 'ArrowLeft') hero.dx = -hero.speed;
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') hero.dx = 0;
})