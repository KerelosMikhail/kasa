import logo from "../assets/logo.jpg"; // Import the logo image

function Header() {
  return (
    <>
      <img src={logo} className="logo" alt="Kasa logo" />
      <h1> Header </h1>;
    </>
  );
}
export default Header;
