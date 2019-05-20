const Constants = Object.freeze({
    AISLE: 0,
    WALL: 1,
    DIRECTIONS: {
        UP: 1,
        DOWN: 2,
        LEFT: 4,
        RIGHT: 8
    },
    DIRECTION_NEXT_X: {
        UP: -1,
        DOWN: 1,
        LEFT: 0,
        RIGHT: 0
    },
    DIRECTION_NEXT_Y: {
        UP: 0,
        DOWN: 0,
        LEFT: -1,
        RIGHT: 1
    },
    DIRECTION_OPP: {
        UP: 'DOWN',
        DOWN: 'UP',
        LEFT: 'RIGHT',
        RIGHT: 'LEFT'
    }
});

module.exports = Constants;