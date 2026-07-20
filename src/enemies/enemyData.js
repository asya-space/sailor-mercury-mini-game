import { enemy1, enemy2, enemy3, enemy4 } from "../assets/images";

export const enemyTypes = {
    purpleMonster: {
        image: enemy1,
        w: 60,
        h: 60 * enemy1.ratio,
        hp: 50,
        speed: 2,
        flying: false
    },

    cat: {
        image: enemy2,
        w: 48,
        h: 48 * enemy2.ratio,
        hp: 30,
        speed: 1,
        flying: true
    },

    /*blueMonster: {
        image: enemy3,
        w: 50,
        h: 50 * enemy3.ratio,
        hp: 30,
        speed: 2,
        flying: false
    },

    redMonster: {
        image: enemy4,
        w: 48,
        h: 48 * enemy4.ratio,
        hp: 40,
        speed: 1,
        flying: false
    }*/
};