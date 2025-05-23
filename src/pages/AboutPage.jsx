import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";

function AboutPage() {
  return (
    <>
      <AboutBanner />

      <Collapse
        title="Reliability"
        paragraph="This is the detailed content that will expand and collapse."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="Respect"
        paragraph="This is the detailed content that will expand and collapse."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="Service"
        paragraph="This is the detailed content that will expand and collapse."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="Security"
        paragraph="This is the detailed content that will expand and collapse."
        width="1023px"
        height="54px"
      />
    </>
  );
}

export default AboutPage;
