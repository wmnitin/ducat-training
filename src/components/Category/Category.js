import React from 'react';
import style from './Category.module.scss';
import httpFetch from '../../utils/http';
import {config} from '../../utils/config';
export default class Category extends React.PureComponent {

  state = {
    list: null,
    error: false
  }

  componentDidMount() {
    httpFetch(config.category_api, {
      headers: {
        "user-key": config["user-key"]
      },
      method: 'GET'
    }).then(response => {
      this.setState({
        list: response
      })
    }).catch(err => {
      this.setState({
        error: true
      })
    })
  }

  render() {
    if (this.state.error) {
      return 'No internet or API failure'
    }
    if (!this.state.list) {
      return 'Loading...'
    }
    return <div>
      <ul className={style.ul}>
        {this.state.list.categories.map((data, index) => {
          return <li key={index}>{data.categories.name}</li>
        })}
      </ul>
    </div>
  }
}
