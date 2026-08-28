import { platforms } from "../world/platforms";
import { enemy1, enemy2, enemy3, enemy4 } from "../../assets/images";
import { Enemy, AirEnemy, GroundMonster } from "./enemyData";

const enemies = [];

function createEnemy() {
    const catMonsters = [
        new Enemy(enemy2, 50, 48 * enemy2.ratio, 1480, 30, 1, 'catMonster', platforms[6]),
        new Enemy(enemy2, 50, 48 * enemy2.ratio, 2350, 30, 1, 'catMonster', platforms[10]),
        new Enemy(enemy2, 50, 48 * enemy2.ratio, 4500, 30, 1, 'catMonster', platforms[20])
    ];

    const blueMonsters = [
        new Enemy(enemy3, 50, 70 * enemy3.ratio, 2750, 30, 1, 'blueMonster', platforms[12]),
        new Enemy(enemy3, 50, 70 * enemy3.ratio, 3600, 30, 1, 'blueMonster', platforms[16]),
        new Enemy(enemy3, 50, 70 * enemy3.ratio, 4900, 30, 1, 'blueMonster', platforms[22])
    ];

    const airMonsters = [
        new AirEnemy(enemy4, 48, 80 * enemy4.ratio, 1700, 40, 1, 'airMonster', platforms[2]),
        new AirEnemy(enemy4, 48, 80 * enemy4.ratio, 3800, 40, 1, 'airMonster', platforms[18])
    ];

    const groundMonsters = [
        new GroundMonster(enemy1, 100, 60 * enemy1.ratio, 450, 50, 1, 'groundMonster', 450, 900),
        new GroundMonster(enemy1, 100, 60 * enemy1.ratio, 1650, 50, 1, 'groundMonster', 1650, 2050),
        new GroundMonster(enemy1, 100, 60 * enemy1.ratio, 3150, 50, 1, 'groundMonster', 3150, 3550),
        new GroundMonster(enemy1, 100, 60 * enemy1.ratio, 4550, 50, 1, 'groundMonster', 4550, 5000)
    ];

    enemies.push(catMonsters, blueMonsters, airMonsters, groundMonsters);
};

export { createEnemy, enemies}