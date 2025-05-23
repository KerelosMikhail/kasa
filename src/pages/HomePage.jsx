import { useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import thumbImage from "../assets/thumbImage.jpg";

function HomePage() {
  return (
    <main className="home-page">
      <Banner />

      <div className="gallery">
        <Card title="Title of the rental property" image={thumbImage} id="1" />
        <Card title="Title of the rental property" image={thumbImage} id="2" />
      </div>
    </main>
  );
}

export default HomePage;
