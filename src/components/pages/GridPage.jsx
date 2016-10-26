import React from 'react';

import GridButtons from '../inputs/GridButtons.jsx';
import Grid        from '../other/Grid.jsx';

export default class GridPage extends React.Component {
    render() {
        const {
            grid,
            status,

            onInputValue,
            onClear
        } = this.props;

        return (
            <div className='GridPage'>
                <GridButtons
                    onClear = {onClear} />

                <Grid
                    grid         = {grid}
                    isSolved     = {status.isSolved}
                    onInputValue = {onInputValue} />
            </div>
        );
    }
}
