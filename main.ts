radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(Math.map(input.acceleration(Dimension.X), -1023, 1023, -100, 100))
})
