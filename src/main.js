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
        platforms.push({ x: platform.x, y: platform.y, w: platform.w, h: 40, type: 'platform' });
    });
}

createPlatforms();

let inch;
function drawPlatforms(platform) {
    const px = platform.x - cameraX;
    if (px + platform.w < -10 || px > WIDTH + 10) return;
    inch = px;
}

// earth/platform for main character
ground.forEach((item) => {
    drawPlatforms(item);
    const grad = ctx.createLinearGradient(0, item.y, 0, item.y + item.h);
    grad.addColorStop(0, '#E82020');
    grad.addColorStop(0.3, '#592020');
    grad.addColorStop(1, '#000000');
    ctx.fillStyle = grad;
    ctx.fillRect(inch, item.y, item.w, item.h);
});

// an other little platforms

const stoneHand = new Image();
stoneHand.src = "/stone-hand.svg";

stoneHand.onload = () => {
    platforms.forEach((platform) => {
        drawPlatforms(platform, inch);
        ctx.drawImage(stoneHand, platform.x, platform.y, platform.w, platform.h);
    });
}
   
const ONE_LAYER = new Image(),
      TWO_LAYER = new Image(),
      THREE_LAYER = new Image(),
      FOUR_LAYER = new Image(),
      FIVE_LAYER = new Image(),
      SIX_LAYER = new Image(),
      SEVEN_LAYER = new Image(),
      EIGHT_LAYER = new Image();

ONE_LAYER.src = '/parallax/1.png';
TWO_LAYER.src = '/parallax/2.png';
THREE_LAYER.src = '/parallax/3.png';
FOUR_LAYER.src = '/parallax/4.png';
FIVE_LAYER.src = '/parallax/5.png';
SIX_LAYER.src = '/parallax/6.png';
SEVEN_LAYER.src = '/parallax/7.png';
EIGHT_LAYER.src = '/parallax/8.png';

