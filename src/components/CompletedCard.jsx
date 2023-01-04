const CompletedCard = ({image, text}) => {
  console.log(image);
    return (
    <div>
        <div className="" dangerouslySetInnerHTML={{ __html: text }} />
        <img src={image} alt="" className='smcard__img' />
      </div>
    )
  }
  
  export default CompletedCard;