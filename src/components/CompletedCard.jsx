import "./completed.scss";

const CompletedCard = ({ template }) => {
  return (
    <div>
      <div className="container" />
      <div
        className="card__figure"
        style={{
          backgroundImage: `url(${template?.card?.img})`,
          height: "600px",
          width: "600px",
          margin: "12rem auto",
          overflowWrap: "anywhere",
          padding:"40px",
          backgroundSize:"cover"
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: template.text }} />
      </div>
      {/* <figure className="card__figure">
        <img
          src={template?.card?.img}
          alt="image not found"
          className="card__img"
        />
        <figcaption
          className="card__caption"
          dangerouslySetInnerHTML={{ __html: template.text }}
        ></figcaption>
      </figure> */}
    </div>
  );
};

export default CompletedCard;
