import React from 'react';
import logo from '../asset/logo.png';
import './Dashboard.scss';
import { useRef, useEffect } from 'react';
import Card from '../Card/Card'
import Typed from 'typed.js';
import chrismass from '../asset/chrismass.jpg';
import eid from '../asset/eid.png';
import hbd from '../asset/hbd.png';
import lovers from '../asset/lovers.png';
import mom from '../asset/mom.jpg';
import Nav from './Nav';


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
 
 
  return (
    <>
   
  <Nav nav1={'About'} nav2={'Services'} nav3={'Contact us'}/>
    <header className='header'>
  <div className="header__left">
    <div className="header__pics">
      <img src={mom} alt="" className='header__img header__img--1' />
      <img src={lovers} alt=""  className='header__img header__img--2'/>
      <img src={eid} alt="" className='header__img header__img--3'  />
      <img src={chrismass} alt="" className='header__img header__img--4' />
    </div>
  </div>
  <div className="header__right">
 
    <h2 className="header__heading">Regalo! for your Beloved ones</h2>
    <h4 className="header__text" ></h4>
    <button className="btn">generate Gift card</button>
  </div>
    </header>
    <div className=''>
   <Card/>
    </div>
    <div className=''>
   create card flex holiday special day templete
    </div>
    <div className=''>
   footer
    </div>
    </>
  )
}

export default Dashboard
