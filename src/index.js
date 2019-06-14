import React, { Component } from 'react';
import { Provider } from 'react-redux'

import { RootStack } from './AppRouteConfig'
import { store } from './redux';

export default class RootComponent extends Component {
      render() {
        return (
            <Provider store={store}>
                <RootStack />
             </Provider>
        )
    };
}
