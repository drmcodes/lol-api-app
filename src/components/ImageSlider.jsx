import React, { useState } from "react";

const ImageSlider = ({ championNames }) => {
  const baseUrl =
    "https://raw.githubusercontent.com/InFinity54/LoL_DDragon/master/img/champion/centered/";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = championNames.map(
    (championName) => `${baseUrl}${championName}_0.jpg`
  );

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = (imageUrl) => {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-image');
    
    modal.style.display = 'flex';
    modalImg.src = imageUrl;
  };

  const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  };

  return (
    <div className="image-slider">
      <button className="slider-button left" onClick={prevSlide}>
        {"<"}
      </button>
      <img
        className="slider-image"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        onClick={() => openModal(images[currentImageIndex])}
      />
      <button className="slider-button right" onClick={nextSlide}>
        {">"}
      </button>

      {/* Modal para mostrar la imagen en grande */}
      <div className="modal" onClick={closeModal}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-image" src="" alt="Imagen en modal" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
