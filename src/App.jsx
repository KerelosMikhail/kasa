import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom"; // Import routing components
import HomePage from "./pages/HomePage";
import RentalPropertyPage from "./pages/RentalPropertyPage"; // Import the Rental Property Card component
import AboutPage from "./pages/AboutPage"; // Import the About Page component
import ErrorPage from "./pages/ErrorPage"; // Import Error page component
import "./App.Scss"; // Import the SCSS file for styling
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-layout">
      <Header />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/property" element={<RentalPropertyPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
