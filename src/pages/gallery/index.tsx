import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './components/Hero';
import Tags from './components/Tags';
import GallertFooter from './components/Footer';
import ImageCardList from './components/ImageCardList';

function Gallery() {
  return (
    <>
      <Hero />
      <ImageCardList />
      <Tags />
      <Outlet />
      <GallertFooter />
    </>
  );
}

export default Gallery;
