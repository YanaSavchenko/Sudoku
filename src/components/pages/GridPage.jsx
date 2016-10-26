import React from 'react';

import GridButtons from '../inputs/GridButtons.jsx';
import Grid        from '../other/Grid.jsx';

export default class GridPage extends React.Component {
    render() {
        const {
            grid,
            status,

            onInputValue,
            onClear,
            onUndo
        } = this.props;

        return (
            <div className='GridPage'>
                <GridButtons
                    onClear = {onClear}
                    onUndo  = {onUndo} />

                <Grid
                    grid         = {grid}
                    isSolved     = {status.isSolved}
                    onInputValue = {onInputValue} />
            </div>
        );
    }
}
