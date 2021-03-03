let SpaceShip = sprites.create(assets.image`Sprite_Spaceship`, SpriteKind.Player)
SpaceShip.setPosition(86, 82)
let EnemyShip = sprites.create(assets.image`Sprite_Alien`, SpriteKind.Enemy)
EnemyShip.setPosition(randint(0, scene.screenWidth()), 0)
EnemyShip.setVelocity(0, 30)
forever(function () {
    controller.moveSprite(SpaceShip)
    if (EnemyShip.y > scene.screenHeight()) {
        EnemyShip.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
