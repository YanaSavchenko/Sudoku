import React    from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class GridButtons extends React.Component {
    render() {
        const {
            onClear
        } = this.props;

        return (
            <div className='GridButtons'>
                <ButtonToolbar className='buttons'>
                    <Button
                        className = 'undoButton'
                        bsStyle   = 'primary'>
                            Undo
                    </Button>

                    <Button
                        className = 'clearButton'
                        bsStyle   = 'primary'
                        onClick   = {onClear}>
                            Clear
                    </Button>

                    <Button
                        className = 'checkButton'
                        bsStyle   = 'primary'>
                            Check
                    </Button>

                    <Button
                        className = 'solveButton'
                        bsStyle   = 'primary'>
                            Solve
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}
