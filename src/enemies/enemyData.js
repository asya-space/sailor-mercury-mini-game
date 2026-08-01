import { enemy1, enemy2, enemy3, enemy4 } from '../assets/images.js';

// types of enemies
// description
export const enemyTypes = {
    purpleMonster: {
        image: enemy1,
        w: 100,
        h: 60 * enemy1.ratio,
        hp: 50,
        damage: 1,
        velocityX: 2,
        flying: false,
        isAttacking: false,
        visionRange: 600,
        attackCooldown: 120, // constanta as monster
        attackCharge: 45,
        weaponOffsetX: 2,
        weaponOffsetY: 40 
    },

    cat: {
        image: enemy2,
        w: 50,
        h: 48 * enemy2.ratio,
        hp: 30,
        damage: 1,
        velocityX: 2, // speed
        flying: false,
        isAttacking: false,
        visionRange: 600,
        attackCooldown: 120,
        attackCharge: 45
    },

    blueMonster: {
        image: enemy3,
        w: 50,
        h: 70 * enemy3.ratio,
        hp: 30,
        damage: 1,
        velocityX: 2,
        flying: false,
        isAttacking: false,
        visionRange: 600,
        attackCooldown: 120,
        attackCharge: 45
    },

    redMonster: {
        image: enemy4,
        w: 48,
        h: 80 * enemy4.ratio,
        hp: 40,
        damage: 1,
        velocityX: 2,
        flying: true,
        isAttacking: false,
        visionRange: 600, // i can change this if i need, ok? just reminder
        attackCooldown: 120,
        attackCharge: 45
    }
};