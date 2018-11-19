document.addEventListener ('DOMContentLoaded', startGame);

//Board & Cell design
var board;

function createCells() {
    var board = {
        cells: [],
    };

    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            board.cells.push ({
                row: i,
                col: j,
                isMine: Math.floor (Math.random () * 100) >= 85,
                isMarked: false,
                hidden: true,
                surroundingMines: 0,
            });
        }
    }
    return board;
}
