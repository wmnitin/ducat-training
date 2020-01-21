import React from 'react';
import c from './Box.module.scss'

export default class Box extends React.PureComponent {
    render() {
        return <div className={c.demo}>
            <img src={this.props.item.thumbnailUrl} alt='' />
        </div>
    }
}
