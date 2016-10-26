import React from 'react';

import './MainLayout.less';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className='MainLayout'>
                <div className='mainPage'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
