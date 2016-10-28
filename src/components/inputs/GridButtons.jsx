import React    from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class GridButtons extends React.Component {
    render() {
        const {
            isEdited,

            onClear,
            onUndo,
            onSolve,
            onCheck,
            onGenerate
        } = this.props;

        return (
            <div className='GridButtons'>
                <ButtonToolbar className='buttons'>
                    <Button
                        className = 'undoButton'
                        bsStyle   = 'primary'
                        onClick   = {onUndo}
                        disabled  = {!isEdited}>
                            Undo
                    </Button>

                    <Button
                        className = 'clearButton'
                        bsStyle   = 'primary'
                        onClick   = {onClear}
                        disabled  = {!isEdited}>
                            Clear
                    </Button>

                    <Button
                        className = 'checkButton'
                        bsStyle   = 'primary'
                        onClick   = {onCheck}
                        disabled  = {!isEdited}>
                            Check
                    </Button>

                    <Button
                        className = 'solveButton'
                        bsStyle   = 'primary'
                        onClick   = {onSolve}>
                            Solve
                    </Button>

                    <Button
                        className = 'newGrid'
                        bsStyle   = 'primary'
                        onClick   = {onGenerate}>
                            New
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}
