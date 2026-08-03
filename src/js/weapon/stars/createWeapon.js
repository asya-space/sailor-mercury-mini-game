import { starForPurple, redStar } from '../../../assets/images.js';
import { weaponSpeed } from '../../constants.js';
import { getTargetHeroX, getTargetHeroY, weaponStartX, weaponStartY } from '../../functions.js';

const enemyProjectiles = [];

function createPurpleStar(enemy, hero) {
    // attacking direction for "bomb" effect
    const angle = Math.atan2( // return angle from -PI to PI, y and x
        getTargetHeroY() - weaponStartY(enemy),
        getTargetHeroX() - weaponStartX(enemy)
    );

    const spread = 0.35, // 20 degrees
          spreadsArray = [0, spread, spread + spread]; // list of angle displacements
    spreadsArray.forEach(offset => {
        enemyProjectiles.push({
            img: starForPurple,
            x: weaponStartX(enemy),
            y: weaponStartY(enemy),
            vx: Math.cos(angle + offset) * weaponSpeed,
            vy: Math.sin(angle + offset) * weaponSpeed,
            damage: 1
        });
    });
};

function createRedStar(enemy, hero) {
    let dx = getTargetHeroX() - weaponStartX(enemy),
        dy = getTargetHeroY() - weaponStartY(enemy),
        // normalize length of vector for weapon
        length = Math.sqrt((dx * dx) + (dy * dy));
        dx /= length;
        dy /= length;
    // attacking vector
    const vx = dx * weaponSpeed,
          vy = dy * weaponSpeed;
    enemyProjectiles.push({
        img: redStar,
        x: weaponStartX(enemy),
        y: weaponStartY(enemy),
        vx,
        vy,
        damage: 2 // test
    })
};

export { enemyProjectiles, createPurpleStar, createRedStar };