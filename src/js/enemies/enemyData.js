import { GROUND_Y } from '../constants.js';

class Enemy {
    constructor(image, w, h, x, hp, damage, type, platform) {
        this.image = image;
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = platform.y - this.h; // where is the enemy (depends of his type => 'catMonster', etc.)
        this.hp = hp;
        this.damage = damage;
        this.velocityX = 2;
        this.isAttacking = false;
        this.visionRange = 600;
        this.cooldown = 120;
        this.attackCharge = 45;
        this.reverseDirection = true;
        this.attackDuration = 0;
        this.type = type;
        this.left = x;
        this.right = platform.x + platform.w - this.w;
        this.direction = 1;
        this.state = 'walking';
        this.alive = true;
        this.cooldownTimer = 0;
        this.chargeTimer = 0;
        this.isCharging = false;
        this.timer = 0;
        this.shotLeft = 0;
        this.shotTimer = 0;
    };
}

class AirEnemy extends Enemy {
    constructor(image, w, h, x, hp, damage, type, platform) {
        super(image, w, h, x, hp, damage, type, platform);
        this.flying = true;
        this.flightTime = Math.random() * Math.PI * 2;
        this.baseY = this.y;
        this.state = 'flying';
        this.weaponOffsetX = 48 / 2;
        this.weaponOffsetY = -2;
        this.left = x - 100;
    };
};

class GroundMonster extends Enemy {
    constructor(image, w, h, x, hp, damage, type, left, right) {
        super(image, w, h, x, hp, damage, type);
        this.y = GROUND_Y - this.h;
        this.weaponOffsetX = 2;
        this.weaponOffsetY = 40;
        this.left = left;
        this.right = right;
    }
}

export { Enemy, AirEnemy, GroundMonster };
