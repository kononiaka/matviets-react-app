import React from "react";

const Gallery = (props) => {
  const galleryItems = props.elements.map((i) => (
    <div className="galleryItem" key={i.id}>
      <img src={i.src} />
    </div>
  ));
  return <div className="gallery">{galleryItems}</div>;
};

export default Gallery;
