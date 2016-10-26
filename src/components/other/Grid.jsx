import React from 'react';

import GridBox from './GridBox.jsx';

import './Grid.less';

export default class Grid extends React.Component {
    renderRow( values, index ) {
        return (
            <tr key={index}>
                {values.map(this.renderBox.bind(this, index))}
            </tr>
        );
    }

    renderBox(row, value, col) {
        return (
            <GridBox
                key      = {col}
                row      = {row}
                col      = {col}
                value    = {value}
                isSolved = {this.props.isSolved}
                {...this.props} />
        );
    }

    render() {
        const grid = this.props.grid || [];

        return (
            <div className='Grid'>
                <table>
                    <tbody>
                        {grid.map(this.renderRow.bind(this))}
                    </tbody>
                </table>
            </div>
        );
    }
}
