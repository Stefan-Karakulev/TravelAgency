import React from 'react';

const images = [
  "/Images-main/Images/gal1.jpg",
  "/Images-main/Images/gal2.jpg",
  "/Images-main/Images/gal3.png",
  "/Images-main/Images/gal4.jpg",
  "/Images-main/Images/gal5.webp",
  "/Images-main/Images/gal6.webp",
];

const Gallery = () => {
  return (
    <div>
      <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('/Images-main/Images/hero.png')" }}>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h4>
        </div>
      </div>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
          {images.map((image, index) => (
            <div key={index} className='relative rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105'>
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className='w-full h-full object-cover'
                style={{ height: '200px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;