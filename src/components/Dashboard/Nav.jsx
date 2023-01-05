import React from 'react'
import './Dashboard.scss';
import logo from '../../asset/logo.png';

const Nav = ({nav1, nav2, nav3}) => {
  return (
    <nav className='navbar'>
    <div className="navbar__logo">
<figure className="navbar__figure">
  <img src={logo} alt="" className="navbar__img" />
  <figcaption className='navbar__figcaption'>Regalo!</figcaption>
</figure>
    </div>
    <ul className="navbar__list">
      <li className="navbar__item"><a href="#" className="navbar__link">{nav1}</a></li>
      <li className="navbar__item"><a href="#" className="navbar__link">{nav2}</a></li>
      <li className="navbar__item"><a href="#" className="navbar__link">{nav3}</a></li>

    </ul>
    </nav>
  )
}

export default Nav