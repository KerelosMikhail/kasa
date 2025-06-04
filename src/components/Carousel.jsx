import { useState } from "react";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";

function Carousel({ images = [] }) {
  const total = images.length;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right"); // Track scroll direction

  if (total === 0) return null;

  const goPrev = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const goNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <div
        className={`carousel__image-wrapper ${
          direction === "right" ? "slide-right" : "slide-left"
        }`}
        key={current} // Key forces re-mount for animation
      >
        <img
          src={images[current]}
          alt={`Property ${current + 1}`}
          className="carousel__image"
        />
      </div>

      {total > 1 && (
        <>
          {/* Left Arrow */}
          <div
            className="carousel__arrow-container carousel__arrow-container--left"
            onClick={goPrev}
            role="button"
            tabIndex={0}
            aria-label="Previous image"
          >
            <img src={leftArrow} alt="Previous" className="carousel__arrow" />
          </div>
          {/* Right Arrow */}
          <div
            className="carousel__arrow-container carousel__arrow-container--right"
            onClick={goNext}
            role="button"
            tabIndex={0}
            aria-label="Next image"
          >
            <img src={rightArrow} alt="Next" className="carousel__arrow" />
          </div>
          {/* Image Counter */}
          <div className="carousel__counter">
            {current + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
