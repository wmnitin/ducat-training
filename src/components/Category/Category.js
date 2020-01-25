import React from 'react';
import style from './Category.module.scss';

export default class Category extends React.PureComponent {

  state = {
    list: null,
    error: false
  }

  componentDidMount() {
    fetch('https://developers.zomato.com/api/v2.1/categories', {
      headers: {
        "user-key": '63af153e3429d4f2cd2c4dae8aa13e64'
      },
      method: 'GET'
    }).then(response => response.json()).then(response => {
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
