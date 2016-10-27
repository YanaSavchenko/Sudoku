const SQUARE_SIZE = 3;

// using Backtracking algorithm
function getSolution(grid, rowIndex = 0, colIndex = 0) {
    if ( !_isInRange(rowIndex) || !_isInRange(colIndex) ) {
        throw 'WRONG_GRID_SIZE';
    }

    if ( !grid[rowIndex][colIndex] ) {
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
    }

    if ( grid[rowIndex][colIndex] ) {
        return _goNextBox(grid, rowIndex, colIndex);
    }

    // if sudoku is unsolvable, leave box empty
    grid[rowIndex][colIndex] = 0;

    return false;
}

function _isInRange(index) {
    return ( ( index >= 0 ) && ( index <= 8 ) );
}

function _isInRow(row, value) {
    return ( row.indexOf(value) > -1 );
}

function _isInCol(grid, colIndex, value) {
    const col = grid.map( row => row[colIndex] );

    return ( col.indexOf(value) > -1 );
}

function _isInSquare(grid, rowIndex, colIndex, value) {
    const rowIndexs = _getSquareIndexes(rowIndex);
    const colIndexs = _getSquareIndexes(colIndex);

    for ( let i = 0; i < rowIndexs.lenght; i++ ) {
        if ( grid[rowIndexs[i]][colIndexs[i]] === value ) {
            return true;
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
    getSolution
};
