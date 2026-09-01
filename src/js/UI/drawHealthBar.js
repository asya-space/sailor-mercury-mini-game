import { ctx } from "../utils/canvas";
import { hero } from "../hero/hero";
import { canvas } from "../utils/canvas";
import { boss } from "../boss/boss";

// hero hp
export function drawHeroHpBar() {
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(10, 10, 204, 28);
    ctx.strokeStyle = '#ff69b4';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, 204, 28);

    const hpRatio = Math.max(0, hero.hp / hero.maxHp);
    const hpColor = hpRatio > 0.5 ? 'rgba(57, 205, 57, 0.3)' 
    : hpRatio > 0.25 ? 'rgba(204, 170, 34, 0.5)' : 'rgba(204, 34, 34, 0.5)';

    ctx.fillStyle = hpColor;
    ctx.fillRect(12, 12, 200 * hpRatio, 24);

    // HP text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`HP: ${Math.max(0, Math.ceil(hero.hp))} / ${hero.maxHp}`, 112, 28);

    // Character name
    ctx.fillStyle = '#87ceeb';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('SAILOR MERCURY', 14, 55);

    // Staff icon
    ctx.fillStyle = '#ffcc00';
    ctx.font = '16px serif';
    ctx.fillText('⭐', 14, 75);
};

// boss hp
export function drawBossHpBar() {
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(canvas.width/2 - 100, 10, 200, 28);
        ctx.strokeStyle = 'rgba(255, 0, 68, 0.5)';
        ctx.lineWidth = 2;
        ctx.strokeRect(canvas.width/2 - 100, 10, 200, 28);

        const bossHpRatio = Math.max(0, boss.hp / boss.maxHp);
        ctx.fillStyle = 'rgba(255, 0, 68, 0.5)';
        ctx.fillRect(canvas.width/2 - 98, 12, 196 * bossHpRatio, 24);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`NEHELENIA: ${Math.max(0, boss.hp)} / ${boss.maxHp}`, canvas.width/2, 28);
};