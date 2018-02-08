import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import store from './reducers';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path="/" exact render={() => <LoginView />} />
          <Route path="/home" exact render={() => <HomeView />} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
