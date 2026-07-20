// ground
export const basic = new Image();
basic.src = '/platforms/oceanRock.png';

// another little platforms
export const stoneHand = new Image();
stoneHand.src = '/platforms/stone-hand2.svg';
stoneHand.ratio = 224 / 829;

// parallax
export const bg1 = new Image();
bg1.src = '/parallax/1.png';

export const bg2 = new Image();
bg2.src = '/parallax/2.png';

export const bg3 = new Image();
bg3.src = '/parallax/3.png';

export const bg4 = new Image();
bg4.src = '/parallax/4.png';

export const bg5 = new Image();
bg5.src = '/parallax/5.png';

// main character
export const mercury = new Image();
mercury.src = '/characters/mercury.svg';

// enemies
export const enemy1 = new Image();
enemy1.src = '/characters/monster-1.svg';
enemy1.ratio = 100 / 78;

export const enemy2 = new Image();
enemy2.src = '/characters/monster-2.svg';
enemy2.ratio  = 72 / 81;

export const enemy3 = new Image();
enemy3.src = '/characters/monster-3.svg';
enemy3.ratio = 339 / 577;

export const enemy4 = new Image();
enemy4.src = '/characters/monster-4.svg';
enemy4.ratio = 661 / 747;

const images = [bg1, bg2, bg3, bg5, basic, stoneHand, mercury, enemy1, enemy2, enemy3, enemy4];
export { images };



