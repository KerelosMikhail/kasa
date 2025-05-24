import { useState } from "react";
import carrouselImage from "../assets/carrouselImage.webp";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";

function Carousel() {
  // For demonstration, assume 4 images and current index is 1
  const [current, setCurrent] = useState(1);
  const total = 4;

  return (
    <div className="carousel">
      <img src={carrouselImage} alt="Property" className="carousel__image" />
      {/* Left Arrow */}
      <div className="carousel__arrow-container carousel__arrow-container--left">
        <img src={leftArrow} alt="Previous" className="carousel__arrow" />
      </div>
      {/* Right Arrow */}
      <div className="carousel__arrow-container carousel__arrow-container--right">
        <img src={rightArrow} alt="Next" className="carousel__arrow" />
      </div>
      {/* Image Counter */}
      <div className="carousel__counter">
        {current}/{total}
      </div>
    </div>
  );
}

export default Carousel;
