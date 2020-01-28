import React from 'react';
import style from './Location.module.scss';
import httpFetch from '../../utils/http';
import { config } from '../../utils/config';

export default class Location extends React.PureComponent {

  state = {
    latitude: null,
    longitude: null,
    location_suggestions: null,
    searchVal: '',
    entity_id: null
  }

  userCordinates = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }

  locationChanged = (event) => {
    this.setState({
      searchVal: event.target.value
    })

    httpFetch(config.search_location_api + '?query=' + event.target.value + '&lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&count=10', {
      headers: {
        'user-key': config["user-key"]
      }
    }).then(res => {
      this.setState({
        location_suggestions: res.location_suggestions
      })
    }).catch(err => {
      console.log(err)
    })

  }

  listClicked = (entity_id, title) => {
    this.setState({
      searchVal: title,
      location_suggestions: null,
      entity_id: entity_id
    })
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.userCordinates);
    }
  }

  render() {
    return (

      <div className={style.locationContainer}>
        <input
          value={this.state.searchVal}
          placeholder='Enter Location'
          onChange={this.locationChanged}
        />
        <ul>
          {
            this.state.location_suggestions && this.state.location_suggestions.map(data => {
              return <li onClick={this.listClicked.bind(this, data.entity_id, data.title)}>{data.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}