function random () {
    return randint(0, 4)
}
input.onButtonPressed(Button.A, function () {
    if (Ship > 0) {
        led.toggle(Ship, 4)
        Ship = Ship - 1
        led.toggle(Ship, 4)
    }
})
function Randomtime () {
    return randint(10, 100) * 10
}
input.onButtonPressed(Button.B, function () {
    if (Ship < 4) {
        led.toggle(Ship, 4)
        Ship = Ship + 1
        led.toggle(Ship, 4)
    }
})
let Ast3 = 0
let Ast2 = 0
let Score = 0
let ast = 0
let Ran2 = 0
let Ran3 = 0
let Ran = 0
let Bool = 0
let Ship = 0
Ship = 0
led.toggle(0, 4)
let Speed = 1000
basic.forever(function () {
    if (Bool == 0) {
        if (Ran == Ran3 || Ran == Ran2) {
            Ran = random()
        } else {
            for (let index = 0; index <= 4; index++) {
                ast = Ran
                led.toggle(ast, index)
                basic.pause(Speed)
                led.toggle(ast, index)
                if (index == 4) {
                    if (ast == Ship) {
                        Bool = 1
                        break;
                    }
                }
            }
            Score = Score + 1
            Ran = random()
            basic.pause(Randomtime())
        }
    }
})
basic.forever(function () {
    if (Bool == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("Fail")
    }
    if (Speed > 100) {
        if (Score == 6) {
            Score = 0
            Speed = Speed - 100
        }
    }
})
basic.forever(function () {
    if (Bool == 0) {
        if (Ran2 == Ran3 || Ran == Ran2) {
            Ran2 = random()
        } else {
            for (let Index2 = 0; Index2 <= 4; Index2++) {
                Ast2 = Ran2
                led.toggle(Ast2, Index2)
                basic.pause(Speed)
                led.toggle(Ast2, Index2)
                if (Index2 == 4) {
                    if (Ast2 == Ship) {
                        Bool = 1
                        break;
                    }
                }
            }
            Score = Score + 1
            Ran2 = random()
            basic.pause(Randomtime())
        }
    }
})
basic.forever(function () {
    if (Bool == 0) {
        if (Ran2 == Ran3 || Ran == Ran3) {
            Ran3 = random()
        } else {
            for (let Index3 = 0; Index3 <= 4; Index3++) {
                Ast3 = Ran3
                led.toggle(Ast3, Index3)
                basic.pause(Speed)
                led.toggle(Ast3, Index3)
                if (Index3 == 4) {
                    if (Ast3 == Ship) {
                        Bool = 1
                        break;
                    }
                }
            }
            Score = Score + 1
            Ran3 = random()
            basic.pause(Randomtime())
        }
    }
})
