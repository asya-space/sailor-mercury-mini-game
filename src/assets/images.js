// ground
export const basic = new Image();
basic.src = '/platforms/iceCave.png';

// another little platforms
export const stoneHand = new Image();
stoneHand.src = '/platforms/stone-hand2.png';
stoneHand.ratio = 224 / 829;

// parallax
export const bg1 = new Image();
bg1.src = '/parallax/5-1.png';

export const bg2 = new Image();
bg2.src = '/parallax/4.png';

export const bg3 = new Image();
bg3.src = '/parallax/3.png';

export const bg4= new Image();
bg4.src = '/parallax/2.png';

export const bg5 = new Image();
bg5.src = '/parallax/1.png';


// main character
export const mercury = new Image();
mercury.src = '/characters/mercury.svg';

// enemies
export const enemy1 = new Image();
enemy1.src = '/characters/monster-1.png';
enemy1.ratio = 101 / 78;

export const enemy2 = new Image();
enemy2.src = '/characters/monster-2.svg';
enemy2.ratio  = 72 / 81;

export const enemy3 = new Image();
enemy3.src = '/characters/monster-3.png';
enemy3.ratio = 339 / 577;

export const enemy4 = new Image();
enemy4.src = '/characters/monster-4.png';
enemy4.ratio = 661 / 747;

export const bossImg = new Image();
bossImg.src = '/characters/boss.png';
bossImg.ratio = 483 / 670;

// weapon

export const stick = new Image();
stick.src = '/weapon/star-stick.png';
stick.ratio = 208 / 62;

export const starForPurple = new Image();
starForPurple.src = '/weapon/purpleWeapon.png';
starForPurple.ratio = 26 / 25;

export const redStar = new Image();
redStar.src = '/weapon/redStar.png';
redStar.ratio = 150 / 147;

export const bossStar = new Image();
bossStar.src = '/weapon/bossStar.png';
bossStar.ratio = 53 / 48;

const images = [
    bg1, bg2, bg3, bg5, 
    basic, stoneHand, 
    mercury, 
    enemy1, enemy2, enemy3, enemy4, bossImg, 
    stick, starForPurple, redStar, bossStar
];
export { images };



