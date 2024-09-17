// ModelX.jsx
import React from 'react';
import Carousel from '../caresuol/inde';

const ModelX = () => {
  const images = [
    'model-x-image1.jpg',
    'model-x-image2.jpg',
    'model-x-image3.jpg',
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Model X</h1>
      <Carousel images={images} />
    </div>
  );
};

export default ModelX;
