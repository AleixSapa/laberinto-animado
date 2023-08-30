controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Jugador,
    assets.animation`Bajar Animado`,
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Fin`, function (sprite, location) {
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Jugador,
    assets.animation`Derecha Animada`,
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Jugador,
    assets.animation`Izcierda Animada`,
    500,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeCountdownBy(90)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    tiles.setTileAt(location, assets.tile`myTile`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Jugador,
    assets.animation`Subir Animacion`,
    200,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`A Teleportar`, function (sprite, location) {
    tiles.placeOnRandomTile(Jugador, assets.tile`Llegar`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Mubing = false
let Jugador: Sprite = null
tiles.setCurrentTilemap(tilemap`nivel1`)
Jugador = sprites.create(assets.image`Jugador`, SpriteKind.Player)
tiles.placeOnRandomTile(Jugador, assets.tile`Inicio`)
info.setLife(1)
let Enemigo = sprites.create(assets.image`El Pato Enemigo`, SpriteKind.Enemy)
tiles.placeOnRandomTile(Enemigo, assets.tile`Enemigo`)
Enemigo.follow(Jugador)
controller.moveSprite(Jugador, 100, 100)
scene.cameraFollowSprite(Jugador)
info.startCountdown(90)
game.onUpdate(function () {
    Mubing = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))
    if (!(Mubing)) {
        animation.stopAnimation(animation.AnimationTypes.All, Jugador)
    }
})
