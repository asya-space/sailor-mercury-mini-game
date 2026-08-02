import { canvas, WORLD_HEIGHT } from './utils/canvas.js';
import { hero } from './hero/hero.js';
// canvas parameters
export const GROUND_Y = canvas.height - 45;
export const GRAVITY = 0.6;
export const JUMP_FORCE = -13;
export const MOVE_SPEED = 4.5;

// weapon data
function getTargetHeroX() {
    return hero.x + hero.w / 2;
};

function getTargetHeroY() {
    return hero.y + hero.h / 2;
}
const weaponSpeed = 8;
export const projectilesObj = {
    x: 0,
    y: 0,
    speed: 0,
    damage: 0,
    radius: 8,
} // bullets/balls

export { getTargetHeroX, getTargetHeroY, weaponSpeed };
