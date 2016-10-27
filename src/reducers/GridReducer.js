import _  from 'lodash';

import ec         from '../eventConstants';
import sudokuUtil from '../utils/sudokuUtil.js';

const initialState = {
    grid: [
        [8, 0, 0, 4, 0, 6, 0, 0, 7],
        [0, 0, 0, 0, 0, 0, 4, 0, 0],
        [0, 1, 0, 0, 0, 0, 6, 5, 0],
        [5, 0, 9, 0, 3, 0, 7, 8, 0],
        [0, 0, 0, 0, 7, 0, 0, 0, 0],
        [0, 4, 8, 0, 2, 0, 1, 0, 3],
        [0, 5, 2, 0, 0, 0, 0, 9, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0],
        [3, 0, 0, 9, 0, 2, 0, 0, 5]
    ],

    status: {
        isSolved: false,
        isEdited: false
    },

    history: []
};

/*eslint-disable */
export default function grid( state = initialState, action) {
    switch (action.type) {
        case ec.GRID_INPUT_VALUE: return inputValue(state, action.data);
        case ec.GRID_CLEAR:       return clear();
        case ec.GRID_UNDO:        return undo(state);
        case ec.GRID_SOLVE:       return solve(state);

        default: return state;
    }
}
/*eslint-enable */

function inputValue(state, data) {
    const updatedState = _.cloneDeep(state);

    updatedState.history.push(_.cloneDeep(updatedState));

    updatedState.grid[data.row][data.col] = data.value;
    updatedState.status.isEdited = true;

    return updatedState;
}

function clear() {
    return _.cloneDeep(initialState);
}

function undo(state) {
    if ( state.status.isEdited ) {
        return _.cloneDeep(state.history[state.history.length - 1]);
    }

    return state;
}

function solve(state) {
    const updatedState = _.cloneDeep(state);
    const originalGrid = _.cloneDeep(initialState.grid);

    sudokuUtil.getSolution(originalGrid);

    updatedState.grid = originalGrid;
    updatedState.status.isEdited = false;
    updatedState.status.isSolved = true;
    updatedState.history = [];

    return updatedState;
}
