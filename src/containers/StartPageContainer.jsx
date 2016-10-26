import React from 'react';

import StartPage from '../components/pages/StartPage.jsx';

export default class StartPageContainer extends React.Component {
    start() {
        this.context.router.push('/game');
    }

    render() {
        return (
            <div className='StartPageContainer'>
                <StartPage
                    onStart = {this.start.bind(this)} />
            </div>
        );
    }
}

StartPageContainer.contextTypes = {
    router: React.PropTypes.object
};
