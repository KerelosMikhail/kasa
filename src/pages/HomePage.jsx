import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";

function HomePage() {
  /* Fetches gallery data from the json file.
     State to hold gallery data loaded from JSON */
  const [gallery, setGallery] = useState([]);

  // Fetch gallery.json from public folder
  useEffect(() => {
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => setGallery(data))
      .catch((err) => console.error("Failed to load gallery:", err));
  }, []);

  return (
    <main className="home-page">
      <Banner />

      <div className="gallery">
        {/*Rendering a Card for each item */}
        {gallery.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.cover}
          />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
