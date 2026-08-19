import { enemy1, enemy2, enemy3, enemy4 } from '../../assets/images.js';
import { GROUND_Y } from '../constants.js';
import { platforms } from '../world/platforms.js';
import { cameraX } from '../game/camera.js';

class Enemy {
    constructor(image, w, h, x, hp, damage, type, platforms) {
        this.image = image;
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = platforms.y - this.h;
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
        this.left = platforms.x;
        this.right = platforms.x + platforms.w - this.w;
        this.direction = 1;
        this.state = 'walking';
        this.alive = true;
        this.cooldownTimer = 0;
        this.chargeTimer = 0;
        this.isCharging = false;
        this.timer = 0;
        this.shotLeft = 0;
        this.shotTimer = 0;
    }

    drawEnemy(ctx) {
        if (this.alive === false) return;
        ctx.save();
        if (this.direction === -1) {
            ctx.translate(this.x - cameraX + this.w, this.y);
            ctx.scale(-1, 1);
            ctx.drawImage(this.image, 0, 0, this.w, this.h);
        } else {
            ctx.drawImage(this.image, this.x - cameraX, this.y, this.w, this.h);
        };
        ctx.restore();
    }

    enemyAttack() {

    }
}

export const catOne = new Enemy(enemy2, 50, 48 * enemy2.ratio, 1480, 30, 1, 'catMonster', platforms[6]);

class FlyingEnemy extends Enemy {
    constructor(image, w, h, hp, damage, x, y, type, left, right, weaponOffsetX, weaponOffsetY) {
        super(image, w, h, hp, damage, x, y, type, left, right);
        this.flying = true;
        this.flightTime = Math.random() * Math.PI * 2;
        this.baseY = y;
        this.state = 'flying';
        this.weaponOffsetX = weaponOffsetX;
        this.weaponOffsetY = weaponOffsetY;
    }
}
/*export const enemyTypes = {
    purpleMonster: {
        image: enemy1,
        w: 100,
        h: 60 * enemy1.ratio,
        hp: 50,
        damage: 1,
        velocityX: 2,
        flying: false,
        isAttacking: false,
        visionRange: 600,
        cooldown: 120, // constanta as monster
        attackCharge: 45,
        weaponOffsetX: 2,
        weaponOffsetY: 40,
        reverseDirection: true
    },

    cat: {
        image: enemy2,
        w: 50,
        h: 48 * enemy2.ratio,
        hp: 30,
        damage: 1,
        velocityX: 2, // speed
        flying: false,
        isAttacking: false,
        visionRange: 600,
        cooldown: 120,
        attackCharge: 45,
        reverseDirection: false,
        attackDuration: 0
    },

    blueMonster: {
        image: enemy3,
        w: 50,
        h: 70 * enemy3.ratio,
        hp: 30,
        damage: 1,
        velocityX: 2,
        flying: false,
        isAttacking: false,
        visionRange: 600,
        cooldown: 120,
        attackCharge: 45,
        reverseDirection: false,
        attackDuration: 0
    },

    redMonster: {
        image: enemy4,
        w: 48,
        h: 80 * enemy4.ratio,
        hp: 40,
        damage: 1,
        velocityX: 2,
        flying: true,
        isAttacking: false,
        visionRange: 600, // i can change this if i need, ok? just reminder
        cooldown: 120,
        attackCharge: 45,
        weaponOffsetX: 48 / 2,
        weaponOffsetY: -2, // not sure
        reverseDirection: false
    }
}; */