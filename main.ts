namespace SpriteKind {
    export const Entity = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Entity, function (sprite) {
    initEntity(sprite)
    while (true) {
    	
    }
})
function isAlive (sprite: Sprite) {
    return sprites.readDataNumber(sprite, "health") > 0
}
function initEntity (sprite: Sprite) {
    sprites.setDataNumber(sprite, "maxHealth", 100)
    sprites.setDataNumber(sprite, "health", 100)
    sprites.setDataNumber(sprite, "age", 0)
}
function doEntityStep (sprite: Sprite) {
	
}
