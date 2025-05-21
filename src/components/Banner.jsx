import bannerImage from "../assets/banner-image.webp";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner__image" />
      <div className="banner__mask"></div>
      <div className="banner__overlay">
        <div className="banner__text">At home, everywhere, and anywhere</div>
      </div>
    </div>
  );
}

export default Banner;
