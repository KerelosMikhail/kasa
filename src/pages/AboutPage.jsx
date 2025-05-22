import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";

function AboutPage() {
  return (
    <>
      <AboutBanner />

      <Collapse
        title="More Info"
        paragraph="This is the detailed content that will expand and collapse."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="More Info"
        paragraph="This is the detailed content that will expand and collapse."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="More Info"
        paragraph="This is the detailed content that will expand and collapse."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="More Info"
        paragraph="This is the detailed content that will expand and collapse."
        width="1023px"
        height="54px"
      />
    </>
  );
}

export default AboutPage;
