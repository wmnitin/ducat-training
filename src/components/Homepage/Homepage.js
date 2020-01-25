import React from 'react';
import Category from '../Category/Category.js';

// import style from './Homepage.module.scss';

export default class Homepage extends React.PureComponent {
  render() {
    return <div>
      Search<br/>
      <Category />
      Location<br/>
      Restaurants
    </div>
  }
}
