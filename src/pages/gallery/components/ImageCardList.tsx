import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Image {
  id: number;
  url: string;
  title: string;
  tags: string[];
  description?: string;
}

const images: Image[] = [
  {
    id: 1,
    url: 'https://source.unsplash.com/random/800x800/?featured',
    title: 'Featured Image',
    tags: ['nature'],
    description: 'Featured Image',
  },
  {
    id: 2,
    url: 'https://source.unsplash.com/random/800x800/?nature',
    title: 'Nature',
    tags: ['city'],
    description: 'Nature Image',
  },
  {
    id: 3,
    url: 'https://source.unsplash.com/random/800x800/?city',
    title: 'City',
    tags: ['landscape'],
    description: 'City Image',
  },
  {
    id: 4,
    url: 'https://source.unsplash.com/random/800x800/?animals',
    title: 'Animals',
    tags: ['landscape'],
  },
  {
    id: 5,
    url: 'https://source.unsplash.com/random/800x800/?landscape',
    title: 'Landscape',
    tags: ['nature'],
  },
  {
    id: 6,
    url: 'https://source.unsplash.com/random/800x800/?architecture',
    title: 'Architecture',
    tags: ['landscape'],
  },
  {
    id: 7,
    url: 'https://source.unsplash.com/random/800x800/?technology',
    title: 'Technology',
    tags: ['nature'],
  },
  {
    id: 8,
    url: 'https://source.unsplash.com/random/800x800/?people',
    title: 'People',
    tags: ['city'],
  },
  {
    id: 9,
    url: 'https://source.unsplash.com/random/800x800/?travel',
    title: 'Travel',
    tags: ['features'],
  },
  {
    id: 10,
    url: 'https://source.unsplash.com/random/800x800/?food',
    title: 'Food',
    tags: ['nature'],
  },
  {
    id: 11,
    url: 'https://source.unsplash.com/random/800x800/?sports',
    title: 'Sports',
    tags: ['landscape'],
  },
  {
    id: 12,
    url: 'https://source.unsplash.com/random/800x800/?water',
    title: 'Water',
    tags: ['city'],
  },
  {
    id: 13,
    url: 'https://source.unsplash.com/random/800x800/?night',
    title: 'Night',
    tags: ['nature'],
  },
  {
    id: 14,
    url: 'https://source.unsplash.com/random/800x800/?abstract',
    title: 'Abstract',
    tags: ['nature'],
  },
  {
    id: 15,
    url: 'https://source.unsplash.com/random/800x800/?macro',
    title: 'Macro',
    tags: ['features'],
  },
  {
    id: 16,
    url: 'https://source.unsplash.com/random/800x800/?business',
    title: 'Business',
    tags: ['nature'],
  },
  {
    id: 17,
    url: 'https://source.unsplash.com/random/800x800/?fashion',
    title: 'Fashion',
    tags: ['landscape'],
  },
  {
    id: 18,
    url: 'https://source.unsplash.com/random/800x800/?cars',
    title: 'Cars',
    tags: ['landscape'],
  },
  {
    id: 19,
    url: 'https://source.unsplash.com/random/800x800/?interior',
    title: 'Interior',
    tags: ['city'],
  },
  {
    id: 20,
    url: 'https://source.unsplash.com/random/800x800/?outdoors',
    title: 'Outdoors',
    tags: ['landscape'],
  },
  {
    id: 21,
    url: 'https://source.unsplash.com/random/800x800/?flowers',
    title: 'Flowers',
    tags: ['features'],
  },
];

const ImageCard: React.FC<
  Image & { onOpen: (id: number) => void } & { onClose: () => void } & {
    goToNextImage: () => void;
  } & { goToPreviousImage: () => void } & { openImage: any }
> = ({
  id,
  url,
  title,
  description,
  onOpen,
  onClose,
  goToNextImage,
  goToPreviousImage,
  openImage,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        className="rounded overflow-hidden shadow-lg cursor-pointer "
        onClick={() => onOpen(id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-container relative">
          <img className="w-full" src={url} alt={title} />
          <motion.div
            className="absolute top-0 left-0 w-full h-full p-6 text-white bg-black bg-opacity-60 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center w-full">{description}</p>
          </motion.div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
      <AnimatePresence>
        {openImage && openImage.id === id + 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50"
            // onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="relative w-full max-w-2xl bg-white rounded shadow-lg p-8"
            >
              <img className="w-full" src={url} alt={title} />
              <button
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-2 py-1 rounded"
                onClick={goToPreviousImage}
              >
                Previous
              </button>
              <button
                className="absolute top-4 right-4 bg-gray-200 text-gray-800 px-2 py-1 rounded"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="absolute top-4 right-20 bg-gray-200 text-gray-800 px-2 py-1 rounded"
                onClick={goToNextImage}
              >
                Next
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const FilterButton: React.FC<{ tag: string; onClick: () => void }> = ({
  tag,
  onClick,
}) => (
  <button
    className="mr-2 mb-2 px-3 py-1 bg-blue-500 text-white rounded"
    onClick={onClick}
  >
    {tag}
  </button>
);

const ImageCardList: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [openImageIndex, setOpenImageIndex] = useState(-1);

  const handleOpen = (index: number) => {
    setOpenImageIndex(index);
  };

  const handleClose = () => {
    setOpenImageIndex(-1);
  };

  const goToNextImage = () => {
    setOpenImageIndex((openImageIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setOpenImageIndex((openImageIndex - 1 + images.length) % images.length);
  };

  const openImage = openImageIndex >= 0 ? images[openImageIndex] : null;

  const uniqueTags = Array.from(
    new Set(
      images.reduce((acc, image) => [...acc, ...image.tags], [] as string[])
    )
  );

  const filteredImages =
    selectedTag === 'all'
      ? images
      : images.filter((image) => image.tags.includes(selectedTag));

  return (
    <div className="container mx-auto">
      <div className="my-4 flex justify-center">
        <FilterButton tag="all" onClick={() => setSelectedTag('all')} />
        {uniqueTags.map((tag) => (
          <FilterButton
            key={tag}
            tag={tag}
            onClick={() => setSelectedTag(tag)}
          />
        ))}
      </div>
      <div className="flex flex-wrap -mx-4">
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <ImageCard
                {...image}
                onOpen={handleOpen}
                onClose={handleClose}
                goToNextImage={goToNextImage}
                goToPreviousImage={goToPreviousImage}
                openImage={openImage}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageCardList;
