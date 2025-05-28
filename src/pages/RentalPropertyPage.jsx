import Carousel from "../components/Carousel";
import StarRating from "../components/StarRating";
import Host from "../components/Host";
import Tags from "../components/Tags";

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
      
    </div>
  );
}

export default RentalPropertyPage;
