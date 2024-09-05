import { Slide } from "../types";
import { getTitleFromSlideType } from "../utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Card: React.FC<Slide> = ({ idx, type, description, imageSrc }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: idx });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="h-40 bg-white border rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
    >
      <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
        <img
          className="h-40 size-full absolute top-0 start-0 object-cover"
          src={imageSrc}
          alt="Card image"
        />
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {getTitleFromSlideType(type)}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
