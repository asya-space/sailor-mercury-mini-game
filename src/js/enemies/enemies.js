import { platforms } from '../world/platforms.js';
import { enemy1, enemy2, enemy3, enemy4 } from '../../assets/images.js';
import { AirEnemy, GroundMonster, Monster } from './enemyData.js';

const enemies = [],
      catProjectiles = [],
      blueMonsterProjectiles = [];

function createEnemy() {
    const catMonsters = [
        new Monster(
            enemy2, 
            50, 
            48 * enemy2.ratio, 
            platforms[6].x, 
            30, 
            1, 
            'catMonster', 
            platforms[6],
            catProjectiles,
            '#111be3',
            '#0a0e64'),

        new Monster(
            enemy2, 
            50, 
            48 * enemy2.ratio, 
            platforms[10].x, 
            30, 
            1, 
            'catMonster', 
            platforms[10],
            catProjectiles,
            '#111be3',
            '#0a0e64'
        ),

        new Monster(
            enemy2, 
            50, 
            48 * enemy2.ratio, 
            platforms[20].x, 
            30, 
            1, 
            'catMonster', 
            platforms[20],
            catProjectiles,
            '#111be3',
            '#0a0e64'
        )
    ];

    const blueMonsters = [
        new Monster(
            enemy3, 
            50, 
            70 * enemy3.ratio, 
            platforms[12].x, 
            30, 
            1, 
            'blueMonster', 
            platforms[12],
            blueMonsterProjectiles,
            '#641068',
            '#e15fe4'
        ),
        new Monster(
            enemy3, 
            50, 
            70 * enemy3.ratio, 
            platforms[16].x, 
            30, 
            1, 
            'blueMonster', 
            platforms[16],
            blueMonsterProjectiles,
            '#641068',
            '#e15fe4'
        ),
        
        new Monster(
            enemy3, 
            50, 
            70 * enemy3.ratio, 
            platforms[22].x, 
            30, 
            1, 
            'blueMonster', 
            platforms[22],
            blueMonsterProjectiles,
            '#641068',
            '#e15fe4'
        )
    ];

    const airMonsters = [
        new AirEnemy(enemy4, 48, 80 * enemy4.ratio, platforms[2].x, 40, 1, 'airMonster', platforms[2]),
        new AirEnemy(enemy4, 48, 80 * enemy4.ratio, platforms[18].x, 40, 1, 'airMonster', platforms[18])
    ];

    const groundMonsters = [
        new GroundMonster(enemy1, 100, 60 * enemy1.ratio, 450, 50, 1, 'groundMonster', 450, 900),
        new GroundMonster(enemy1, 100, 60 * enemy1.ratio, 1650, 50, 1, 'groundMonster', 1650, 2050),
        new GroundMonster(enemy1, 100, 60 * enemy1.ratio, 3150, 50, 1, 'groundMonster', 3150, 3550),
        new GroundMonster(enemy1, 100, 60 * enemy1.ratio, 4550, 50, 1, 'groundMonster', 4550, 5000)
    ];
    enemies.push(
        ...catMonsters, 
        ...blueMonsters, 
        ...airMonsters, 
        ...groundMonsters
    );
};

export { createEnemy, enemies, catProjectiles, blueMonsterProjectiles }