import React from "react";
 // Import the CSS file

// const images = [
//   "https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//   "https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//   "https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
//   "https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
// ];

const images = [
  "assets/img/daas1.png",
  "assets/img/daas2.png",
  "assets/img/daas3.png",
  
 
];

const ImageBox = ({ src }) => {
  return (
    <>
    <div className="image-gallery-box">
    <h2></h2>
      <div className="image-gallery-imgBx">
        <img src={src} alt="Gallery" />
      </div>
      <div className="image-gallery-content">
        <div>
          <h2>Image Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
    </>
  );
};

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      {images.map((src, index) => (
        <ImageBox key={index} src={src} />
      ))}
    </div>
  );
};

export default ImageGallery;
