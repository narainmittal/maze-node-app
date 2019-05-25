const generator = require('@narainmittal/maze-generator');

function generate(rows, cols) {
    const maze = generator.generateMaze(rows, cols);

    return {
        rows: maze.rows,
        cols: maze.cols,
        blocks: maze.blocks
    };
}

module.exports = {
    generate
}