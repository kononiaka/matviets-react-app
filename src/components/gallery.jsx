import React from "react";

const Gallery = (props) => {
  const galleryItems = props.elements.map((element) => (
    <div className="galleryItem mt-4" key={element.id}>
      <img src={element.src} />
    </div>
  ));
  return <div className="gallery">{galleryItems}</div>;
};

export default Gallery;
