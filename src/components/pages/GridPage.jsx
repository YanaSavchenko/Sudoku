import React from 'react';

import GridButtons from '../inputs/GridButtons.jsx';
import Grid        from '../other/Grid.jsx';

export default class GridPage extends React.Component {
    render() {
        return (
            <div className='GridPage'>
                <GridButtons />
                <Grid />
            </div>
        );
    }
}
