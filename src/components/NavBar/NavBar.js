import React from 'react';
import s from './NavBar.module.scss'

import { Link } from 'react-router-dom'

export default class NavBar extends React.PureComponent {
  render() {
    return <menu className={s.navBarCont}>
      <ul >
        <Link to='/about'>About Us</Link>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>
    </menu>
  }
}