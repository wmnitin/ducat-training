import React from 'react';
import Category from '../Category/Category.js';
import Location from '../Location/Location.js';
import Restaurants from '../Restaurants/Restaurants.js';

// import style from './Homepage.module.scss';

export default class Homepage extends React.PureComponent {
  render() {
    return <div>
      Search<br />
      <Category />
      <Location />
      <Restaurants />
    </div>
  }
}
