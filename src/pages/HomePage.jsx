import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/PropartyCard";

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

      {/*Rendering a Card for each item  and check if it's null*/}
      <div className="gallery">
        {gallery.length > 0 ? (
          gallery.map((item) => (
            <Link
              to={`/property/${item.id}`}
              key={item.id}
              className="link-no-decoration"
            >
              <Card id={item.id} title={item.title} image={item.cover} />
            </Link>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </main>
  );
}

export default HomePage;
