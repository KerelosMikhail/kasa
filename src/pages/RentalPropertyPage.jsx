import Carousel from "../components/Carousel";
import StarRating from "../components/StarRating";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

// Using StarRating <StarRating value={3} />

function RentalPropertyPage() {
  const images = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-5.jpg",
  ];

  const hostUrl =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg";

  return (
    <div className="rental-property-page">
      <Carousel images={images} />
      <StarRating value={3} />

      <Host hostName="Nathalie Jean" hostImage={hostUrl} />

      <Tags tags={["WiFi", "Parking", "Pool"]} />

      <div className="details-container">
        <Collapse
          className="details-collapse"
          title="Service"
          paragraph="Loream ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          width="582px"
          height="52px"
        />
        <Collapse
          className="details-collapse"
          title="Amenities"
          paragraph="Loream ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          width="582px"
          height="52px"
        />
      </div>
    </div>
  );
}

export default RentalPropertyPage;
