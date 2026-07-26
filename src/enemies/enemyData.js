import { enemy1, enemy2, enemy3, enemy4 } from "../assets/images";

// types of enemies
// description
export const enemyTypes = {
    purpleMonster: {
        image: enemy1,
        w: 90,
        h: 60 * enemy1.ratio,
        hp: 50,
        damage: 1,
        velocityX: 2,
        flying: false
    },

    cat: {
        image: enemy2,
        w: 50,
        h: 48 * enemy2.ratio,
        hp: 30,
        damage: 1,
        velocityX: 2, // speed
        flying: false,
    },

    blueMonster: {
        image: enemy3,
        w: 50,
        h: 70 * enemy3.ratio,
        hp: 30,
        damage: 1,
        velocityX: 2,
        flying: false,
    },

    redMonster: {
        image: enemy4,
        w: 48,
        h: 80 * enemy4.ratio,
        hp: 40,
        damage: 1,
        velocityX: 2,
        flying: true,
    }
};