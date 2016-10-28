import React from 'react';

import GridButtons from '../inputs/GridButtons.jsx';
import Grid from '../other/Grid.jsx';

import './GridPage.less';

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
            onCheck,
            onGenerate
        } = this.props;

        return (
            <div className='GridPage'>
                <GridButtons
                    isEdited   = {status.isEdited}
                    onClear    = {onClear}
                    onUndo     = {onUndo}
                    onSolve    = {onSolve}
                    onCheck    = {onCheck}
                    onGenerate = {onGenerate} />

                <Grid
                    grid         = {grid}
                    errors       = {errors}
                    isSolved     = {status.isSolved}
                    isGenerated  = {status.isGenerated}
                    onInputValue = {onInputValue} />
            </div>
        );
    }
}
