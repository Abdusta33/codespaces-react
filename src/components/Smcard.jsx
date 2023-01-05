import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './smcard.scss';


const Smcard = ({card}) => {
  const navigate = useNavigate();
  return ( <div>
   
     <div className="smcard">
      <div className="smcard__wrapper">
      <figure className="smcard__fig" >
       <img src={card.img} alt="" className='smcard__img' />
       
      </figure>
      <button className="smcard__btn" onClick={()=>(
        navigate(`/${card.id}`)
      )} >Create Card</button>
      </div>
     </div>
    </div>
  )
}

export default Smcard;