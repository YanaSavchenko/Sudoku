import _  from 'lodash';

import ec         from '../eventConstants';
import sudokuUtil from '../utils/sudokuUtil.js';

const MAX_HISTORY_LENGTH = 2;

let initialSudoku = sudokuUtil.generate();

const initialState = {
    grid: initialSudoku.grid,

    status: {
        isSolved:    false,
        isEdited:    false,
        // flag for GridBox that state should be updated
        isGenerated: true,
        isCustom:    false
    },

    solution: initialSudoku.solution,
    errors:   [],
    history:  []
};

/*eslint-disable */
export default function grid( state = initialState, action) {
    switch (action.type) {
        case ec.GRID_INPUT_VALUE:  return inputValue(state, action.data);
        case ec.GRID_CLEAR:        return clear(state);
        case ec.GRID_UNDO:         return undo(state);
        case ec.GRID_SOLVE:        return solve(state);
        case ec.GRID_CHECK:        return check(state);
        case ec.GRID_GENERATE:     return generate();
        case ec.GRID_STOP_EDITING: return stopEditing();
        case ec.GRID_HELP:         return help();

        default: return state;
    }
}
/*eslint-enable */

function inputValue(state, data) {
    const updatedState = _.cloneDeep(state);

    _updateHistory(updatedState);

    updatedState.grid[data.row][data.col] = data.value;
    updatedState.status.isEdited = true;
    updatedState.status.isGenerated = false;

    _.remove(updatedState.errors, errorIndex => {
        return ( ( errorIndex[0] === data.row ) && ( errorIndex[1] === data.col ) );
    });

    return updatedState;
}

function clear(state) {
    const updatedState = _.cloneDeep(state);

    updatedState.grid = updatedState.status.isCustom ? sudokuUtil.getEmptyGrid() : initialSudoku.grid;
    updatedState.solution = updatedState.status.isCustom ? sudokuUtil.getEmptyGrid() : initialSudoku.solution;
    updatedState.status.isSolved = false;
    updatedState.status.isGenerated = false;

    return _.cloneDeep(updatedState);
}

function undo(state) {
    if ( state.history.length ) {
        return _.cloneDeep(state.history[state.history.length - 1]);
    }

    return state;
}

function solve(state) {
    const updatedState = _.cloneDeep(state);

    _updateHistory(updatedState);

    if ( !updatedState.solution ) {
        const originalGrid = updatedState.status.isCustom ?
            _.cloneDeep(updatedState.grid) :
            _.cloneDeep(initialState.grid);

        sudokuUtil.getSolution(originalGrid);

        updatedState.grid = originalGrid;
        updatedState.solution = originalGrid;
    } else {
        updatedState.grid = updatedState.solution;
    }

    updatedState.status.isSolved = true;
    updatedState.status.isEdited = true;
    updatedState.status.isGenerated = false;
    updatedState.errors = [];
    return updatedState;
}

function check(state) {
    const updatedState = _.cloneDeep(state);

    if ( !updatedState.solution ) {
        const originalGrid = _.cloneDeep(initialState.grid);

        sudokuUtil.getSolution(originalGrid);
        updatedState.solution = originalGrid;
    }

    updatedState.errors = sudokuUtil.checkSolution(updatedState.grid, updatedState.solution);

    return updatedState;
}

function generate() {
    const updatedState = _.cloneDeep(initialState);
    initialSudoku = sudokuUtil.generate();

    updatedState.grid               = initialSudoku.grid;
    updatedState.solution           = initialSudoku.solution;
    updatedState.status.isGenerated = true;

    return updatedState;
}

function stopEditing() {
    const updatedState = _.cloneDeep(initialState);

    updatedState.grid     = initialSudoku.grid;
    updatedState.solution = initialSudoku.solution;

    return updatedState;
}

function help() {
    const updatedState = _.cloneDeep(initialState);

    updatedState.status.isCustom = true;
    updatedState.grid     = sudokuUtil.getEmptyGrid();
    updatedState.solution = null;

    return updatedState;
}

function _updateHistory(updatedState) {
    if ( updatedState.history.length >= MAX_HISTORY_LENGTH ) {
        updatedState.history.splice(0, 1);
    }

    updatedState.history.push( _.cloneDeep(updatedState) );
}
