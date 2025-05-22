import aboutBannerImage from "../assets/about-image.webp";

function AboutBanner() {
  return (
    <div className="about-banner">
      <img
        src={aboutBannerImage}
        alt="Banner"
        className="about-banner__image"
      />
      <div className="about-banner__mask"></div>
      <div className="about-banner__overlay"></div>
    </div>
  );
}

export default AboutBanner;
