import React from 'react';

import GridButtons from '../inputs/GridButtons.jsx';
import Grid        from '../other/Grid.jsx';

export default class GridPage extends React.Component {
    render() {
        const {
            grid
        } = this.props;

        return (
            <div className='GridPage'>
                <GridButtons />
                <Grid
                    grid         = {grid}
                    onInputValue = {this.props.onInputValue} />
            </div>
        );
    }
}
