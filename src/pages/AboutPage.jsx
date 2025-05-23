import AboutBanner from "../components/AboutBanner";
import Collapse from "../components/Collapse";

function AboutPage() {
  return (
    <>
      <AboutBanner />

      <Collapse
        title="Reliability"
        paragraph="Verifying the accuracy and timeliness of information, ensuring smooth communication and providing a transparent and user-friendly experience. This includes consistently displaying accurate property details responding promptly to inquiries, and following through with requests."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="Respect"
        paragraph="This is the detailed content that will expand and collapseProvide proper notice before entering the premises, as required by law and the lease agreement. Respect the tenant's privacy by avoiding unnecessary entries and ensuring a safe environment."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="Service"
        paragraph="Provide quality service and maintenance, ensuring a safe and comfortable living environment for tenants."
        width="1023px"
        height="54px"
      />

      <Collapse
        title="Security"
        paragraph="Provide tenants with security tips and guidelines, such as how to properly use locks, windows, and alarms, and encourage them to report any suspicious activity. 
                   various measures to enhance safety and security, such as well-lit common areas, automatic locking systems, security cameras, and smart technology like video doorbells and smart locks.
                  Provide tenants with information on emergency procedures and contact information for local authorities. "
        width="1023px"
        height="54px"
      />
    </>
  );
}

export default AboutPage;
