namespace SpriteKind {
    export const Entity = SpriteKind.create()
    export const FoodSource = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Entity, function (sprite) {
    entityInit(sprite)
    while (entityAlive(sprite)) {
    	
    }
    sprite.destroy()
})
function entityAction (sprite: Sprite) {
	
}
function entityInit (sprite: Sprite) {
    sprites.setDataNumber(sprite, "health", 100)
    sprites.setDataNumber(sprite, "ticks", 0)
}
function entitySense (sprite: Sprite) {
    sprites.changeDataNumberBy(sprite, "ticks", 1)
}
sprites.onCreated(SpriteKind.FoodSource, function (sprite) {
    sprites.setDataNumber(sprite, "food", 1000)
})
function entityAge (sprite: Sprite) {
    sprites.changeDataNumberBy(sprite, "health", 0 - ageDamage)
}
sprites.onDestroyed(SpriteKind.Entity, function (sprite) {
    if (sprites.allOfKind(SpriteKind.Entity).length == 0) {
        game.over(true)
    }
})
function entityAlive (sprite: Sprite) {
    return sprites.readDataNumber(sprite, "health") > 0
}
let ageDamage = 0
ageDamage = 1
let willToLive = 1
let population = 5
game.onUpdateInterval(1000, function () {
    for (let value of sprites.allOfKind(SpriteKind.Entity)) {
        entityAge(value)
    }
})
