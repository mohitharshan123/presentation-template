import AddSlide from "../../components/AddSlide";
import Card from "../../components/SortableCard";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import useDragAndDrop from "../../hooks/useDragAndDrop";

const Dashboard: React.FC<{}> = () => {
  const { sensors, slides, handleDragEnd } = useDragAndDrop();

  return (
    <div className="flex flex-col items-end">
      <AddSlide className="absolute top-0 right-0 mt-4 mr-4" />
      <div className="flex flex-col gap-2 mx-20 my-20">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={slides.map(({ idx }) => idx)}
            strategy={verticalListSortingStrategy}
          >
            {slides.map(({ idx, description, type, imageSrc }) => (
              <Card idx={idx} key={idx} {...{ description, type, imageSrc }} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Dashboard;
