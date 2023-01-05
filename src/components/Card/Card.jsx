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
             Dear ....... </h2>
   <p className="card__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dignissimos, ad pariatur alias repudiandae quo, perferendis culpa porro maiores reiciendis unde ipsa laborum. Enim velit quam impedit vero eveniet deserunt consectetur exercitationem totam at repellendus?</p>
    <h4 className="card__ending">Your Beloved lorem7 ....</h4>
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
