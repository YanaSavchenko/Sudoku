import ec from '../eventConstants';

export default {
    inputValue(row, col, value) {
        return {
            type: ec.GRID_INPUT_VALUE,
            data: {
                row,
                col,
                value
            }
        };
    }
};
