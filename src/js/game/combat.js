import { heroProjectiles } from '../hero/heroAttack';
import { enemies } from '../enemies/createEnemies';
import { spawnParticles } from '../effects/particles';
import { removeItem } from '../utils/functions';
import { spawnHeroDeath } from '../effects/particles';

// hero's attacking
function checkHeroAttackHits() {
    const ballsToRemove = [],
          deadEnemies = [];
    heroProjectiles.forEach(ball => {
        for (const enemy of enemies) {
            if (ball.x + 6 > enemy.x
                && ball.x - 6 < enemy.x + enemy.w
                && ball.y + 6 > enemy.y
                && ball.y - 6 < enemy.h + enemy.y
            ) {
                enemy.hp -= ball.damage;
                enemy.hpBarTimer = 100;
                ballsToRemove.push(ball);

                if (enemy.hp <= 0) {
                    enemy.alive = false;
                    spawnParticles(// x, y, color, count, speed
                        enemy.x + enemy.w / 2,
                        enemy.y + enemy.h / 2,
                        enemy.deathColor,
                        15,
                        2
                    );
                    deadEnemies.push(enemy);
                };

                break; // one ball hit enemy - ok. that's all, look at the next ball
            };

        };
    });

    removeItem(ballsToRemove, heroProjectiles); // delete used hero's balls
    removeItem(deadEnemies, enemies); // delete death enemies
};

// enemies attacking
function checkEnemyAttackHits(projectiles, hero) {
    const attackToRemove = [];
    projectiles.forEach(attack => {
        if (attack.x < hero.x + hero.w
            && attack.x + attack.w > hero.x
            && attack.y < hero.y + hero.h
            && attack.y + attack.h > hero.y) {
                hero.hitTimer = 30;
                hero.hp -= attack.damage;
                if (hero.hp <= 0 && hero.alive) {
                    hero.alive = false;
                    spawnHeroDeath(hero);
                };
                attackToRemove.push(attack);
            };
    });
    removeItem(attackToRemove, projectiles);
};
export { checkHeroAttackHits, checkEnemyAttackHits };