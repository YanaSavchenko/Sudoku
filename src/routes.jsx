import React from 'react';
import { Route, Redirect } from 'react-router';

import App                from './App.jsx';
import MainLayout         from './components/layouts/MainLayout.jsx';
import StartPageContainer from './containers/StartPageContainer.jsx';
import GridPageContainer  from './containers/GridPageContainer.jsx';

export default (
    <Route component={App}>
        <Redirect from='/' to='/start' />

        <Route path='/' component={MainLayout}>
            <Route path='start' component={StartPageContainer} />
            <Route path='game'  component={GridPageContainer} />
            <Route path='help'  component={GridPageContainer} />
        </Route>
    </Route>
);
