import { GROUND_Y } from '../constants.js';
import { ctx } from '../utils/canvas.js';
import { cameraX } from '../game/camera.js';
import { hero } from '../hero/hero.js';
import { spawnAttacks } from '../functions.js';
import { createGroundMonsterStar, createRedStar } from '../weapon/stars/createWeapon.js';

const catProjectiles = [],
      blueMonsterProjectiles = [],
      enemyProjectiles = [];
class Enemy {
    constructor(image, w, h, x, hp, damage, type, platforms) {
        this.image = image;
        this.platforms = platforms;
        this.w = w;
        this.h = h;
        this.x = platforms ? platforms.x : undefined;
        this.y = platforms ? platforms.y - this.h : undefined; // where is the enemy (depends of his type => 'catMonster', etc.)
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
        this.left = platforms ? platforms.x : undefined;
        this.right = platforms ? platforms.x + platforms.w - this.w : undefined;
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

    draw() {
        if (!this.alive) return;
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

    lookingAtHero(hero) {
        const heroOnRight = hero.x > this.x;

        if (this.reverseDirection) {
            return (heroOnRight && this.direction === -1) 
                || (!heroOnRight && this.direction === 1);
        }

        return (heroOnRight && this.direction === 1)
            || (!heroOnRight && this.direction === -1);
    }

    attackUpdate() {
        if (this.state === 'walking' || this.state === 'flying') {
            this.state = 'charging';
            this.timer = this.attackCharge;
            return;
        };
    // charging
        if (this.state === 'charging') {
            this.timer--;

            if (this.timer <= 0) {
                this.state = 'shooting';
                this.shotLeft = 3;
                if (this.type === 'groundMonster') this.shotLeft = 1;
                this.shotTimer = 10;
            };
            return;
        };

    // shooting
        if (this.state === 'shooting') {
            this.shotTimer--;

            if (this.shotTimer <= 0) {
                if (this.type === 'groundMonster') {
                    createGroundMonsterStar(this);
                };

                if (this.type === 'airMonster') {
                    createRedStar(this);
                };

                if (this.type === 'catMonster') {
                    spawnAttacks(catProjectiles, this);
                };

                if (this.type === 'blueMonster') {
                    spawnAttacks(blueMonsterProjectiles, this);
                }

                this.shotLeft--;

                if (this.shotLeft > 0) {
                    this.shotTimer = 10;
                } else {
                    this.state = 'cooldown';
                    this.timer = this.cooldown;
                };
            };
            return;
        };

    // cooldown
        if (this.state === 'cooldown') {
            this.timer--;

            if (this.timer <= 0) {
                this.state = 'walking';
            };
        };
    }

    update() {
        if (!this.alive) return;
        const dx = hero.x - this.x,
              distance = Math.abs(dx);

        this.x += this.velocityX * this.direction;
        if (distance <= this.visionRange && this.lookingAtHero(hero)) { // if hero is too close, enemy will stop walking
            this.attackUpdate();
            this.velocityX = 2;
        };

        if (this.x <= this.left) {
            this.x = this.left;
            this.direction = 1;
        };

        if (this.x >= this.right) {
            this.x = this.right;
            this.direction = -1;
        };
    }
}

class AirEnemy extends Enemy {
    constructor(image, w, h, x, hp, damage, type, platforms) {
        super(image, w, h, x, hp, damage, type, platforms);
        this.flying = true;
        this.flightTime = Math.random() * Math.PI * 2;
        this.baseY = this.y;
        this.state = 'flying';
        this.weaponOffsetX = 48 / 2;
        this.weaponOffsetY = -2;
        this.left = x - 100;
    };

    update() {
        super.update();
        if (this.flying) {
            this.flightTime += 0.08;
            this.y = this.baseY + Math.sin(this.flightTime) * 20;
        };
    }
};

class GroundMonster extends Enemy {
    constructor(image, w, h, x, hp, damage, type, left, right) {
        super(image, w, h, x, hp, damage, type);
        this.x = x;
        this.y = GROUND_Y - this.h;
        this.weaponOffsetX = 2;
        this.weaponOffsetY = 40;
        this.left = left;
        this.right = right;
    }
}

export { Enemy, AirEnemy, GroundMonster };
