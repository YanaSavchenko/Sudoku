import React from 'react';

import GridButtons from '../inputs/GridButtons.jsx';
import Grid from '../other/Grid.jsx';

export default class GridPage extends React.Component {
    render() {
        const {
            grid,
            status,
            errors,

            onInputValue,
            onClear,
            onUndo,
            onSolve,
            onCheck
        } = this.props;

        return (
            <div className='GridPage'>
                <GridButtons
                    onClear = {onClear}
                    onUndo  = {onUndo}
                    onSolve = {onSolve}
                    onCheck = {onCheck} />

                <Grid
                    grid         = {grid}
                    errors       = {errors}
                    isSolved     = {status.isSolved}
                    onInputValue = {onInputValue} />
            </div>
        );
    }
}
