import footerLogo from "../assets/footer-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={footerLogo}
        alt="Kasa Logo"
        className="footer__logo"
        width="122"
        height="39.44"
      />
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
