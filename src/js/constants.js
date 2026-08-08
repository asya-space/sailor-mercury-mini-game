import { canvas, WORLD_HEIGHT, ctx } from './utils/canvas.js';
import { cameraX } from './game/camera.js';
import { hero } from './hero/hero.js';
// canvas parameters
export const GROUND_Y = canvas.height - 45;
export const GRAVITY = 0.6;
export const JUMP_FORCE = -13;
export const MOVE_SPEED = 4.5;
export const weaponSpeed = 8;