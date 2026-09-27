import { useState } from "react";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "/image1.jpg",
      title: "Mountain Escape",
      category: "Nature",
      description: "Beautiful mountains surrounded by clouds.",
    },
    {
      id: 2,
      url: "/image2.jpg",
      title: "Ocean View",
      category: "Travel",
      description: "A peaceful view of the blue ocean.",
    },
    {
      id: 3,
      url: "/image3.jpg",
      title: "Green Forest",
      category: "Nature",
      description: "A calm and refreshing green forest.",
    },
    {
      id: 4,
      url: "/image4.jpg",
      title: "Beautiful Lake",
      category: "Landscape",
      description: "A peaceful lake surrounded by nature.",
    },
  ];

  return (
    <div className="app">

      {/* Header */}

      <header className="header">
        <div className="header-content">
          <p className="small-title">EXPLORE • DISCOVER • ENJOY</p>

          <h1>Dynamic Image Gallery</h1>

          <p className="subtitle">
            A beautiful collection of moments captured through images
          </p>
        </div>
      </header>

      {/* Gallery Section */}

      <main className="gallery-container">

        <div className="section-heading">
          <h2>Our Collection</h2>

          <p>
            Explore beautiful places, landscapes and moments.
          </p>
        </div>

        <div className="gallery">

          {images.map((image) => (
            <div
              className="image-card"
              key={image.id}
              onClick={() => setSelectedImage(image)}
            >

              <div className="image-wrapper">

                <img
                  src={image.url}
                  alt={image.title}
                />

                <div className="overlay">
                  <span>View Image</span>
                </div>

              </div>

              <div className="card-content">

                <span className="category">
                  {image.category}
                </span>

                <h3>{image.title}</h3>

                <p>{image.description}</p>

              </div>

            </div>
          ))}

        </div>

      </main>

      {/* Image Popup */}

      {selectedImage && (

        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage.url}
              alt={selectedImage.title}
            />

            <div className="modal-info">

              <span className="category">
                {selectedImage.category}
              </span>

              <h2>{selectedImage.title}</h2>

              <p>{selectedImage.description}</p>

            </div>

          </div>

        </div>

      )}

      {/* Footer */}

      <footer>
        <p>© 2026 Dynamic Image Gallery</p>
      </footer>

    </div>
  );
}

export default App;