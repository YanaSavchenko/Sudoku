import React from 'react';

import actions     from '../actions';
import { connect } from 'react-redux';

import GridPage from '../components/pages/GridPage.jsx';

class GridPageContainer extends React.Component {
    render() {
        const grid = this.props.grid;

        return (
            <div className='GridPageContainer'>
                <GridPage
                    grid         = {grid.array}
                    status       = {grid.status}
                    errors       = {grid.errors}

                    onInputValue = {this.props.inputValue.bind(this)}
                    onClear      = {this.props.clear.bind(this)}
                    onUndo       = {this.props.undo.bind(this)}
                    onSolve      = {this.props.solve.bind(this)}
                    onCheck      = {this.props.check.bind(this)}
                    onGenerate   = {this.props.generate.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        grid: {
            array:  state.grid,
            status: state.status,
            errors: state.errors
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputValue: (row, col, value) => {
            dispatch(actions.grid.inputValue(row, col, value));
        },

        clear: () => {
            dispatch(actions.grid.clear());
        },

        undo: () => {
            dispatch(actions.grid.undo());
        },

        solve: () => {
            dispatch(actions.grid.solve());
        },

        check: () => {
            dispatch(actions.grid.check());
        },

        generate: () => {
            dispatch(actions.grid.generate());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridPageContainer);
