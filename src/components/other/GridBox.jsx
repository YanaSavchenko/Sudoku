import React from 'react';
import _     from 'lodash';

import './GridBox.less';

export default class GridBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFixed: props.value
        };
    }

    componentWillReceiveProps(nextProps) {
        if ( nextProps.isGenerated ) {
            this.setState({
                isFixed: nextProps.value
            });
        }
    }

    handleChange(e) {
        const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const isEmpty = e.target.value === '';
        const value = isEmpty ? 0 : parseInt(e.target.value, 10);

        if ( range.indexOf(value) > -1 || isEmpty ) {
            this.props.onInputValue(this.props.row, this.props.col, value);
        }
    }

    render() {
        const {
            row,
            col,
            isSolved,
            value,
            errors
        } = this.props;

        let hasError;

        errors.forEach( errorIndex => {
            if ( _.isEqual(errorIndex, [row, col]) ) {
                hasError = true;
            }
        });

        const borderValue = '1px solid';

        const style = {
            borderRight:     ( !this._isEdge(col) && this._isThird(col) ) ? borderValue : '0px',
            borderBottom:    ( !this._isEdge(row) && this._isThird(row) ) ? borderValue : '0px',
            fontWeight:      this.state.isFixed ? 'bold' : '',
            backgroundColor: this.state.isFixed ? '#8ebfe8' : ''
        };

        if ( hasError ) {
            style.background = 'repeating-linear-gradient(45deg, white, white 5px, #ff7474 10px, #ff7474 10px)';
        }

        return (
            <td className='GridBox'>
                <input
                    style    = {style}
                    type     = 'number'
                    disabled = {this.state.isFixed || isSolved}
                    value    = {value || ''}
                    onChange = {this.handleChange.bind(this)} />
            </td>
        );
    }

    _isThird(value) {
        return !( ( value + 1 ) % 3 );
    }

    _isEdge(value) {
        return ( ( value + 1 ) === 9);
    }
}
