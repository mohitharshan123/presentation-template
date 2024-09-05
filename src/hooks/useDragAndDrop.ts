import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import useSlideStore from "../stores/slidesStore";
import { Slide } from "../types";
/**
 * Custom hook to manage drag-and-drop functionality for slides.
 *
 * This hook integrates with the `@dnd-kit/core` and `@dnd-kit/sortable` libraries to provide a
 * drag-and-drop interface for reordering a list of slides. It uses `PointerSensor` for mouse and
 * touch interactions and `KeyboardSensor` for keyboard interactions.
 *
 * @returns {Object} An object containing:
 * - `slides` (Slide[]): The current list of slides from the state.
 * - `sensors` (Sensor[]): A list of sensors used for detecting drag and drop interactions.
 * - `handleDragEnd` (Function): A callback function to handle the end of a drag operation, which
 *   updates the state with the new order of slides.
 *
 * @example
 * const { slides, sensors, handleDragEnd } = useDragAndDrop();
 *
 * // Use `slides` to render the list of slides
 * // Pass `sensors` to the DnD kit components
 * // Attach `handleDragEnd` to the DnD kit's drag end event handler
 *
 * @see {@link https://docs.dndkit.com} For more information on `@dnd-kit` library.
 */
const useDragAndDrop = () => {
  // Fetch the current slides and setter function from the store
  const slides = useSlideStore((state) => state.slides);
  const setSlides = useSlideStore((state) => state.setSlides);

  // Configure sensors for pointer and keyboard interactions
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  /**
   * Handles the end of a drag operation by updating the order of slides.
   *
   * This function is called when the drag operation ends. It determines the new order of slides
   * based on the `active` and `over` items and updates the state accordingly.
   *
   * @param {Object} event - The drag end event.
   * @param {Object} event.active - The item that was dragged.
   * @param {Object} event.over - The item that the dragged item was dropped over.
   *
   * @returns {void}
   */
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSlides((items: Slide[]) => {
        const oldIndex = items.findIndex(({ idx }) => idx === active.id);
        const newIndex = items.findIndex(({ idx }) => idx === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Return the slides, sensors, and drag end handler
  return { slides, sensors, handleDragEnd };
};

export default useDragAndDrop;
