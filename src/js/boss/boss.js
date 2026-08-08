import { ctx } from '../utils/canvas.js';
import { bossImg, bossStar } from '../../assets/images.js';
import { cameraX } from '../game/camera.js';

import { weaponSpeed } from '../constants.js';
import { updateEnemyProjectile } from '../weapon/stars/updateProjectiles.js';
import { drawWeapon } from '../weapon/stars/drawWeapon.js';
import { getTargetHeroX, getTargetHeroY /*weaponStartX, weaponStartY*/ } from '../functions.js';

export const bossProjectiles = [];

class Boss {
    constructor(x, y, h, area) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = h * bossImg.ratio;
        this.hp = 200;
        this.phase = 1;
        this.state = 'fly';
        this.speed = 7;
        this.alive = true;
        this.area = area;
        this.target = this.getRandomTarget();
        this.isAttacking = false;
        this.cooldown = 0;
        this.cooldownTimer = 0;
        this.chargeTimer = 0;
        this.isCharging = 0;
        this.shotLeft = 0;
        this.shotTimer = 0;
    }

    draw(ctx) {
        ctx.drawImage(bossImg, this.x - cameraX, this.y, this.w, this.h);
    }

    getRandomTarget() {
        return {
            x: Math.random() * (this.area.right - this.area.left) + this.area.left,
            y: Math.random() * (this.area.bottom - this.area.top) + this.area.top
        } // random goal (some point) for boss
    }

    move() {
        if (this.x < this.target.x) {
            this.x = Math.min(this.x + this.speed, this.target.x);
        };
        if (this.x > this.target.x) {
            this.x = Math.max(this.x - this.speed, this.target.x);
        };

        if (this.y < this.target.y) {
            this.y = Math.min(this.y + this.speed, this.target.y);
        };
        if (this.y > this.target.y) {
            this.y = Math.max(this.y - this.speed, this.target.y);
        };
    }

    checkTarget() {
        if (this.x === this.target.x && this.y === this.target.y) {
            this.target = this.getRandomTarget();
        };
    }

    createProjectile() {
        const angle = Math.atan2(getTargetHeroY() - this.y, getTargetHeroX() - this.x);
        const projectile = {
            img: bossStar,
            x: this.x,
            y: this.y,
            speed: weaponSpeed,
            damage: 20,
            vx: Math.cos(angle) * weaponSpeed,
            vy: Math.sin(angle) * weaponSpeed
        };
        bossProjectiles.push(projectile);
        console.log('BOSS SHOOT', projectile);
    }

    attack() {
        if (this.cooldownTimer > 0) {
            this.cooldownTimer--;
            return;
        };

        if (this.shotLeft > 0) {
            if (this.shotTimer > 0) {
                this.shotTimer--;
                return;
            };
            this.createProjectile();
            this.shotLeft--;
            this.shotTimer = 10;
            return;
        };
        this.shotLeft = 5;
        this.shotTimer = 0;
        this.cooldownTimer = 120;
    }

    updateProjectiles() {
        updateEnemyProjectile(bossProjectiles);
    }

    update() {
        if (!this.alive) return;

        this.move();
        this.checkTarget();
        this.attack();
        this.updateProjectiles();
    }
}

export const boss = new Boss(200, 4300, 250, {
            left: 4300,
            right: 5450,
            top: 40,
            bottom: 290
        });