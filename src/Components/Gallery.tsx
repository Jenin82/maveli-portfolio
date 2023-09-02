
function Gallery() {
    // Sample image URLs (replace with your own images)
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
    ];

    return (
        <section id="gallery">
            <div className="gallery-content">
                <h2>Gallery</h2>
                <div className="image-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-image">
                            <img
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
