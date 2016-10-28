import React from 'react';

import './ErrorMessage.less';

export default class ErrorMessage extends React.Component {
    render() {
        return (
            <div className='ErrorMessage'>
                <p>
                    {this._getErrorText(this.props.error)}
                </p>
            </div>
        );
    }

    _getErrorText(errorCode) {
        const codes = {
            'UNSOLVABLE': 'This sudoku is unsolvable. Please check your inputs'
        };

        return  codes[errorCode] || 'Oooops, something went wrong. Try to reload page or contact developer';
    }
}
