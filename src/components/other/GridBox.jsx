import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './GridBox.less';

export default class GridBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFixed: props.value
        };
    }

    renderInput() {
        const {
            row,
            col,
            isSolved,
            value
        } = this.props;

        const borderValue = '1px solid';

        const style = {
            borderRight:  ( !this._isEdge(col) && this._isThird(col) ) ? borderValue : '0px',
            borderBottom: ( !this._isEdge(row) && this._isThird(row) ) ? borderValue : '0px',
            fontWeight:   this.state.isFixed ? 'bold' : ''
        };

        return (
            <input
                ref      = 'input'
                style    = {style}
                disabled = {this.state.isFixed || isSolved}
                value    = {value || ''} />
        );
    }

    render() {
        return (
            <td className='GridBox'>
                {
                    this.props.isSolved ?
                        (
                            <ReactCSSTransitionGroup
                                transitionName          = 'solved'
                                transitionAppear
                                transitionEnterTimeout  = {200}
                                transitionLeaveTimeout  = {200}
                                transitionAppearTimeout = {200}>
                                    this.renderInput()
                            </ReactCSSTransitionGroup>
                        )

                        : this.renderInput()
                }
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
