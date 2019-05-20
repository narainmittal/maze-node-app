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

    moveTo(stack, blocks[start.x][start.y]);

    while (!stack.length) {

        const next = nextMove(blocks, current, rows, cols);

        if (next) {
            if (next.x === end.x && next.y === end.y) {
                // found solution
                return stack;
            }
            moveTo(stack, next);
            current = next;
            break;

        }
        else {
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
            !((current.dir & DIRECTIONS[dir]) !== 0) &&
            !blocks[nextX][nextY].visited
        ) {
            return blocks[nextX][nextY];
        }
    }
    return null; // not found
}

function moveTo(stack, block) {
    // Object.assign(block, {
    //     visited: true
    // })
    block['visited'] = true;
    stack.push(block);
}

module.exports = {
    solve
}