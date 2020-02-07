import React from 'react';
import Category from '../Category/CategoryContainer';
import Location from '../Location/LocationContainer';
import Restaurants from '../Restaurants/RestaurantsContainer';
import NavBar from '../NavBar/NavBar';

// import style from './Homepage.module.scss';

// import Test from './TestContainer';

export default class Homepage extends React.PureComponent {
  render() {
    return <div>
      <NavBar />
      <Category />
      <Location />
      <Restaurants />
      {/* <Test /> */}
    </div>
  }
}
