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
                    onInputValue = {this.props.inputValue.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        grid: {
            array:   state.grid,
            history: state.history,
            status:  state.status
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputValue: (row, col, value) => {
            dispatch(actions.grid.inputValue(row, col, value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridPageContainer);
