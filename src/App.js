import React from 'react'
import Homepage from './components/Homepage/HomepageContainer';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Homepage />
      </Provider>
    )
  }
}
