function start () {
    Pac_Man = game.createSprite(0, 0)
    Ghost = game.createSprite(2, 2)
    Score = 0
    if (input.acceleration(Dimension.X) > 200) {
        Pac_Man.change(LedSpriteProperty.X, 1)
    } else if (input.acceleration(Dimension.X) < -200) {
    	
    }
    if (input.acceleration(Dimension.Y) < -200) {
    	
    } else if (input.acceleration(Dimension.Y) > 200) {
    	
    }
}
let Score = 0
let Ghost: game.LedSprite = null
let Pac_Man: game.LedSprite = null
basic.showIcon(IconNames.Ghost)
basic.clearScreen()
basic.pause(100)
start()
basic.forever(function () {
	
})
