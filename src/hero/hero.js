const heroW = 60;
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
    alive: true,
    jumpPower: -15,
    onGround: false,
    direction: 1,
    isAttacking: false,
    attackCoolDown: 0,
    attackDuration: 0
}