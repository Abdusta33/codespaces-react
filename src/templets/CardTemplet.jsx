import React from 'react'
import './cardTemp.scss'
import Smcard from './Smcard'
import Nav from '../Dashboard/Nav';
import {cards} from './cards'
import * as ai from 'react-icons/ai';
import * as fa from 'react-icons/fa';

import * as io from 'react-icons/io';
import * as  bs from 'react-icons/bs';
import * as bi from 'react-icons/bi';

const CardTemplet = () => {
  return (
    <>
        <Nav nav1={<bs.BsFillBookmarkFill/>} nav2={<ai.AiOutlineShoppingCart/>} nav3={'Cart'} />
        <h3 style={{'text-align':'ceneter'}}>which kind of card templet you want</h3>
        <div  className='container'>
        {
         cards.map((card)=>(
          <div className='card__warpper'>
          <Smcard key={card.id} path={card.path} img={card.img} title={card.title} id={card.id} />
      
          </div>
         ))  } 

 </div>
 </>
 )
  
}

export default CardTemplet