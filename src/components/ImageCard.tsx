import { motion } from 'framer-motion';
import React, { useState } from 'react';

const ImageCard = ({ id, url, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('handleOpenModal ');
    
    setIsOpen(true);
  };
  
  const handleCloseModal = () => {
    console.log('handleCloseModal');
    
    setIsOpen(false);
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  return (
    <>
      {/* Image Card */}
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
        onClick={handleOpenModal}
      >
        {/* Card Image */}
        <img src={url} alt={title} />
  
        {/* Card Title */}
        <p className="absolute bottom-0 left-0 px-4 py-2 bg-black bg-opacity-50 text-white w-full">
          {title}
        </p>
      </motion.div>
  
      {/* Modal */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20"
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={modalVariants}
        onClick={handleCloseModal}
      >
        {/* Modal Content */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Image */}
          <img src={url} alt={title} />
  
          {/* Modal Title */}
          <h2 className="text-xl font-bold my-4">{title}</h2>
  
          {/* Modal Close Button */}
          <button onClick={handleCloseModal}>Close</button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ImageCard;
