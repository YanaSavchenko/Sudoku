const SQUARE_SIZE = 3;

function checkSolution(userGrid, solution) {
    const wrongValues = [];

    for ( let row = 0; row < userGrid.length; row++ ) {
        for ( let col = 0; col < userGrid[0].length; col++ ) {
            if ( userGrid[row][col] && ( userGrid[row][col] !== solution[row][col] ) ) {
                wrongValues.push([row, col]);
            }
        }
    }

    return wrongValues;
}

// using Backtracking algorithm
function getSolution(grid, rowIndex = 0, colIndex = 0) {
    if ( grid[rowIndex][colIndex] ) {
        return _goNextBox(grid, rowIndex, colIndex);
    }

    for ( let i = 1; i < 10; i++ ) {
        if (
            !_isInRow(grid[rowIndex], i) &&
            !_isInCol(grid, colIndex, i) &&
            !_isInSquare(grid, rowIndex, colIndex, i)
        ) {
            grid[rowIndex][colIndex] = i;

            if ( _goNextBox(grid, rowIndex, colIndex) ) {
                return true;
            }
        }
    }

    // if sudoku is unsolvable, leave box empty
    grid[rowIndex][colIndex] = 0;

    return false;
}

function _isInRow(row, value) {
    return ( row.indexOf(value) > -1 );
}

function _isInCol(grid, colIndex, value) {
    const col = grid.map( row => row[colIndex] );

    return ( col.indexOf(value) > -1 );
}

function _isInSquare(grid, rowIndex, colIndex, value) {
    const rowIndexes = _getSquareIndexes(rowIndex);
    const colIndexes = _getSquareIndexes(colIndex);

    for ( let row = 0; row < rowIndexes.length; row++ ) {
        for ( let col = 0; col < colIndexes.length; col++ ) {
            if ( grid[rowIndexes[row]][colIndexes[col]] === value ) {
                return true;
            }
        }
    }

    return false;
}

function _getSquareIndexes(index) {
    const modulo = (index + 1) % SQUARE_SIZE;

    if ( modulo === 1 ) {
        return [ index, index + 1, index + 2 ];
    } else if ( modulo === 2 ) {
        return [ index - 1, index, index + 1 ];
    }

    return [ index - 2, index - 1, index ];
}

function _goNextBox(grid, rowIndex, colIndex) {
    const [nextRowIndex, nextColIndex] = _getNextBoxIndex(rowIndex, colIndex);

    // if previous box has index [8, 8], we're done
    if ( !nextRowIndex && !nextColIndex ) {
        return true;
    }

    return getSolution( grid, nextRowIndex, nextColIndex );
}

function _getNextBoxIndex(rowIndex, colIndex) {
    if ( rowIndex < 8 ) {
        return [ rowIndex + 1, colIndex ];
    } else if ( colIndex < 8 ) {
        return [ 0, colIndex + 1 ];
    }

    return [0, 0];
}

module.exports = {
    checkSolution,
    getSolution
};
