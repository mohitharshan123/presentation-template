import { SLIDE_TYPE_TITLES } from "../constants";
import useSlideStore from "../stores/slidesStore";
import { SlideType } from "../types";
import classNames from "classnames";
import Button from "./Button";

const AddSlide: React.FC<{ className?: string }> = ({ className }) => {
  const slideTypes = Object.values(SlideType);
  const handleAddSlide = useSlideStore((state) => state.addSlide);

  return (
    <div
      className={classNames(["hs-dropdown relative inline-flex", className])}
    >
      <Button label="Add" />
      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full z-10"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-dropdown-default"
      >
        {slideTypes.map((slideType) => (
          <a
            key={slideType}
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            href="#"
            onClick={() => handleAddSlide(slideType)}
          >
            {`${SLIDE_TYPE_TITLES[slideType]}`}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AddSlide;
