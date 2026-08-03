import { drawBalls } from '../../functions.js';;

const catProjectiles = [],
      blueMonsterProjectiles = [];

function drawCatAttack() {
    catProjectiles.forEach((ball) => {
        drawBalls(ball.x, ball.y, '#111be3', '#0a0e64');
    });
};

function drawBlueMonsterAttack() {
    blueMonsterProjectiles.forEach((ball) => {
        drawBalls(ball.x, ball.y, '#641068', '#e15fe4');
    })
}

export { drawCatAttack, drawBlueMonsterAttack, catProjectiles, blueMonsterProjectiles };
