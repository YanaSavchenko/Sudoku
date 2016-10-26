import 'babel-polyfill';

import $        from 'jquery';
import ReactDOM from 'react-dom';
import React    from 'react';

window.React = React;
window.$     = window.jQuery = $;

import { Router, hashHistory } from 'react-router';
import routes   from './routes.jsx';

import thunk                             from 'redux-thunk';
import { Provider }                      from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import reducer                           from './reducers';

$(document).ready(function() {
    const store = createStore(
        reducer,
        applyMiddleware(thunk)
    );

    ReactDOM.render(
        <Provider store={store}>
            <Router
                createElement = {(Component, props) => <Component {...props} />}
                routes        = {routes}
                history       = {hashHistory} />
        </Provider>,
        document.getElementById('content')
    );
});
