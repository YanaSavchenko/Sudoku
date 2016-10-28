import _  from 'lodash';

const SQUARE_SIZE = 3;
const GRID_SIZE   = 9;
const NUMBERS     = _.range(1, 10);  // array [1-9]
const PERCENT_OF_FIXED_BOXES = 0.32; // % of boxes are known

function generate() {
    let solution = getEmptyGrid();
    let grid     = getEmptyGrid();

    for ( let rowIndex = 0; rowIndex < GRID_SIZE; rowIndex++ ) {
        for ( let colIndex = 0; colIndex < GRID_SIZE; colIndex++ ) {
            const availableValues = _getAvailableValues(solution, rowIndex, colIndex);
            const value = availableValues[ Math.floor( Math.random() * availableValues.length ) ];

            if ( value ) {
                solution[rowIndex][colIndex] = value;

                const isFixed = Math.random() < PERCENT_OF_FIXED_BOXES;

                grid[rowIndex][colIndex] = isFixed ? value : 0;
            } else {
                // should start over. after current for-loop colIndex will be increased
                // so to get first gridBox should set colIndex to -1
                rowIndex = 0;
                colIndex = -1;
                solution = getEmptyGrid();
                grid     = getEmptyGrid();
            }
        }
    }

    return { grid, solution };
}

function getEmptyGrid() {
    const grid = [];

    for ( let row = 0; row < GRID_SIZE; row++ ) {
        grid.push([]);
        for ( let col = 0; col < GRID_SIZE; col++ ) {
            grid[row].push(0);
        }
    }

    return grid;
}

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
    for ( let i = 0; i < NUMBERS.length; i++ ) {
        if (
            !_isInRow(grid[rowIndex], NUMBERS[i]) &&
            !_isInCol(grid, colIndex, NUMBERS[i]) &&
            !_isInSquare(grid, rowIndex, colIndex, NUMBERS[i])
        ) {
            grid[rowIndex][colIndex] = NUMBERS[i];

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
    // using GRID_SIZE - 1 as an edge point because index starts from 0, not 1
    if ( rowIndex < GRID_SIZE - 1 ) {
        return [ rowIndex + 1, colIndex ];
    } else if ( colIndex < GRID_SIZE - 1 ) {
        return [ 0, colIndex + 1 ];
    }

    return [0, 0];
}



function _getAvailableValues( grid, rowIndex, colIndex ) {
    const availableValues = [];

    NUMBERS.forEach( value => {
        if (
            !_isInRow(grid[rowIndex], value) &&
            !_isInCol(grid, colIndex, value) &&
            !_isInSquare(grid, rowIndex, colIndex, value)
        ) {
            availableValues.push(value);
        }
    });

    return availableValues;
}

module.exports = {
    checkSolution,
    getSolution,
    generate,
    getEmptyGrid
};
