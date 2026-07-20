import { enemyTypes } from './enemyData.js';
import { GROUND_Y } from '../constants.js';

export const enemies = [
    { ...enemyTypes.purpleMonster,
        x: 500,
        y: GROUND_Y - enemyTypes.purpleMonster.h,
        alive: true
    },

    {
        ...enemyTypes.cat,
        x: 800,
        y: GROUND_Y - enemyTypes.cat.h,
        alive: true
    }
]