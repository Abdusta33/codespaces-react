import  './completed.scss'
const CompletedCard = ({image, text}) => {
  console.log(image);
    return (
    <div>
        <div className="" />
       <figure className="card__figure">
       <img src={image} alt="" className='card__img' />
       <figcaption className="card__caption" dangerouslySetInnerHTML={{ __html: text }}></figcaption>
       </figure>

      </div>
    )
  }
  
  export default CompletedCard;