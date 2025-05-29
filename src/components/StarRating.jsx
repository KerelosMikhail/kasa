import starIcon from "../assets/star.svg";

/**
 * StarRating component displays a row of 5 stars.
 * The number of active (colored) stars is determined by the `value` prop (0-5).
 */
function StarRating({ value = 0 }) {
  // Clamp the value between 0 and 5
  const rating = Math.max(0, Math.min(5, value));

  return (
    <div className="star-rating">
      {/* Render 5 stars */}
      {[...Array(5)].map((_, i) => (
        <div className="star-rating__star-container" key={i}>
          <img
            src={starIcon}
            alt={i < rating ? "Active star" : "Inactive star"}
            className={
              "star-rating__star" +
              (i < rating
                ? " star-rating__star--active"
                : " star-rating__star--inactive")
            }
          />
        </div>
      ))}
    </div>
  );
}

export default StarRating;
