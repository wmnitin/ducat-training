import React from 'react';
import style from './Category.module.scss';

export default class Category extends React.PureComponent {

  state = {
    list: null,
    error: false
  }

  componentDidMount() {
    // debugger
    // this.props.makeCategoryRequest()
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
