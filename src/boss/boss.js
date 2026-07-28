import { ctx } from '../utils/canvas.js';
import { bossImg } from '../assets/images.js';
import { cameraX } from '../game/camera.js';

class Boss {
    constructor(x, y, h, area) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = h * bossImg.ratio;
        this.hp = 200;
        this.phase = 1;
        this.state = 'fly';
        this.attackCoolDown = 0;
        this.speed = 7;
        this.alive = true;
        this.area = area;
        this.target = this.getRandomTarget();
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

    update() {
        if (!this.alive) return;

        this.move();
        this.checkTarget();

    }
}

export const boss = new Boss(200, 4300, 250, {
            left: 4300,
            right: 5450,
            top: 40,
            bottom: 290
        });