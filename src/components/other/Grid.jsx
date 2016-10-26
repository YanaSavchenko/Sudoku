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
        const grid = [
            [8, 0, 0, 4, 0, 6, 0, 0, 7],
            [0, 0, 0, 0, 0, 0, 4, 0, 0],
            [0, 1, 0, 0, 0, 0, 6, 5, 0],
            [5, 0, 9, 0, 3, 0, 7, 8, 0],
            [0, 0, 0, 0, 7, 0, 0, 0, 0],
            [0, 4, 8, 0, 2, 0, 1, 0, 3],
            [0, 5, 2, 0, 0, 0, 0, 9, 0],
            [0, 0, 1, 0, 0, 0, 0, 0, 0],
            [3, 0, 0, 9, 0, 2, 0, 0, 5]
        ];

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
