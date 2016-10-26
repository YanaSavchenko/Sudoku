import ec from '../eventConstants';
import _  from 'lodash';

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
        case ec.GRID_SOLVE:       return solve(state);
        case ec.GRID_UNDO:        return undo(state);
        case ec.GRID_CLEAR:       return clear(state);

        default: return state;
    }
}
/*eslint-enable */

function inputValue(state, data) {
    const updatedState = _.cloneDeep(state);

    updatedState.grid[data.row][data.col] = data.value;
    updatedState.status.isEdited = true;
    updatedState.history.push(updatedState);

    return updatedState;
}
