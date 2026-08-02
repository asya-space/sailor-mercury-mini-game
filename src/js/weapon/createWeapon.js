import { starForPurple, redStar } from '../../assets/images.js';
import { getTargetHeroX, getTargetHeroY, weaponSpeed } from '../constants.js';

const enemyProjectiles = [];

function createPurpleStar(enemy, hero) {
    const weaponStartX = (enemy.direction === 1) ? (enemy.x + enemy.weaponOffsetX)
                        : (enemy.x + enemy.w - enemy.weaponOffsetX),
          weaponStartY = enemy.y + enemy.weaponOffsetY; 
    // attacking direction for "bomb" effect
    const angle = Math.atan2( // return angle from -PI to PI, y and x
        getTargetHeroY() - weaponStartY,
        getTargetHeroX() - weaponStartX
    );

    const spread = 0.35, // 20 degrees
          spreadsArray = [0, spread, spread + spread]; // list of angle displacements
    spreadsArray.forEach(offset => {
        enemyProjectiles.push({
            img: starForPurple,
            x: weaponStartX,
            y: weaponStartY,
            vx: Math.cos(angle + offset) * weaponSpeed,
            vy: Math.sin(angle + offset) * weaponSpeed,
            damage: 1
        });
    });
};

function createRedStar(enemy, hero) {
    const weaponStartX = (enemy.direction === 1) ? (enemy.x + enemy.weaponOffsetX)
                        : (enemy.x + enemy.w - enemy.weaponOffsetX),
          weaponStartY = enemy.y + enemy.weaponOffsetY;
    let dx = getTargetHeroX() - weaponStartX,
        dy = getTargetHeroY() - weaponStartY,
        // normalize length of vector for weapon
        length = Math.sqrt((dx * dx) + (dy * dy));
        dx /= length;
        dy /= length;
    // attacking vector
    const vx = dx * weaponSpeed,
          vy = dy * weaponSpeed;
    enemyProjectiles.push({
        img: redStar,
        x: weaponStartX,
        y: weaponStartY,
        vx,
        vy,
        damage: 2 // test
    })
};

export { enemyProjectiles, createPurpleStar, createRedStar };