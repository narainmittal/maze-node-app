const generator = require('@narainmittal/maze-generator');

async function generate(rows, cols) {
    const maze = await generator.generate(rows, cols);

    return {
        rows: maze.rows,
        cols: maze.cols,
        blocks: maze.blocks
    };
}

module.exports = {
    generate
}