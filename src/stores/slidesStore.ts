import { create } from "zustand";

import { Slide, SlideType } from "../types";
import {
  SLIDE_TYPE_DESCRIPTIONS,
  SLIDE_TYPE_IMAGES,
  SLIDE_TYPE_TITLES,
} from "../constants";

/**
 * The type definition for the slide store.
 */
type SlideStore = {
  slides: Array<Slide>; // Array of slide objects
  addSlide: (slideType: SlideType) => void; // Function to add a new slide
  deleteSlide: (idx: string) => void; // Function to delete a slide by index
  setSlides: (updateFn: (slides: Array<Slide>) => Array<Slide>) => void; // Function to set slides with an update function
};

/**
 * Creates and provides a Zustand store for managing slides.
 * The store maintains an array of slides and provides methods to add, delete, and update slides.
 */
const useSlideStore = create<SlideStore>((set) => ({
  slides: [
    {
      idx: "1",
      type: SlideType.OPENING,
      title: SLIDE_TYPE_TITLES[SlideType.OPENING],
      description: SLIDE_TYPE_DESCRIPTIONS[SlideType.OPENING],
      imageSrc: SLIDE_TYPE_IMAGES[SlideType.OPENING],
    },
    {
      idx: "2",
      type: SlideType.IMAGE,
      title: SLIDE_TYPE_TITLES[SlideType.IMAGE],
      description: SLIDE_TYPE_DESCRIPTIONS[SlideType.IMAGE],
      imageSrc: SLIDE_TYPE_IMAGES[SlideType.IMAGE],
    },
    {
      idx: "3",
      type: SlideType.CHART,
      title: SLIDE_TYPE_TITLES[SlideType.CHART],
      description: SLIDE_TYPE_DESCRIPTIONS[SlideType.CHART],
      imageSrc: SLIDE_TYPE_IMAGES[SlideType.CHART],
    },
    {
      idx: "4",
      type: SlideType.CODE,
      title: SLIDE_TYPE_TITLES[SlideType.CODE],
      description: SLIDE_TYPE_DESCRIPTIONS[SlideType.CODE],
      imageSrc: SLIDE_TYPE_IMAGES[SlideType.CODE],
    },
    {
      idx: "5",
      type: SlideType.COMPILER,
      title: SLIDE_TYPE_TITLES[SlideType.COMPILER],
      description: SLIDE_TYPE_DESCRIPTIONS[SlideType.COMPILER],
      imageSrc: SLIDE_TYPE_IMAGES[SlideType.COMPILER],
    },
    {
      idx: "6",
      type: SlideType.CLOSING,
      title: SLIDE_TYPE_TITLES[SlideType.CLOSING],
      description: SLIDE_TYPE_DESCRIPTIONS[SlideType.CLOSING],
      imageSrc: SLIDE_TYPE_IMAGES[SlideType.CLOSING],
    },
  ],
  
  /**
   * Adds a new slide to the store.
   * @param slideType - The type of slide to add (e.g., SlideType.OPENING, SlideType.IMAGE).
   */
  addSlide: (slideType: SlideType) =>
    set((state) => {
      const maxIdx = state.slides.reduce(
        (max, slide) => Math.max(max, parseInt(slide.idx, 10)),
        0
      );
      const newIdx = (maxIdx + 1).toString();

      const newSlide: Slide = {
        idx: newIdx,
        type: slideType,
        title: SLIDE_TYPE_TITLES[slideType],
        description: SLIDE_TYPE_DESCRIPTIONS[slideType],
        imageSrc: SLIDE_TYPE_IMAGES[slideType],
      };

      return {
        slides: [...state.slides, newSlide],
      };
    }),

  /**
   * Deletes a slide from the store by its index.
   * @param idx - The index of the slide to delete.
   */
  deleteSlide: (idx: string) =>
    set((state) => ({
      slides: state.slides.filter((slide) => slide.idx !== idx),
    })),

  /**
   * Updates the slides in the store using the provided update function.
   * @param updateFn - A function that receives the current slides and returns the updated slides.
   */
  setSlides: (updateFn: (slides: Array<Slide>) => Array<Slide>) =>
    set((state) => ({
      slides: updateFn(state.slides),
    })),
}));

export default useSlideStore;
