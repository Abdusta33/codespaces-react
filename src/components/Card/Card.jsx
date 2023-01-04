import './Card.scss'
import * as fa from 'react-icons/fa';
import * as ai from 'react-icons/ai';
import * as io from 'react-icons/io';
import * as  bs from 'react-icons/bs';
import * as bi from 'react-icons/bi';
const Card = ({sender , reciver, text}) => {
  return (
    <>
    <div className='card'>
        <h2 className="card__heading">
             {reciver}</h2>
   <p className="card__text">{text}</p>
    <h4 className="card__ending">Your Beloved {sender}</h4>
    <div className="card__buttons">
       <button className="card__button card__button--wish"><bs.BsFillBookmarkHeartFill/></button>
        <button className="card__button card__button--heart"><bs.BsFillSuitHeartFill/></button>
        <button className="card__button card__button--share"><io.IoMdShareAlt/></button>
    </div>
    </div>
    </>
  )
}

export default Card
