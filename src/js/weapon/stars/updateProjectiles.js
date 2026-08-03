import { WORLD_WIDTH, canvas } from '../../utils/canvas.js';

function updateEnemyProjectile(array) {
    for (let i = array.length - 1; i >= 0; i--) {

        const weapon = array[i];

        weapon.x += weapon.vx;
        weapon.y += weapon.vy;

        if (
            weapon.x < -100 ||
            weapon.x > WORLD_WIDTH + 100 ||
            weapon.y < -100 ||
            weapon.y > canvas.height + 100
        ) {
            array.splice(i, 1);
        }
    }
};

export { updateEnemyProjectile };