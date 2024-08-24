input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
let soil_moisture = 0
let difference = 0
let sec2 = 0
let sec = Math.round(control.millis() / 1000)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    sec2 = Math.round(control.millis() / 1000)
    difference = sec2 - sec
    soil_moisture = pins.analogReadPin(AnalogPin.P2)
    if (difference >= 86400) {
        sec = sec2
        basic.showString("time=" + difference + " moisture=" + soil_moisture)
        pins.digitalWritePin(DigitalPin.P0, 1)
        if (soil_moisture > 840) {
            basic.pause(30000)
        } else if (soil_moisture > 490) {
            basic.pause(90000)
        } else {
            basic.pause(150000)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        basic.showString("time=" + difference + " moisture=" + soil_moisture)
    }
    basic.pause(200)
})
