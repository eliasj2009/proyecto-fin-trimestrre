//  variables
let escupir = 0
let comer = 0
info.player1.setScore(0)
//  mosca
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    sprites.destroy(sprite)
    info.player1.changeScoreBy(5)
})
//  botonA
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    let vomito: Sprite;
    
    if (escupir == 0) {
        comer *= 0
        rana.setImage(assets.image`
            myImage
        `)
        comer += 1
        timer.debounce("action", 300, function on_debounce() {
            rana.setImage(assets.image`
                myImage0
            `)
        })
    } else {
        if (escupir == 1) {
            vomito = sprites.createProjectileFromSprite(img`
                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e 
                                    e e e e e e e e e e e e e e e e
                `, rana, 0, -200)
        }
        
        escupir += 0 - 1
        rana.setImage(assets.image`
            myImage0
        `)
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    
    if (comer == 1 && escupir == 0) {
        sprites.destroy(otherSprite2)
        comer += 0 - 1
        escupir += 1
        timer.debounce("action", 200, function on_debounce2() {
            rana.setImage(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `)
        })
    } else {
        game.gameOver(false)
    }
    
})
let tu = game.askForString("rana, identificate")
console.log(tu)
//  rana
let rana = sprites.create(img`
        ................................
            ................................
            ................................
            ................................
            ................................
            ...............33...............
            ..............333...............
            ..........fff323...fff..........
            .........f777f2333f777f.........
            .........f7777ffff7777f.........
            .........f777777777777f.........
            ..........f7777777777f..........
            .........f777777766677f.........
            .........f666797769677f.........
            .......fff696777766677fff.......
            ......f77f666777777777f69f......
            ......f67f777776667777f76f......
            ......f67f777976967776f77f......
            ......f77f777776667776f77f......
            ......f79f777777777777f77f......
            .......f7ff6677777667ff6f.......
            .......f77ff96777699ff77f.......
            ........f76ffffffffff77f........
            ........f7f..........f9f........
            .........f............f.........
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
    `, SpriteKind.Player)
controller.moveSprite(rana, 150, 100)
rana.setPosition(77, 88)
rana.sayText("SOY EL SOLDADO " + tu + " EMPEZAMOS LA BATALLA", 1500, false)
rana.setStayInScreen(true)
scene.setBackgroundImage(img`
    8888888888888888bbbbbb66666666b777777777777777777777777777777777777d7668888888888888888888888888bbbbbb66666666b777777777777777777777777777777777777d766888888888
        888888888888888888bbbbbbbbbbbbb7777777777777777777777777777777777777666888888888888888888888888888bbbbbbbbbbbbb7777777777777777777777777777777777777666888888888
        88888888888888888888bbbbbbbbbbb677777777777777777777777777777777777666888888888888888888888888888888bbbbbbbbbbb6777777777777777777777777777777777776668888888888
        8888888888888888888888bbbbbbbbb66777777777777777777777777777777777666688888888888888888888888888888888bbbbbbbbb6677777777777777777777777777777777766668888888888
        8888888888888888888888888888888667777777777777777777777777777777766668888888888888888888888888888888888888888886677777777777777777777777777777777666688888888888
        8888888888888888888888888888888866777777777777777777777777777777666688888888888888888888888888888888888888888888667777777777777777777777777777776666888888888888
        8888888888888888dddd88ddddd8888866677777777777777777777777777766666888888888888888888888888888888888888888888888666777777777777777777777777777666668888888888888
        8888888888888888d11dddd1d1ddddddd66667777777777777777777777766666688888888888888888888888888888888888cccccccccccc66667777777777777777777777766666688888888888888
        8888888888888888d111dd11d11ddddddd6666666777777777777777766666668888888888888888888888888888888888cccccccccccccccc6666666777777777777777766666668888888888888888
        888888888dddd8ddd111d111d111dddd1ddddddd66666666666666666666668888888888888888888888888888888888cccccccccccccccccccc66666666666666666666666666888888888888888888
        888888888d11ddddd111d111d1111dd11dddd11d666666666666666666668888888888888888888888888888888888cccccccccccccccccccccccc666666666666666666666688888888888888888888
        888888888d111dddd1111d1111111d111ddd111dd6666666666666666888888888888888888888888bbbb88888888cccccccccccccccccccccccccccc666666666666666688888888888888888888888
        888888888d1111dddd111d1111111111ddd1111dddddd777788888888888888888888888888888888bbbb8888888ccccccccccccccccccccccccccccccccc77778888888888888888888888888888888
        888888888d11111ddd11111111111111dd11111ddddddd77788888888888888888888888888888888bbbbb88888ccccccccccccccccccccccccccccccccccc7778888888888888888888888888888888
        888888888d11111ddd1111111111d11ddd1111ddddddddd78888888888888888888888888888888888bbbb88888cccccccccccccccc77777ccccccccccccccc788888888888888888888888888888888
        888888888dd11111ddd1111dd11dddddd11111ddddddddd788888888888888888b66666666688888888bbb88887cccccccccccccccccc7777777ccccccccccc788888888888888888b66666666688888
        8888888888d111111dd11ddd2ddddddd11111dd7dddddd7888888888888888888bb666666666668888888888887ccccccccccccccccccc7777777777cccccc7888888888888888888bb6666666666688
        78888ddd88dd111111ddd2d222dddddd1111ddd7ddddd788888888888888888888b6666666666666888888888887cccccccccccccccccccc777777777777c788888888888888888888b6666666666666
        66888d11ddddd111ddddd22222d2dddd111ddddd1111d88888888888866b8888888b6666666666666688888888877ccccccccccccccccccccc7788877777788888888888866b8888888b666666666666
        66688d1111dddd11d11dd2222222dd11d1ddddd1111dd8888888888866666688888bb6666666666666688888888877cccccccccccccccccccccc7888888888888888888866666688888bb66666666666
        666788d1111ddddddd112dd222211111ddddd11111dd8888888888866666666b8888b666666666666668888888888777ccccccccccccccccc777788888888888888888866666666b8888b66666666666
        666688dd11111ddddd12211d2d11111dddd111111dd8888888888866666666666b88bb666666666666668888888888777777777777777777777788888888888888888866666666666b88bb6666666666
        6666877ddd11111dddd21111d11111ddd11111dddd888888888886666666666666688b6666666666666687777668888877777777777777777888888888888888888886666666666666688b6666666666
        667777777dddd1111dd221ddddd11dd1111ddddddd8888888888866666666666666666666666666666777777776888888888888888888888888888888888888888888666666666666666666666666666
        7777777111111dddddd22d11111ddddddddd111111d888888888676666666666666666666666666777777777776888888888888866788888888888888888888888886766666666666666666666666667
        77777771111111111dd2d1111111dddd11111111177888888888b76666666666666666666666677777777777776888888888886677dd788888888888888ddddd88dddd66666666666666666666666777
        777777777111111dddd2ddd111dddddddd111117778888888888b676666666666666666666677777777777777776888888886677777d7788888888888ddd1d1dddd11d76666666666666666666677777
        77777777777777dd7d22ddddddddd111dddddd778888888888888b77666666666666666666777777777777777776888888667777777dd7888888ddd88dd11d11dd111d77666666666666666666777777
        777777777ddddd771221d121dddd11221177dddd7788888888888bb77666666666666666677777777777777777776888667777777777d7dddd88d1dddd111d111d111ddd7dddd6666666666667777777
        77777777ddddd7712211d1211ddd711211177dddd7788888888888bb7776666666666666777777777777777777776666777777777777d7d11dd8d11dd1111d111d111ddddd11d6666666666677777777
        7777777ddddd7711211dd12111dd77111111777777888888888888bbb677666666666667777777777777777777776677777777777777d7d111ddd111d1111111d1111dddd111d6666666666777777777
        777777777ddd711221d7dd2111ddd67d11111d88888888888888888bbb6666666666666777777777777777777777777777777777777dd6d1111ddd1111111111d111dddd1111d6666666666777777777
        777777777777d122dd777d11111d7668ddddd8888888888888888888bbbbbb66666666b777777777777777777777777777777777777d76d11111dd11111111111111ddd11111db66666666b777777777
        7777777777777d2d777777d1111d666888888888888888888888888888bbbbbbbbbbbbb777777777777777777777777777777777777766dd1111ddd11d1111111111ddd11111dbbbbbbbbbb777777777
        77777777777222277777777d111d66888888888888888888888888888888bbbbbbbbbbb677777777777777777777777777777777777666dd11111dddddd11dd1111ddd11111ddbbbbbbbbbb677777777
        777777777722227777777777ddd66688888888888888888888888888888888bbbbbbbbb6677777777777777777777777777777777766668dd11111ddddddd2ddd11dd111111d88bbbbbbbbb667777777
        777777777222227777777777766668888888bbb8888888888888888888888888888888866777777777777777777777777777777776dddd8ddd1111dddddd222d2ddd111111dd88ccc888888667777777
        77777777722222777777777766668888888bbbbbb8888888888888888888888888888888667777777777777777777777777777776d1111ddddd111dddd2d22222ddddd111ddddd11c888888866777777
        77777777777777777777776666688888888bbbbbb8888888888888888888888888888888666777777777777777777777777777666dd1111ddddd1d11dd2222222dd11d11dddd1111c888888866677777
        77777777777777777777666666888888888bbbbbb88888888888888888888cccccccccccc666677777777777777777777777666666dd11111ddddd111122222d2111ddddddd1111cccccccccc6666777
        67777777777777777666666688888888888bbbbbb88888888888888888cccccccccccccccc666666677777777777777776666666888dd111111dddd11121d2212111ddddd11111cccccccccccc666666
        66666666666666666666668888888888888888888888888888888888cccccccccccccccccccc66666666666666666666666666888888dddd11111ddd11221211211dddd11111cccccccccccccccc6666
        666666666666666666668888888888888888888888888888888888cccccccccccccccccccccccc666666666666666666666688888888ddddddd1111dd11222dd21ddd1111ccccbbbcccccccccccccc66
        d6666666666666666888888888888888888888888888888888888cccccccccccccccccccccccccccc66666666666666668888888888d111111ddddddddd221122dddddddd111111bcccccccccccccccc
        ddddd77888888888888888888888888888888888888888888888cccccccccccccccccccccccccccccccccbbbb88888888888888888877111111111dddd1121222dddd1111111111bcccccccccccccccc
        dddddd778888888888888888888888888888888888888888888cccccccccccccccccccccccccccccccccccbbb888888888888888888877711111dddddddd2222ddddddd111111bbccccccccccccccccc
        ddddddd78888888888888888888888888888888888888888888ccccccccccccccccbbbbbcccccccccccccccb888888888888888888888877dddddd111ddd2dd2dd11dbddbbbbbccccccbbbbbcccccccc
        ddddddd788888888888888888b666666666888888888888888bccccccccccccccccccbbbbbbbcccccccccccb88888888888888888b6677dddd77111111dd2d121d1111bbcccccccccccccbbbbbbbcccc
        dddddd7888888888888888888bb66666666666888888888888bcccccccccccccccccccbbbbbbbbbbccccccb888888888888888888bb77dddd771111117dd21211d11111bbcccccccccccccbbbbbbbbbb
        7777d788888888888888888888b666666666666688888888888bccccccccccccccccccccbbbbbbbbbbbbcb88888888888888888888b677777711111177dd21211dd11111bbccccccccccccccbbbbbbbb
        7777788888888888866b8888888b66666666666666888888888bbcccccccccccccccccccccbb888bbbbbb88888888888866b8888888b6666d11111d766dd2221dd8d11111bccccccccccccccccbb888b
        888888888888888866666688888bb66666666666666888888888bbccccccccccccccccccccccb888888888888888888866666688888bb6666ddddd6666d12211d888dd111cccccccccccccccccccb888
        88888888888888866666666b8888b666666666666668888888888bbbcccccccccccccccccbbbb88888888888888888866666666b8888b6666666666666d1221d88888bcccccccccccccccccccbbbb888
        8888888888888866666666666b88bb666666666666668888888888bbbbbbbbbbbbbbbbbbbbbb88888888888888888866666666666b88bb666666666666d12228888888bbbbbbbbbbbbbbbbbbbbbb8888
        88888888888886666666666666688b66666666666666877776688888bbbbbbbbbbbbbbbbb888888888888888888886666666666666688b6666666666666dd22776688888bbbbbbbbbbbbbbbbb8888888
        8888888888888666666666666666666666666666667777777768888888888888888888888888888888888888888886666666666666666666666666666677722777688888888888888888888888888888
        8888888888886766666666666666666666666667777777777768888888888888667888888888888888888888888867666666666666666666666666677777722777688888888888886678888888888888
        888888888888b76666666666666666666666677777777777776888888888886677dd788888888888888888888888b76666666666666666666666677777777227776888888888886677dd788888888888
        888888888888b676666666666666666666677777777777777776888888886677777d778888888888888888888888b676666666666666666666677777777777277776888888886677777d778888888888
        8888888888888b77666666666666666666777777777777777776888888667777777dd788888888888888888888888b77666666666666666666777777777772227776888888667777777dd78888888888
        8888888888888bb77666666666666666677777777777777777776888667777777777d768888888888888888888888bb77666666666666666677777777777772277776888667777777777d76888888888
        88888888888888bb7776666666666666777777777777777777776666777777777777d7688888888888888888888888bb7776666666666666777777777777777277776666777777777777d76888888888
        88888888888888bbb677666666666667777777777777777777776677777777777777d7688888888888888888888888bbb677666666666667777777777777777277776677777777777777d76888888888
        888888888888888bbb6666666666666777777777777777777777777777777777777dd66888888888888888888888888bbb6666666666666777777777777772222227777777777777777dd66888888888
        8bbb888888888888bbbbbb66666666b777777777777777777777777777777777777d7668888888888888888888888888bbbbbb66666666b777777777777777222222777777777777777d766888888888
        8bbbbbb88888888888bbbbbbbbbbbbb7777777777777777777777777777777777777666888888888888888888888888888bbbbbbbbbbbbb7777777777777777222227777777777777777666888888888
        8bbbbbb8888888888888bbbbbbbbbbb677777777777777777777777777777777777666888888888888888888888888888888bbbbbbbbbbb6777777777777777277222777777777777776668888888888
        8bbbbbb888888888888888bbbbbbbbb66777777777777777777777777777777777666688888888888888888888888888888888bbbbbbbbb6677777777777777777777777777777777766668888888888
        8bbbbbb888888888888888888888888667777777777777777777777777777777766668888888888888888888888888888888888888888886677777777777777777777777777777777666688888888888
        8888888888888888888888888888888866777777777777777777777777777777666688888888888888888888888888888888888888888888667777777777777777777777777777776666888888888888
        888888888888888888888888888888886667777777777777777777777777776666688888888888888bbbbbbb888888888888888888888888666777777777777777777777777777666668888888888888
        888888888888888888888cccccccccccc666677777777777777777777777666666888888888888888bbbbbbb8888888888888cccccccccccc66667777777777777777777777766666688888888888888
        888888888888888888cccccccccccccccc66666667777777777777777666666688888888888888888bbbbbbb8888888888cccccccccccccccc6666666777777777777777766666668888888888888888
        8888888888888888cccccccccccccccccccc6666666666666666666666666688888888888888888888bbbbbb88888888cccccccccccccccccccc66666666666666666666666666888888888888888888
        88888888888888cccccccccccccccccccccccc66666666666666666666668888888888888888888888bbbbbb888888cccccccccccccccccccccccc666666666666666666666688888888888888888888
        8888888888888cccccccccccccccccccccccccccc6666666666666666888888888888888888888888888888888888cccccccccccccccccccccccccccc666666666666666688888888888888888888888
        888888888888cccccccccccccccccccccccccccccccccbbbb8888888888888888888888888888888888888888888cccccccccccccccccccccccccccccccccbbbb8888888888888888888888888888888
        88888888888cccccccccccccccccccccccccccccccccccbbb888888888888888888888888888888888888888888cccccccccccccccccccccccccccccccccccbbb8888888888888888888888888888888
        88888888888ccccccccccccccccbbbbbcccccccccccccccb8888888888888888888888888888888888888888888ccccccccccccccccbbbbbcccccccccccccccb88888888888888888888888888888888
        8888888888bccccccccccccccccccbbbbbbbcccccccccccb88888888888888888b666666666888888888888888bccccccccccccccccccbbbbbbbcccccccccccb88888888888888888b66666666688888
        8888888888bcccccccccccccccccccbbbbbbbbbbccccccb888888888888888888bb66666666666888888888888bcccccccccccccccccccbbbbbbbbbbccccccb888888888888888888bb6666666666688
        88888888888bccccccccccccccccccccbbbbbbbbbbbbcb88888888888888888888b666666666666688888888888bccccccccccccccccccccbbbbbbbbbbbbcb88888888888888888888b6666666666666
        66888888888bbcccccccccccccccccccccbb888bbbbbb88888888888866b8888888b66666666666666888888888bbcccccccccccccccccccccbb888bbbbbb88888888888866b8888888b666666666666
        666888888888bbccccccccccccccccccccccb888888888888888888866666688888bb66666666666666888888888bbccccccccccccccccccccccb888888888888888888866666688888bb66666666666
        6667888888888bbbcccccccccccccccccbbbb88888888888888888866666666b8888b666666666666668888888888bbbcccccccccccccccccbbbb88888888888888888866666666b8888b66666666666
        66688888888888bbbbbbbbbbbbbbbbbbbbbb88888888888888888866666666666b88bb666666666666668888888888bbbbbbbbbbbbbbbbbbbbbb88888888888888888866666666666b88bb6666666666
        6666877776688888bbbbbbbbbbbbbbbbb888888888888888888886666666666666688b66666666666666877776688888bbbbbbbbbbbbbbbbb888888888888888888886666666666666688b6666666666
        6677777777688888888888888888888888888888888888888888866666666666666666666666666666777777776888888888888888888888888888888888888888888666666666666666666666666666
        7777777777688888888888886678888888dddd88ddddd8888888676666666666666666666666666777777777776888888888888866788888888888888888888888886766666666666666666666666667
        77777777776888888888886677dd788888d11dddd1d1ddd88888b76666666666666666666666677777777777776788888888886677dd788888888888888888888888b766666666666666666666666777
        777777777776888888886677777d778888d111dd11d11dd88dddb676666666666666666666677777777777777776888888886677777d778888888888888888888888b676666666666666666666677777
        777777777776888888667777777dddd8ddd111d111d111dddd1d8bdddd6666666666666666777777777777777776788888667777777dd788888888888888888888888b77666666666666666666777777
        777777777777688866777777777d11ddddd111d111d1111dd11d8dd11d66666666666666677777777777777777776888667777777777d768888888888888888888888bb7766666666666666667777777
        777777777777666677777777777d111dddd1111d1111111d111ddd111d76666666666666777777777777777777776666777777777777d7688888888888888888888888bb777666666666666677777777
        777777777777667777777777777d1111dddd111d1111111111ddd1111d77666666666667777777777777777777776677777777777777d7688888888888888888888888bbb67766666666666777777777
        777777777777777777777777777d11111ddd11111111111111dd11111d6666666666666777777777777777777777777777777777777dd66888888888888888888888888bbb6666666666666777777777
        777777777777777777777777777d11111ddd1111111111d11ddd1111ddbbbb66666666b777777777777777777777777777777777777d7668888888888888888888888888bbbbbb66666666b777777777
        777777777777777777777777777dd11111ddd1111dd11dddddd11111ddbbbbbbbbbbbbb7777777777777777777777777777777777777666888888888888888888888888888bbbbbbbbbbbbb777777777
        7777777777777777777777777776d111111dd11ddd2ddddddd11111dd888bbbbbbbbbbb677777777777777777777777777777777777666888888bbbbbb888888888888888888bbbbbbbbbbb677777777
        77777777777777777777777ddd66dd111111ddd2d222dddddd1111ddd8ddddbbbbbbbbb667777777777777777777777777777777776666888888bbbbbb88888888888888888888bbbbbbbbb667777777
        77777777777777777777777d11ddddd111ddddd22222d2dddd111ddddd1111d88888888667777777777777777777777777777777766668888888bbbbbb88888888888888888888888888888667777777
        77777777777777777777777d1111dddd11d11dd2222222dd11d1ddddd1111dd88888888866777777777777777777777777777777666688888888bbbbbb88888888888888888888888888888866777777
        777777777777777777777766d1111ddddddd111dd2222222222dddd11111dd888888888866677777777777777777777777777766666888888888bbbbb888888888888888888888888888888866677777
        777777777777777777776666dd11111ddddd11111d2211211dddd111111ddcccccccccccc6666777777777777777777777776666668888888888bbb8888888888888888888888cccccccccccc6666777
        6777777777777777766666668ddd11111dddd11112222121ddd11111ddddcccccccccccccc6666666777777777777777766666668888888888888888888888888888888888cccccccccccccccc666666
        666666666666666666666688888dddd1111ddd11d2dd2212d1111dddddddcc22222ccccccccc666666666666666666666666668888888888888888888888888888888888cccccccccccccccccccc6666
        6666666666666666666688888111111ddddddddd12211222dddddd111111cc222222cccccccccc66666666666666666666668888888888888888888888888888888888cccccccccccccccccccccccc66
        c6666666666666666888888881111111111dddd1112111222d111111111bbc22222cccccccccccccc6666666666666666888888888888888888888888888888888888ccccccccccccccccccccccccccc
        cccccbbbb888888888888888888111111dddddddd121dddd22221112222222c222cccccccccccccccccccbbbb8888888888888888888888888888888888888888888cccccccccccccccccccccccccccc
        ccccccbbb88888888888888888888888dd8d11dddd2dddd1122d222dbbccccc22cccccccccccccccccccccbbb888888888888888888888888888888888888888888ccccccccccccccccccccccccccccc
        cccccccb8888888888888888888ddddd881111d1112ddd1111122bccccbbcccccccbbbbbcccccccccccccccb8888888888888888888888888888888888888888888ccccccccccccccccbbbbbcccccccc
        cccccccb88888888888888888bddddd8811111d11112dd81111122bccccbbccccccccbbbbbbbcccccccccccb88888888888888888b666666666888888888888888bccccccccccccccccccbbbbbbbcccc
        ccccccb888888888888888888ddddd8811111dd11111dd8811111222bbbbccc2ccccccbbbbbbbbbbccccccb888888888888888888bb66666666666888888888888bcccccccccccccccccccbbbbbbbbbb
        bbbbcb88888888888888888888bddd811111d6dd1111dd888d111112222ccc2222ccccccbbbbbbbbbbbbcb88888888888888888888b666666666666688888888888bccccccccccccccccccccbbbbbbbb
        bbbbb88888888888866b8888888b66d111dd666d11111d8888dddddccc2222222222ccccccbb888bbbbbb88888888888866b8888888b66666666666666888888888bbcccccccccccccccccccccbb888b
        888888888888888866666688888bb66ddd666666d1111d888888bbccccccccc222ccccccccccb888888888888888888866666688888bb66666666666666888888888bbccccccccccccccccccccccb888
        88888888888888866666666b8888b666666666666d111d8888888bbbcccccccccccccccccbbbb88888888888888888866666666b8888b666666666666668888888888bbbcccccccccccccccccbbbb888
        8888888888888866666666666b88bb666666666666ddd888888888bbbbbbbbbbbbbbbbbbbbbb88888888888888888866666666666b88bb666666666666668888888888bbbbbbbbbbbbbbbbbbbbbb8888
        88888888888886666666666666688b66666666666666877776688888bbbbbbbbbbbbbbbbb888888888888888888886666666666666688b66666666666666877776688888bbbbbbbbbbbbbbbbb8888888
        8888888888888666666666666666666666666666667777777768888888888888888888888888888888888888888886666666666666666666666666666677777777688888888888888888888888888888
`)
//  mosca
game.onUpdate(function on_on_update() {
    timer.throttle("action", 1500, function on_throttle() {
        let mosca = sprites.createProjectileFromSide(img`
                ....................
                            ....................
                            ....................
                            ....................
                            ..11.............11.
                            .1..1...1fff1...1..1
                            .1.1.1.ff1f1ff.1.1.1
                            ..1.1.1ff2f2ff1.1.1.
                            ...1.1.fffffff.1.1..
                            ....111fffffff111...
                            .......fffffff......
                            ........fffff.......
                            ....................
                            ....................
                            ....................
                            ....................
            `, 0, 50)
        mosca.x = randint(0, scene.screenWidth())
        mosca.y = 0
        mosca.setKind(SpriteKind.Enemy)
    })
})
//  escarabajo rinoceronte
game.onUpdate(function on_on_update2() {
    timer.throttle("action", 5000, function on_throttle2() {
        let esc_rino = sprites.createProjectileFromSide(img`
            ..........ffff........ffff..............
            .........feef..........feef.............
            .........fef............fef.............
            .........fef............fef.............
            .........feef..........feef.............
            .........fef....c..c....fef.............
            ..........fef...c..c...fef..............
            ..........fef..c....c..fef..............
            ..........feef.c.dd.c.feef..............
            ..........feffffffffffffef..............
            ...........ffeeeeeeeeeeff...............
            fff.......f2feeeeeeeeeef2f.......fff....
            ..fff....f22feeeeeeeeeef22f....fff......
            ...fef...f22feeeeeeeeeef22f...fef.......
            ....fef...ffeeeeeeeeeeeeff...fef........
            .....ff...feeeeeeeeeeeeeef...ff.........
            .....fef..feeeeeeffeeeeeef..fef.........
            .....fef.feffffffeeffffffef.fef.........
            .....fef.feeeeeeeeeeeeeeeef.fef.........
            ......feffeeeeeeeeeeeeeeeeffef..........
            ......feefeeeeeeeeeeeeeeeefeef..........
            .......feefeeeeeeeeeeeeeefeef...........
            ........ff.feeeeeeeeeeeefeff............
            ..........ffeeeeeeeeeeeeff..............
            ...........ffffffffffffff...............
            .......ffffeeeeeeffeeeeeeffff...........
            ......feefeeeeeeeffeeeeeeefeef..........
            ......feffeeeeeeeffeeeeeeeffef..........
            .....fef.feeeeeeeffeeeeeeef.fef.........
            .....fef.feeeeeeeffeeeeeeef.fef.........
            .....fef.feeeeeeeffeeeeeeef.fef.........
            .....fef.feeeeeeeffeeeeeeef.fef.........
            ....fef...feeeeeeffeeeeeef...fef........
            ....fef.fffeeeeeeffeeeeeefff.fef........
            ...fef.feefeeeeeeffeeeeeefeef.fef.......
            ...ff..feefeeeeeeffeeeeeefeef..ff.......
            ...f...feefeeeeeeffeeeeeefeef...f.......
            ..ff....feefeeeeeffeeeeefeef....ff......
            ..f......fefeeeeeffeeeeefef......f......
            ..f.......fefeeeeffeeeefef.......f......
            .........fef.ffeeffeeff.fef.............
            .........fef...ffffff...fef.............
            .........ff..............ff.............
            .........ff..............ff.............
            .........f................f.............
            ........ff................ff............
            ........f..................f............
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
        `, 0, 0)
        esc_rino.x = randint(0, scene.screenWidth())
        esc_rino.y = 0
        esc_rino.setKind(SpriteKind.Food)
    })
})
