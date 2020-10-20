input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "\"intruder\"") {
        basic.showIcon(IconNames.StickFigure)
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
radio.setGroup(34)
