import {
  DUMMY_IMAGES,
  SLIDE_TYPE_DESCRIPTIONS,
  SLIDE_TYPE_TITLES,
} from "../../constants";
import useSlideStore from "../../stores/slidesStore";
import { SlideType } from "../../types";
import ChartSlide from "./ChartSlide";
import ClosingSlide from "./ClosingSlide";
import CodeBlockSlide from "./CodeBlockSlide";
import CodeEditorSlide from "./CodeEditorSlide";
import ImageSlide from "./ImageSlide";
import OpeningSlide from "./OpeningSlide";

const Player = () => {
  const slides = useSlideStore((state) => state.slides);

  const SLIDE_COMPONENT: Record<SlideType, () => React.ReactElement> = {
    [SlideType.OPENING]: () => <OpeningSlide />,
    [SlideType.IMAGE]: () => <ImageSlide images={DUMMY_IMAGES} />,
    [SlideType.CHART]: () => <ChartSlide />,
    [SlideType.CODE]: () => <CodeBlockSlide />,
    [SlideType.COMPILER]: () => <CodeEditorSlide />,
    [SlideType.CLOSING]: () => <ClosingSlide />,
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
      <div
        data-hs-carousel='{"loadingclassNamees": "opacity-0"}'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-[calc(100vh-50px)] bg-white rounded-lg">
          {/* Carousel Slides */}
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {slides.map(({ idx, type }) => (
              <div key={idx} className="hs-carousel-slide relative">
                <div className="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                  {SLIDE_COMPONENT[type]()}
                </div>
              </div>
            ))}
          </div>

          {/* Demo Logo and Watermark (Common for all slides) */}
          <div className="absolute top-4 left-4">
            <img
              className="h-14"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s"
              alt="Demo Logo"
            />
          </div>
          <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
            <span className="opacity-50">Watermark</span>
          </div>

          {/* Carousel Navigation Buttons */}
          <button
            type="button"
            className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </button>

          {/* Carousel Pagination */}
          <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
            {slides.map(({ idx }) => (
              <span
                key={idx}
                className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
              ></span>
            ))}
          </div>
        </div>
        {/* Footer Section */}
        <footer className="bg-gray-800 text-white p-4 rounded-b-lg shadow-md dark:bg-neutral-900">
          <div className="flex justify-between">
            <div className="text-sm">
              &copy; 2024 Synbrains. All rights reserved.
            </div>
            <div className="text-sm">Contact: mohitharshan123@gmail.com</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Player;
