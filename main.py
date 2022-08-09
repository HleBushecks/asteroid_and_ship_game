def random():
    return randint(0, 4)

def on_button_pressed_a():
    global Ship
    if Ship > 0:
        led.toggle(Ship, 4)
        Ship = Ship - 1
        led.toggle(Ship, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Randomtime():
    return randint(10, 100) * 10

def on_button_pressed_b():
    global Ship
    if Ship < 4:
        led.toggle(Ship, 4)
        Ship = Ship + 1
        led.toggle(Ship, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

Ast3 = 0
Ast2 = 0
Score = 0
ast = 0
Ran3 = 0
Ran2 = 0
Ran = 0
Bool = 0
Ship = 0
Ship = 0
led.toggle(0, 4)
Speed = 1000

def on_forever():
    global ast, Bool, Score, Ran
    while Bool == 0 or Ran != Ran2 or Ran != Ran3:
        for index in range(5):
            ast = Ran
            led.toggle(ast, index)
            basic.pause(Speed)
            led.toggle(ast, index)
            if index == 4:
                if ast == Ship:
                    Bool = 1
                    break
        Score = Score + 1
        Ran = random()
        basic.pause(Randomtime())
    Ran = random()
basic.forever(on_forever)

def on_forever2():
    global Ast2, Bool, Score, Ran2
    while Bool == 0 or Ran2 != Ran or Ran2 != Ran3:
        for Index2 in range(5):
            Ast2 = Ran2
            led.toggle(Ast2, Index2)
            basic.pause(Speed)
            led.toggle(Ast2, Index2)
            if Index2 == 4:
                if Ast2 == Ship:
                    Bool = 1
                    break
        Score = Score + 1
        Ran2 = random()
        basic.pause(Randomtime())
    Ran2 = random()
basic.forever(on_forever2)

def on_forever3():
    global Score, Speed
    if Bool == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_string("Fail")
    if Speed > 100:
        if Score == 6:
            Score = 0
            Speed = Speed - 100
basic.forever(on_forever3)

def on_forever4():
    global Ast3, Bool, Score, Ran3
    while Bool == 0 or Ran3 == Ran2 or Ran == Ran3:
        for Index3 in range(5):
            Ast3 = Ran3
            led.toggle(Ast3, Index3)
            basic.pause(Speed)
            led.toggle(Ast3, Index3)
            if Index3 == 4:
                if Ast3 == Ship:
                    Bool = 1
                    break
        Score = Score + 1
        Ran3 = random()
        basic.pause(Randomtime())
    Ran3 = random()
basic.forever(on_forever4)
