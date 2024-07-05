import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Router from './Routing';

export default class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return <Provider store={store}>
            <Router />
        </Provider>;
    }
};