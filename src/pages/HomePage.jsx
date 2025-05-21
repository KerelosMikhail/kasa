import { useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

function HomePage() {
  return (
    <main className="home-page">
      <Banner />
      <div className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default HomePage;
