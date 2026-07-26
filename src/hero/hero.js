const heroW = 80;
const heroH = heroW * (675 / 396);

// object of hero just changing hero
export const hero = {
    x: 100,
    y: 365,
    w: heroW,
    h: heroH,
    hp: 100,
    speed: 5, // speed for moving
    velocityX: 0,
    velocityY: 0,
    alive: true
}