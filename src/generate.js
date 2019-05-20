const generator = require('@narainmittal/maze-generator');

function generate (rows, cols){
    return generator.generateMaze(rows, cols);
}

module.exports = {
    generate
}