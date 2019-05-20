const {
    DIRECTIONS,
    DIRECTION_NEXT_X,
    DIRECTION_NEXT_Y
} = require('./constants');
const _ = require('lodash');

function solve(maze) {

    const rows = maze.rows;
    const cols = maze.cols;
    const blocks = maze.blocks;
    const start = maze.start;
    const end = maze.end;
    const stack = [];

    let current = getBlock(blocks, start.x, start.y);

    moveTo(stack, current, start.x, start.y);

    while (stack.length > 0) {
        //console.log(`current ${current.x}, ${current.y}`);
        const next = nextMove(blocks, current, rows, cols);

        if (next) {
            //console.log(`moving to ${next.x}, ${next.y}`);
            if (next.x === end.x && next.y === end.y) {
                // found solution
                return stack.map(b => Object.assign({}, { 'x': b.x, 'y': b.y }));
            }
            moveTo(stack, next);
            current = next;
        }
        else {
            //console.log(`backtracking!!`);
            current = stack.pop();
        }
    }
    // no solution
    console.log(`no solution!!!`);
    return null;
}
function nextMove(blocks, current, rows, cols) {

    const dirs = _.shuffle(Reflect.ownKeys(DIRECTIONS));
    for (const dir of dirs) {
        const nextX = current.x + DIRECTION_NEXT_X[dir];
        const nextY = current.y + DIRECTION_NEXT_Y[dir];

        if (((nextX >= 0 && nextX < rows) && (nextY >= 0 && nextY < cols)) &&
            ((current.dir & DIRECTIONS[dir]) === 0) &&
            !blocks[nextX][nextY].visited
        ) {
            return getBlock(blocks, nextX, nextY);
        }
    }
    return null; // not found
}

function getBlock(blocks, x, y) {
    const block = blocks[x][y];
    if (!block.x || !block.y) {
        Object.assign(block, {
            x,
            y
        })
    }
    return block;
}

function moveTo(stack, block) {
    Object.assign(block, {
        visited: true,
    })

    stack.push(block);
}

module.exports = {
    solve
}