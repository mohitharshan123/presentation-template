import React from "react";
import TitleAndContent from "../../components/TitleAndContent";
import { SLIDE_TYPE_DESCRIPTIONS, SLIDE_TYPE_TITLES } from "../../constants";

type ImageSlideProps = {
  images: string[];
  title: string;
  content: string;
};

const ImageSlide: React.FC<ImageSlideProps> = ({ images }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-gray-100 dark:bg-neutral-900 p-6">
      <TitleAndContent
        title={SLIDE_TYPE_TITLES.IMAGE}
        content={SLIDE_TYPE_DESCRIPTIONS.IMAGE}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-2">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={`Slide Image ${index}`}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
