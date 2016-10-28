import React from 'react';

import StartPage from '../components/pages/StartPage.jsx';

export default class StartPageContainer extends React.Component {
    redirect(url) {
        this.context.router.push(url);
    }

    render() {
        return (
            <div className='StartPageContainer'>
                <StartPage
                    onStart = {this.redirect.bind(this, '/game')}
                    onHelp  = {this.redirect.bind(this, '/help')} />
            </div>
        );
    }
}

StartPageContainer.contextTypes = {
    router: React.PropTypes.object
};
