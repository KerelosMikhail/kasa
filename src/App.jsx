import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom"; // Import routing components
import "./App.css";

function Layout({ desktop: DesktopComponent, mobile: MobileComponent }) {
  const isMobile = window.innerWidth <= 768;
  return isMobile ? <MobileComponent /> : <DesktopComponent />;
}

function D_Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function M_Home() {
  return <h1>Mobile Home Layout</h1>;
}

function D_Rental_Property_Card() {
  return <h1>D_Rental Property Card</h1>;
}

function M_Rental_Property_Card() {
  return <h1>Mobile Rental Property Card</h1>;
}

function D_404() {
  return <h1>404 - page not found</h1>;
}

function M_404() {
  return <h1> Mobile 404 - page not found</h1>;
}

function D_About() {
  return <h1>About Page</h1>;
}

function M_About() {
  return <h1>Mobil About Page</h1>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/property">Rental Property</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Layout desktop={D_Home} mobile={M_Home} />} />
        <Route
          path="/about"
          element={<Layout desktop={D_About} mobile={M_About} />}
        />
        <Route
          path="/property"
          element={
            <Layout
              desktop={D_Rental_Property_Card}
              mobile={M_Rental_Property_Card}
            />
          }
        />
        <Route path="*" element={<Layout desktop={D_404} mobile={M_404} />} />
      </Routes>
    </>
  );
}

export default App;
