import React from 'react';
import style from './Category.module.scss';

export default class Category extends React.PureComponent {
  componentDidMount() {
    this.props.makeCategoryRequest()
  }

  render() {
    if (!this.props.list) {
      return 'Loading...'
    }
    return <div>
      <ul className={style.ul}>
        {this.props.list.categories.map((data, index) => {
          return <li key={index}>{data.categories.name}</li>
        })}
      </ul>
    </div>
  }
}
