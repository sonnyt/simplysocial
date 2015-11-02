import React from 'react';
import { render, findDOMNode } from 'react-dom'
import { createHistory } from 'history'
import { Router, History, Route, IndexRedirect, IndexRoute, Link } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// Load modules
import App from './core/components/app';

import Feed from './feed/components/feed';
import FeedPage from './feed/components/page';
import posts from './feed/reducers/post';

import SettingsPage from './user/components/settings';

// Set initial history
const history = createHistory({ queryKey: false });
const store = createStore(combineReducers({ posts }));

// Render
render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRedirect to="feed/all" />
                <Route path="feed" component={Feed} store={store}>
                    <IndexRedirect to="all" />
                    <Route path="all" component={FeedPage} />
                    <Route path="photos" component={FeedPage} layout="masonry" format="photo" />
                </Route>
                <Route path="settings" component={SettingsPage} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
