import React from 'react';
import httpFetch from '../../utils/http';
import { config } from '../../utils/config';
import style from './Restaurants.module.scss';

export default class Restaurants extends React.PureComponent {

  componentDidUpdate(prevProps, prevState) {
    if (this.props.entity_id !== prevProps.entity_id) {
      httpFetch(config.restaurant_list_api + '?entity_id=' + this.props.entity_id + '&entity_type=' + this.props.entity_type + '&lat=' + this.props.lat + '&lon=' + this.props.long, {
        headers: {
          'user-key': config["user-key"]
        },
        method: 'GET'
      }).then(respo => {
        this.props.getReataurantData(respo.restaurants);
      })
    }
  }

  render() {
    return (
      <div className={style.restContainer} >
        {
          this.props.restaurantList && this.props.restaurantList.map((item, i) => {
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