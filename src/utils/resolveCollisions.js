function resolveCollisions(hero, enemy) {
    const collision = hero.x < enemy.x + enemy.w 
                      && hero.x + hero.w > enemy.x 
                      && hero.y < enemy.y + enemy.h 
                      && hero.y + hero.h > enemy.y;
    if (!collision) return;

    // central parts of objects
    const heroCtrX = (hero.x + hero.w) / 2,
          heroCtrY = (hero.y + hero.h) / 2,
          enemyCtrX = (enemy.x + enemy.w) / 2,
          enemyCtrY = (enemy.y + enemy.h) / 2;
    // how big is the overlap?
    const overlapX = (heroCtrX < enemyCtrX) ? (hero.x + hero.w - enemy.x) : (enemy.x + enemy.w - hero.x),
          overlapY = (heroCtrY < enemyCtrY) ? (hero.y + hero.h - enemy.y) : (enemy.y + enemy.h - hero.y);
    // fix just one asix
    if (overlapX < overlapY) {
    // horizontal collision
        if (heroCtrX < enemyCtrX) {
            hero.x -= overlapX;
        } else {
            hero.x += overlapX;
        }
    } else {
    // vertical collision
        if (heroCtrY < enemyCtrY) {
            hero.y -= overlapY;
            hero.velocityY = 0;
            hero.onGround = true;
        } else {
            hero.y += overlapY;
            hero.velocityY = 0;
        }
    }
}

export { resolveCollisions };