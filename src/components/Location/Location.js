import React from 'react';
import style from './Location.module.scss';

export default class Location extends React.PureComponent {
  userCordinates = (position) => {
    this.props.changeLatLong(position.coords.latitude, position.coords.longitude)
  }

  locationChanged = (event) => {
    this.props.changeLocationValue(event.target.value)
    this.props.makeLocationAjax(event.target.value, this.props.latitude, this.props.longitude);
  }
  
  listClicked = (entity_id, title) => {
    this.props.locationSelected(entity_id, title)
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
          value={this.props.searchVal}
          placeholder='Enter Location'
          onChange={this.locationChanged}
        />
        <ul>
          {
            this.props.location_suggestions && this.props.location_suggestions.map(data => {
              return <li onClick={this.listClicked.bind(this, data.entity_id, data.title)}>{data.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}