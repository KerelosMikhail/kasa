import Carousel from "../components/Carousel";
import StarRating from "../components/StarRating";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import Title from "../components/Title";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RentalPropertyPage({ gallery }) {
  // 1. Get the property id from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // 2. Find the property in the gallery data using the id
  const property = gallery.find((item) => item.id === id);

  // 3. If property not found, redirect to ErrorPage
  useEffect(() => {
    if (!property) {
      navigate("/ErrorPage", { replace: true });
    }
  }, [property, navigate]);

  // 4. If property is not found, don't render anything (redirect will happen)
  if (!property) return null;

  // 5. Destructure the needed data from the property object
  const {
    pictures,
    title,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
  } = property;

  return (
    <div className="rental-property-page">
      {/* First row: Carousel */}
      <Carousel images={pictures} />

      {/* Second row: Title and Host (desktop), only Title (mobile) */}
      <div className="property-header-row">
        <Title title={title} location={location} />
        <Host hostName={host.name} hostImage={host.picture} />
      </div>

      {/* Third row: Tags and Rating (desktop), only Tags (mobile) */}
      <div className="property-info-row">
        <Tags tags={tags} />
        <StarRating value={Number(rating)} />
      </div>

      {/* Fourth row (mobile only): StarRating and Host */}
      <div className="property-rating-host-row">
        <StarRating value={Number(rating)} />
        <Host hostName={host.name} hostImage={host.picture} />
      </div>

      {/* Fourth row (desktop) / Fifth row (mobile): Details container */}
      <div className="details-container">
        <Collapse
          className="details-collapse"
          title="Description"
          paragraph={description}
        />
        <Collapse
          className="details-collapse"
          title="Amenities"
          paragraph={
            equipments && Array.isArray(equipments) ? (
              <ul className="equipments-list">
                {equipments.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              ""
            )
          }
        />
      </div>
    </div>
  );
}

export default RentalPropertyPage;
