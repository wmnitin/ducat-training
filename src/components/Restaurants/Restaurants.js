import React from 'react';
import httpFetch from '../../utils/http';
import { config } from '../../utils/config';
import style from './Restaurants.module.scss';

export default class Restaurants extends React.PureComponent {

  state = {
    restaurantList: null
  }

  componentDidMount() {
    httpFetch(config.restaurant_list_api + '?entity_id=359', {
      headers: {
        'user-key': config["user-key"]
      },
      method: 'GET'
    }).then(respo => {
      this.setState({
        restaurantList: respo.restaurants
      })
    })
  }

  render() {
    return (
      <div className={style.restContainer} >

        {
          this.state.restaurantList && this.state.restaurantList.map((item,i) => {
            return (
              <div key={i} className={style.restDetail}>
                <img src={item.restaurant.thumb} alt='' />
                <span>{item.restaurant.name}</span>
              </div>
            )
          })
        }

      </div>
    )
  }

}