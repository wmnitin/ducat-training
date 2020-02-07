import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Routes from './router/Routes';

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
