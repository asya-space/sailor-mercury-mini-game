import { ctx } from "../utils/canvas";
import { cameraX } from "../game/camera";

let particles = [];

function spawnParticles(x, y, color, count, speed) {
    for (let i = 0; i < count; i++) {
        particles.push({
            x, y, 
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            life: 30 + Math.random() * 20,
            gravityDelay: 12,
            maxLife: 50, color, size: 2 + Math.random() * 3
        });
    };
};

function drawParticles() {
    particles.forEach(particle => {
        const alpha = particle.life / particle.maxLife;
        ctx.fillStyle = particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(particle.x - cameraX, particle.y, particle.size * alpha, 0, Math.PI * 2);
        ctx.fill();
    });
};

function updateParticles() {
    particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.gravityDelay > 0) {
            particle.gravityDelay--;
        } else {
            particle.vy += 0.08;
        };
        particle.life--;
    });

    particles = particles.filter(el => el.life > 0);
};

// hero death
function spawnHeroDeath(hero) {
    const centerX = hero.x + hero.w / 2;
    const centerY = hero.y + hero.h / 2;

    for (let i = 0; i < 25; i++) {
        particles.push({
            x: centerX,
            y: centerY,

            vx: (Math.random() - 0.5) * 5,
            vy: (Math.random() - 0.5) * 5,

            life: 40 + Math.random() * 20,
            maxLife: 60,

            size: 2 + Math.random() * 3,

            color: hero.color1,

            gravityDelay: 8
        });
    };
};

export { spawnParticles, updateParticles, drawParticles, spawnHeroDeath };