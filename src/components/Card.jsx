function Card({ title, image, id }) {
  return (
    <div className="gallery-card" data-id={id}>
      <img src={image} alt={title} className="gallery-card__img" />
      <div className="gallery-card__gradient"></div>
      <div className="gallery-card__text">{title}</div>
    </div>
  );
}

export default Card;
