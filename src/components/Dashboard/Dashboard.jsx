import React from 'react';
import logo from '../../asset/logo.png';
import './Dashboard.scss';
import { useRef, useEffect } from 'react';
import Card from '../Card/Card'
import Typed from 'typed.js';
import chrismass from '../../asset/chrismass.jpg';
import eid from '../../asset/eid.png';
import hbd from '../../asset/hbd.png';
import lovers from '../../asset/lovers.png';
import mom from '../../asset/mom.jpg';
import Nav from './Nav';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // const type = useRef(null);
  // const typed = useRef(null);
  // useEffect(()=>{
  //   var options = {
  //     strings: ['“Someone I loved once gave me a box full of darkness. It took me years to understand that this too, was a gift.” -Mary Oliver ', '“May it be a light to you in dark places, when all other lights go out.” ― J.R.R. Tolkien, The Fellowship of the Ring ',' “Everyone has a gift for something, even if it is the gift of being a good friend.” ― Marian Anderson ',' “A friend is a gift you give yourself.” ― Robert Louis Stevenson '],
  //     typeSpeed: 150,
  //     backSpeed: 150,
  //     loop: true,
  //     loopCount: Infinity,
  //     showCursor: false,
  //   };
     
  // typed.current = new Typed(type.current, options);
  //  return () => {
  //     // Make sure to destroy Typed instance during cleanup
  //     // to prevent memory leaks
  //     typed.current.destroy();
  //   }

  // },[])
 
  const navigate = useNavigate();

  return (
    <>
   
  <Nav nav1={'About'} nav2={'Services'} nav3={'Contact us'}/>
    <header className='header'>
  <div className="header__left">
      <img src={mom} alt="" className='header__img header__img--1' />
    

  </div>
  <div className="header__right">
 
    <h2 className="header__heading">Regalo! for your Beloved ones</h2>
    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt aperiam tempore deserunt vero, obcaecati at voluptas alias natus, quasi eum, necessitatibus quisquam consectetur temporibus.</p>
    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt aperiam tempore deserunt vero, obcaecati at voluptas alias natus, quasi eum, necessitatibus quisquam consectetur temporibus.</p>
    <h4 className="header__text" ></h4>
    <button className="btn" onClick={()=>(navigate('/home'))} >generate Gift card</button>
  </div>
    </header>
    <div className='dashboard'>
        <Card/>
    </div>
    <div className='about'>
      <h2 className="about__heading">About Us</h2>
   <p className="about__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, eos. Id harum magnam impedit praesentium voluptates tempora. Repudiandae architecto expedita, rerum accusantium modi quis ipsum inventore non, a optio distinctio.</p>
   <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptatum quis! Delectus, unde. Minima, libero suscipit voluptatibus praesentium eveniet labore dolorem in ad quo nemo atque qui magni sequi earum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, eos. Id harum magnam impedit praesentium voluptates tempora. Repudiandae architecto expedita, rerum accusantium modi quis ipsum inventore non, a optio distinctio.</p>
    </div>
    <div className='footer'>
<ul className="footer__list">
  <li className="footer__item">Facebook</li>
  <li className="footer__item">twitter</li>
  <li className="footer__item">Linkdin</li>
  <li className="footer__item">Snapchat</li>
</ul>
    </div>
    </>
  )
}

export default Dashboard
