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
            onGenerate,
            onMenu
        } = this.props;

        return (
            <div className='GridPage'>
                <GridButtons
                    isEdited   = {status.isEdited}
                    isCustom   = {status.isCustom}

                    onClear    = {onClear}
                    onUndo     = {onUndo}
                    onSolve    = {onSolve}
                    onCheck    = {onCheck}
                    onGenerate = {onGenerate}
                    onMenu     = {onMenu} />

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
