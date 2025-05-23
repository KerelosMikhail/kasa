import thumbImage from "../assets/thumbImage.jpg";

function Card() {
  return (
    <div className="gallery-card">
      <img src={thumbImage} alt="PropertyImage" className="gallery-card__img" />
      <div className="gallery-card__gradient"></div>
      <div className="gallery-card__text">Title of the rental property</div>
    </div>
  );
}
export default Card;
