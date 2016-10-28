import React    from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class GridButtons extends React.Component {
    render() {
        const {
            isEdited,
            isCustom,

            onClear,
            onUndo,
            onSolve,
            onCheck,
            onGenerate,
            onMenu
        } = this.props;

        const triggeredButtonStyle = isEdited ? 'primary' : 'default';
        const style = {
            display: isCustom ? 'none' : ''
        };

        return (
            <div className='GridButtons'>
                <ButtonToolbar className='buttons'>
                    <Button
                        className = 'menuButton'
                        bsStyle   = 'primary'
                        onClick   = {onMenu}>
                            Menu
                    </Button>

                    <Button
                        className = 'newGridButton'
                        bsStyle   = 'primary'
                        style     = {style}
                        onClick   = {onGenerate}>
                            New
                    </Button>

                    <Button
                        className = 'solveButton'
                        bsStyle   = 'primary'
                        onClick   = {onSolve}>
                            Solve
                    </Button>

                    <Button
                        className = 'undoButton'
                        bsStyle   = {triggeredButtonStyle}
                        onClick   = {onUndo}
                        disabled  = {!isEdited}>
                            Undo
                    </Button>

                    <Button
                        className = 'clearButton'
                        bsStyle   = {triggeredButtonStyle}
                        onClick   = {onClear}
                        disabled  = {!isEdited}>
                            Clear
                    </Button>

                    <Button
                        className = 'checkButton'
                        bsStyle   = {triggeredButtonStyle}
                        style     = {style}
                        onClick   = {onCheck}
                        disabled  = {!isEdited}>
                            Check
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}
