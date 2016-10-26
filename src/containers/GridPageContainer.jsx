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

                    onInputValue = {this.props.inputValue.bind(this)}
                    onClear      = {this.props.clear.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        grid: {
            array:  state.grid,
            status: state.status
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridPageContainer);
