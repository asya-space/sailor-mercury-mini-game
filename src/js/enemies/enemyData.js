import { GROUND_Y } from '../constants.js';
import { ctx } from '../utils/canvas.js';
import { cameraX } from '../game/camera.js';
import { hero } from '../hero/hero.js';
import { 
    getTargetHeroX, 
    getTargetHeroY, 
    weaponStartX, 
    weaponStartY, 
    spawnAttacks
} from '../utils/functions.js';
import { redStar, starForPurple } from '../../assets/images.js';

let enemyProjectiles = [];
class Enemy {
    constructor(image, w, h, x, hp, damage, type, platforms, deathColor) {
        this.image = image;
        this.platforms = platforms;
        this.w = w;
        this.h = h;
        this.x = platforms ? platforms.x : undefined;
        this.y = platforms ? platforms.y - this.h : undefined; // where is the enemy (depends of his type => 'catMonster', etc.)
        this.hp = hp;
        this.maxHp = 30;
        this.hpBarTimer = 0;
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
        this.speed = 8;
        this.deathColor = deathColor;
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

        this.drawHpBar();
    }

    drawHpBar() {
        if (this.hpBarTimer <= 0) return;
        const barWidth = this.w,
              barHeight = 5,
              hpPercent = Math.max(0, this.hp / this.maxHp);
        ctx.fillStyle = '#333';
        ctx.fillRect(
            this.x - cameraX,
            this.y - 10,
            barWidth,
            barHeight
        );
        ctx.fillStyle = '#66d9ff';
        ctx.fillRect(
            this.x - cameraX,
            this.y - 10,
            barWidth * hpPercent,
            barHeight 
        );
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
                this.createAttack(); // every monster will has one attack

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

        if (this.hpBarTimer > 0) {
            this.hpBarTimer--;
        };
    }

    createAttack() {} // just plug, every monster has one's attacking
};

class AirEnemy extends Enemy {
    constructor(image, w, h, x, hp, damage, type, platforms, deathColor) {
        super(image, w, h, x, hp, damage, type, platforms, deathColor);
        this.flying = true;
        this.flightTime = Math.random() * Math.PI * 2;
        this.baseY = this.y;
        this.state = 'flying';
        this.weaponOffsetX = 48 / 2;
        this.weaponOffsetY = -2;
        this.left = x - 100;
    }

    createAirWeapon() {
        let dx = getTargetHeroX() - weaponStartX(this),
        dy = getTargetHeroY() - weaponStartY(this),
        // normalize length of vector for weapon
        length = Math.sqrt((dx * dx) + (dy * dy));
        dx /= length;
        dy /= length;
        // attacking vector
        const vx = dx * this.speed,
              vy = dy * this.speed;
        enemyProjectiles.push({
            img: redStar,
            x: weaponStartX(this),
            y: weaponStartY(this),
            vx,
            vy,
            w: 20,
            h: 20,
            damage: 2 // test
        });
    }

    createAttack() {
        this.createAirWeapon();
    }

    update() {
        super.update();
        if (this.flying) {
            this.flightTime += 0.08;
            this.y = this.baseY + Math.sin(this.flightTime) * 20;
        };
    }
};

class GroundMonster extends Enemy {
    constructor(image, w, h, x, hp, damage, type, left, right, deathColor) {
        super(image, w, h, x, hp, damage, type, deathColor);
        this.x = x;
        this.y = GROUND_Y - this.h;
        this.weaponOffsetX = 2;
        this.weaponOffsetY = 40;
        this.left = left;
        this.right = right;
        this.deathColor = deathColor;
    }

    createGroundWeapon() {
        const angle = Math.atan2( // return angle from -PI to PI, y and x
                        getTargetHeroY() - weaponStartY(this),
                        getTargetHeroX() - weaponStartX(this)
                    );

        const spread = 0.35, // 20 degrees
              spreadsArray = [0, spread, spread + spread]; // list of angle displacements
        spreadsArray.forEach(offset => {
            enemyProjectiles.push({
                img: starForPurple,
                x: weaponStartX(this),
                y: weaponStartY(this),
                vx: Math.cos(angle + offset) * this.speed,
                vy: Math.sin(angle + offset) * this.speed,
                w: 20,
                h: 20,
                damage: 1
            });
        });
    }

    createAttack() {
        this.createGroundWeapon();
    }
}

class Monster extends Enemy {
    constructor(image, w, h, x, hp, damage, type, platforms, projectiles, color1, color2, deathColor) {
        super(image, w, h, x, hp, damage, type, platforms, deathColor);
        this.projectiles = projectiles;
        this.color1 = color1;
        this.color2 = color2;
    }

    createAttack() {
        spawnAttacks(this.projectiles, this);
    }
}

export { Enemy, AirEnemy, GroundMonster, Monster, enemyProjectiles };
