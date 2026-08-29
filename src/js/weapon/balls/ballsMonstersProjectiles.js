import { drawBalls } from '../../functions.js';

const catProjectiles = [],
      blueMonsterProjectiles = [];

function drawBallsWeapon() {
    catProjectiles.forEach((ball) => {
        drawBalls(ball.x, ball.y, '#111be3', '#0a0e64');
    });

    blueMonsterProjectiles.forEach((ball) => {
        drawBalls(ball.x, ball.y, '#641068', '#e15fe4');
    });
};

export { drawBallsWeapon, catProjectiles, blueMonsterProjectiles };
