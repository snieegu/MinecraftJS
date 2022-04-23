let toweHeight = 0
let wallHeight = 0
function createWall2 (lenght: number, rot: number, height: number) {
    builder.mark()
    builder.shift(lenght, 0, rot)
    builder.raiseWall(PLANKS_JUNGLE, height)
}
function createWall (lenght: number, rot: number, height: number) {
    builder.mark()
    builder.shift(lenght, 0, rot)
    builder.raiseWall(ANDESITE, height)
}
function createTower (size: number, hight: number) {
    builder.mark()
    for (let index = 0; index < 4; index++) {
        builder.move(FORWARD, size)
        builder.turn(LEFT_TURN)
    }
    builder.raiseWall(DIORITE, hight)
    builder.mark()
}
player.onChat("castle2", function () {
    builder.teleportTo(pos(0, 0, 20))
    toweHeight = 10
    wallHeight = 3
    createWall(20, 0, wallHeight)
    createWall(0, 20, wallHeight)
    createWall(-20, 0, wallHeight)
    createWall(0, -20, wallHeight)
    builder.move(UP, 3)
    createWall2(20, 0, wallHeight)
    createWall2(0, 20, wallHeight)
    createWall2(-20, 0, wallHeight)
    createWall2(0, -20, wallHeight)
    builder.move(DOWN, 3)
    createTower(4, 8)
    builder.move(FORWARD, 16)
    createTower(4, 8)
    builder.turn(LEFT_TURN)
    builder.move(FORWARD, 16)
    builder.move(LEFT, -4)
    createTower(4, 8)
    builder.move(LEFT, 16)
    createTower(4, 8)
    builder.move(LEFT, -4)
    builder.move(BACK, -4)
    builder.mark()
    builder.move(LEFT, -3)
    builder.raiseWall(IRON_BARS, 3)
    builder.move(LEFT, -1)
    builder.mark()
    builder.move(UP, 3)
    builder.move(RIGHT, -4)
    builder.move(DOWN, 3)
    builder.raiseWall(PLANKS_OAK, 1)
    builder.move(FORWARD, 1)
    builder.move(DOWN, 1)
    builder.mark()
    builder.move(LEFT, 9)
    builder.turn(LEFT_TURN)
    builder.move(LEFT, 22)
    builder.turn(LEFT_TURN)
    builder.move(LEFT, 22)
    builder.turn(LEFT_TURN)
    builder.move(LEFT, 22)
    builder.turn(LEFT_TURN)
    builder.move(LEFT, 12)
    builder.raiseWall(WATER, 1)
})
