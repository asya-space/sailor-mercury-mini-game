import './main.scss';

// canvas parameters
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width,
      HEIGHT = canvas.height;

// how to follow by state of the game
let gameRunning = false,
    cameraX = 0;
const LEVEL_WIDTH = 5500,
      GROUND_Y = HEIGHT - 50,
      GRAVITY = 0.6,
      JUMP_FORCE = -13, // ???
      MOVE_SPEED = 4.5; // ???

const platforms = [];
const ground = [];

function createPlatforms() {
    platforms.length = 0;
    // Ground
    ground.push({ x: 0, y: GROUND_Y, w: LEVEL_WIDTH, h: 50, type: 'ground' });
    // Platforms throughout the level
    const platData = [
        // Section 1 - start area
        { x: 200, y: 400, w: 150 }, { x: 450, y: 340, w: 120 }, { x: 650, y: 280, w: 140 },
        { x: 850, y: 350, w: 130 }, { x: 1050, y: 300, w: 150 },
        // Section 2
        { x: 1300, y: 380, w: 120 }, { x: 1480, y: 310, w: 140 }, { x: 1700, y: 250, w: 130 },
        { x: 1900, y: 340, w: 150 }, { x: 2100, y: 280, w: 120 },
        // Section 3
        { x: 2350, y: 360, w: 140 }, { x: 2550, y: 300, w: 130 }, { x: 2750, y: 240, w: 150 },
        { x: 2950, y: 320, w: 120 }, { x: 3150, y: 370, w: 140 },
        // Section 4
        { x: 3400, y: 350, w: 130 }, { x: 3600, y: 280, w: 150 }, { x: 3800, y: 320, w: 120 },
        { x: 4000, y: 260, w: 140 }, { x: 4200, y: 350, w: 130 },
        // Section 5 - boss area
        { x: 4500, y: 380, w: 200 }, { x: 4750, y: 300, w: 150 },
        { x: 4900, y: 200, w: 200 },
    ];
    platData.forEach(platform => {
        const h = platform.w * (224 / 829);
        platforms.push({ x: platform.x, y: platform.y, w: platform.w, h, type: 'platform' });
    });
}

let unit;
function drawPlatforms(platform) {
    const px = platform.x - cameraX;
    if (px + platform.w < -10 || px > WIDTH + 10) return;
    unit = px;
}

// earth/platform for main character
const basic = new Image();
basic.src = '/ground.png';

function drawGround() {
    ground.forEach((item) => {
        drawPlatforms(item);
        ctx.drawImage(basic, unit, item.y, item.w, item.h);
    });
}

// another little platforms

const stoneHand = new Image();
stoneHand.src = '/stone-hand2.svg';

function drawHands() {
    platforms.forEach((platform) => {
        drawPlatforms(platform);
        ctx.drawImage(stoneHand, unit, platform.y, platform.w, platform.h);
    });
}

const bg2 = new Image();
bg2.src = '/parallax/2.png';

const bg3 = new Image();
bg3.src = '/parallax/3.png';

const bg4 = new Image();
bg4.src = '/parallax/4.png';

const bg5 = new Image();
bg5.src = '/parallax/5.png';

const bg6 = new Image();
bg6.src = '/parallax/6.png';

const layers = [
    { img: bg2, speed: 0.05 },
    { img: bg3, speed: 0.1 },
    { img: bg4, speed: 0.15 },
    { img: bg5, speed: 0.25 },
    { img: bg6, speed: 0.4 },
];

function drawParallax() {
    layers.forEach((layer) => {
        const x = -cameraX * layer.speed;
        ctx.drawImage(layer.img, x, 0);
    });
}

// draw background + onload before draw rest objects
const images = [bg2, bg3, bg4, bg5, bg6, stoneHand, basic];
let loaded = 0;

images.forEach(img => {
    img.onload = () => {
        loaded++;

        if (loaded === images.length) {
            drawParallax();
            createPlatforms();
            drawGround();
            drawHands();
        }
    };
});
