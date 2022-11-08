namespace SpriteKind {
    export const coin = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Princess_Plum.vy == 0) {
        Princess_Plum.vy = -150
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let Heart_coin: Sprite = null
let Princess_Plum: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111199999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999
    8899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111119911199999999999999999999
    8899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111199911999999999999999999
    8889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111911119999999999999999
    8888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111199111999999999999999
    8888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111119111119999999999999
    8888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111999111111111111111
    8888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111119911111199999111
    8888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111199999911111111
    8888888888888888888888999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111
    8888888888888888888888889999999999999999999999999999999999999999999999999999999999999999999999999911999911111111111111111111111111111111111111111111111111111111
    8888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999119911111111111111111111111111111111111111111111111111111111111
    8888888888888888888888888881111199999999999999999999999999999999999999999999999999999999999999999119111111111111111111111111111111111111111111111111111111111111
    8888888888888888888888888111111111199999999999999999999999999999999999999999999999999999999999999119111111111111111111111111111111111111111111111111111111111111
    8888888888888888888888881111111111111199999999999999999999999999999999999999999999999999999999999111911111111111111111111111111111111111111111111111111111111111
    8888888888888888888888811199999911111119999999999999988888888899999999999999999999999999999999999111191111111111111111111111111111111111111111111111111111111111
    8888888888888888888888111191111111111118888888888888888888888888889999999999999999999999999999998111111111111111111111111111111111111111111111111111111111111111
    8888888888888888888881111911111111111118888888888888888888888888888888889999999999999999998888888811111111111111111111111111111111111111111111111111111111111111
    8888888888888888888811119111111111111111811118888888888888111188888888888888888888888888888888888888111111111111111111111111111111111888888881111111111111111111
    8888888888888888888811191111111111111111111111188888881111111111118888888888888888888888888888888888888811111111111118888888888888888888888888888111111111111111
    8888888888888888888111991111111111111111111111118888111111199911111888888888888888888888888888888888888888888888888888888888888888888888888888888881118888888888
    8888888888888888888111911111111111111111111111111111111111111199911118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888811111911111111111111111111111111111111111111111911118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888111111911111111111111111111111111111111111111111199111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888811119999111111111111111111111111111111111111111111119991118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888119991111111111111111111111111111111111111111111111111119111118888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888881191111111111111111111111111111111111111111111111111111111999111118888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888111111111111111111111111111111111111111111111111111111111111119111111111888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888111111111111111111111111111111111111111111111111111111111111111111111111888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888111111111111111111111111111111111111111111111111111111111111111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888811111111111111111111111111111111111111111111111111111111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888111111111111111111111111111111111111111111111111111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    aaaa888888888888888888888888888888888811111111188888888881111188888888888888888888888888888888888881111118888888888888888888888888888888888888888888888888888888
    aaaaaaaaaaaaaa88888888888888888888888888888888888888888888888888888888888888888888888888888888888111111118888888888888888888888888888888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888888888888888888888888888888888888888888111119991111aaaaa888888888888888888888888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888888888888888888888888888888888881111991191111aaaaaaaaaa8888888888888888888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa8888888888888888888888888888888888888888888888888888888888111191111991111aaaaaaaaaaaa8888888888888888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888888888888888888888888888aaaa11119111111911111aaaaaaaaaaaaa88888888888888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888888888888888888aaaaaaaaaa11191111111199111aaaaaaaaaaaaaaa888888888888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa88888888888888888888aaaaaaaa11111aaa1111111111111119111111111111aaaaaaaa8811111888888888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111111111111111111111111199111111111111aaaaaa11111111aaa88888888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111111111111119999999911111111111111111111aaaa88888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111111111111111111111111111111111111111111111aaaa888888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111111111111111111111111111111111111111111111111111111111111111aaa88888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111111111111111111111111111111111111111111111191111aaa888888888888888
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111111111111111111111111111111111199111111aaaaaaaaaaaa88
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111111111111111111111111111111111111999991111aaaaaaaaa88
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111111111111111111111111111111111111111111111111111111111111111111111199111111aaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1111111111111111111111111111111111111111111111111111111111111111111111111199111111aaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111111111111111111111111111111111111111111111111999911aaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111111111111111111111111111111111111111111111111111119991aaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111111111111111111111111111111111111999999911111111111199111aaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111111111111111111111111111111111119111111991111111111991111aaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa11111111111111111111111111111111111111111111111111111111111111111111111119999911199911111aaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111111111111111111111111111111111111111111111111111111999911111aaaaaa
    aaaaaaaaaaaaaaaaaaaa111111aa33333aaaaaaaaaa33aaaaaaaaaaaaaaaaaaaaaa111111111111111111111111111133333333333331111111111111111111111111133331111111111111aaaaaaaaa
    aaaaaaaaaaaaaaaaaa11111111113333333aaaaaa3333333aaaaaaaaaaaaaaaaaaaaa11111111111111111111111333333333333333333311111111111111111111113333333311111111aaaaaaaaaaa
    aaaaaaaaaaaaaaaaa1111111111113333333333333333333333aaaaaaaaaaaaaaaaaaa1111111111111111111133333333333333333333333311111111111111111333333333333333aaaaaaaaaaaaaa
    aaaaaaaaaaaaaaa31111111111111133333333333333333333333aaaaaaaaaaaaaaaaaaa1111111111111333333333333333333333333333333331111111111133333333333333333333333aaaaaaaaa
    333311111113333111119991111111333333333333333333333333aaaaaaaaaaaaaaaaaaaaaaa33333333333333333333333333333333333333333333333333333333333333333333333333333333aaa
    3331111111111111111991111111111333333333333333333333333aaaaaaaaaaaaaaaaaa333333333333333333333333333333333333333333333333333333333333333333333333333333333333aaa
    331111999911111111911111111111113333333333333333333333333aaaaaaaaaaaaaaaa333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    311199111191111999111111111111111333333333333333333333333333aaaaaaaaaaaaa333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1119111111999991111111111111111111333333333331111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111113333333111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111111111111111111111111111133333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111111111111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111111111111111111111111111111113333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    1111111111111111111111111111111111111111111111111111111111199111111133333333333333333333333333333333333333333333333333333333333333333333333333333333444444444444
    1111111111111111111111111111111111111111111111111111111111111991111111111333333333333333333333333333333333333333333333333333333333333333333333334444444444444444
    1111111111111111111111111111111111111111111111111111111111111119111111111111111111111111111113333333333333333333333333333333333333333333333334444444444444444444
    1111111111111111111111111111111111111111111111111111111111111111991111111111111111111111111114444444433333333333333333333333333333333333333444444444444444444444
    1111111111111111111111111111111111111111111111111111111111111111119999999911111111111111111144444444444443333333333333333333333333333333444444444444444444444444
    1111111111111111111111111111111111111111111111111111111111111111111111111199111111111111111444444444444444444333333333333333333333333444444444444444444444444444
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144444444444444444444444433333333333333333444444444444444444444444444444
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111114444444444444444444444444444333333333333344444444444444444444444444444444
    1111111111111111111111111111111111111111111111111111133333111111111111111111111444444444444444444444444444444444444444333333444444444444444444444444444444444444
    1111111111111111111111111111111111111111111111111111333333444111111111111111144444444444444444444444444444444444444444444444444444444444444444444444444444444444
    1111111111111111111111111111113333111111111111111133333333444444411111111144444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4411111111111111111111111111333333333331111111133333344444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444411111111111111111111333333333333333333334444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444433333333333333334444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444333333333334444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444443333333444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441111111444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441111111111114444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444111111111111111154
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441111111999911111114
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444411111119111199111111
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444441111111119111111999111
    4441111444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444411111111191111111111911
    1111111114444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444445111111111911111111111111
    1111111111144444444444444444444444444444444444444444444444444444444444444445555555555555444444444444444444444444441111111114444444444511111111119111111111111111
    1119999911114444444444444444444444444444444444444444444444444444444444445555555555555555555444444444444444444444111111111111114444455111111111119111111111111111
    1119111999111444444444444444444444444444444444444444444444444444444444455555555555555555555555554444444444444411111111111111111115511111111111991111111111111111
    1119111111111114444444111114444444444444444444444444444444444444444445555555555555555555555555555544444444441111111111999991111111111119999999111111111111111111
    1191111111111111111111111111111114444444444444444444444444444444444455555555555555555555555555555555544444111111111111911119911111119991111111111111111111111111
    1911111111111111111111111111111111144444444444444444444444444444444555555555555555555555555555555555555511111111111111111111199999991111111111111111111111111111
    9911111111111111111111111111111111114444444444444444444444444444455555555555555555555555555555555555555111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111111444444444444444444444444445555555555555555555555555555555555555111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111111155544444444444444444444555555555555555555555555555111111111111111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111191115555555544444444444444555555555555555555555555511111111111111111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111119111155555555554444444445555555555555555555555551111119999911111111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111119111111555555555555555555555555555555555555555111111991111111111111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111111991111111555555555555555555555555555555555555111111119991111111111111111111111111111111111111111111111111111111111111111111
    9111111111111111111111111111111111111119911111111155555555555555555555555555555555555111111119999999999911111111111111111111111111111111111111111111111111111111
    1911111111111111111111111111111111111111991111111115555555555555555555555555555555555555555511111111111111111111111111111111111111111111111111111111111111111111
    1911111111111111111111111111111111111111199999111155555555555555555555555555555555555555555555111155555555511111111111111555511111111111111111111111111111111111
    1111111111111111111111111111111111111111111199111155555555555555555555555555555555555555555555555555555555555111111111555555555111111111111111111111111111111111
    1111111111111111111111111111111111111111999911111555555555555555555555555555555555555555555555555555555555555555555555555555555551111111111111111111111111111111
    1111111111111111111111111111111111111119911111115555555555555555555555555555555555555555555555555555555555555555555555555555555555511111111111111111111111111111
    1111111111111111111111111111111111111111111115555555555555555555555555555555555555555555555555555555555555555555555555555555555555555111111111111111111111111111
    `)
Princess_Plum = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . f f b b b b f b f e e e f . . 
    . f b b b b b e 1 f 4 4 e . . . 
    . f b b b b b f 4 4 4 4 f . . . 
    . . f b b b 4 4 e d d d f . . . 
    . . . f f f 4 4 e d d d f . . . 
    . . . f b b e e b b d d d f . . 
    . . . . f b d d 1 d 1 d b f . . 
    . . . . . f f f b b f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(Princess_Plum, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Princess_Plum.ay = 350
scene.cameraFollowSprite(Princess_Plum)
for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
    Heart_coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f . . . . f f f . . . 
        . . f 3 3 3 f . . f 3 3 3 f . . 
        . f 3 3 3 3 3 f f 3 3 3 3 3 f . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . . . f 3 3 3 3 3 3 3 3 f . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . . . f 3 3 3 3 f . . . . . 
        . . . . . . f 3 3 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.placeOnTile(Heart_coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
