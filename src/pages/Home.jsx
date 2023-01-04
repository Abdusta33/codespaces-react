import React from 'react'

import {cards} from '../templets/cards'
import Smcard from "../components/Smcard"
const Home = () => {
  return (
    <div className='container'>
      {cards.map((card, index)=>(
        <div key={index}>
          <Smcard card={card} />
        </div>)
      )}
    </div>
  )
}

export default Home