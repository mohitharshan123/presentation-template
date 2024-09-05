import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Button from "../../components/Button";
import Card from "../../components/SortableCard";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import AddSlide from "../../components/AddSlideDropdown";
import { ROUTES } from "../../constants/routes";

const Dashboard: React.FC = () => {
  const { sensors, slides, handleDragEnd } = useDragAndDrop();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row absolute top-0 right-0 mt-4 mr-4 gap-2">
        <AddSlide />
        <Button label="Preview" onClick={() => navigate(ROUTES.player)} />
      </div>
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
            {slides.map(({ idx, description, type, imageSrc, title }) => (
              <Card idx={idx} key={idx} {...{ description, type, imageSrc, title }} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Dashboard;
