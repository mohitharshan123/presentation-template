import { create } from "zustand";
import { Slide, SlideType } from "../types";

type SlideStore = {
  slides: Array<Slide>;
  addSlide: (slideType: SlideType) => void;
  deleteSlide: (idx: string) => void;
  setSlides: (updateFn: (slides: Array<Slide>) => Array<Slide>) => void;
};

export const slideTypeDescriptions: Record<SlideType, string> = {
  [SlideType.OPENING]:
    "An opening slide introduces the presentation, setting the stage for the content that follows. It often includes the title, agenda, and objectives.",
  [SlideType.IMAGE]:
    "An image slide is used to display a visual element, such as a photograph or illustration, to support or enhance the presentation's content.",
  [SlideType.CHART]:
    "A chart slide presents data in graphical form, such as bar charts, pie charts, or line graphs, to visualize trends and comparisons.",
  [SlideType.CODE]:
    "A code slide contains programming code or scripts. It is used to demonstrate coding techniques, examples, or snippets relevant to the presentation's topic.",
  [SlideType.COMPILER]:
    "A compiler slide details the development environment setup, including tools, configurations, and compilers used for code execution or compilation.",
  [SlideType.CLOSING]:
    "The closing slide summarizes the key points of the presentation and often includes final thoughts, conclusions, or next steps for the audience.",
};

const slideTypeTitles: Record<SlideType, string> = {
  [SlideType.OPENING]: "Opening Slide",
  [SlideType.IMAGE]: "Image Slide",
  [SlideType.CHART]: "Chart Slide",
  [SlideType.CODE]: "Code Slide",
  [SlideType.COMPILER]: "Compiler Slide",
  [SlideType.CLOSING]: "Closing Slide",
};

const slideTypeImages: Record<SlideType, string> = {
  [SlideType.OPENING]: "https://i.ytimg.com/vi/IbTbIndH5_A/maxresdefault.jpg",
  [SlideType.IMAGE]:
    "https://storage.googleapis.com/picmynaweb/assets/images/online-photo-grid/photo-grid-sample.jpg",
  [SlideType.CHART]:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCX6Fg6YYj8KyZqBPBjpMPBBkxpS1bA2M9Ug&s",
  [SlideType.CODE]:
    "https://image.slidesdocs.com/responsive-images/background/abstract-code-blocks-rendered-in-3d-within-the-virtual-space-powerpoint-background_79acb22bd5__960_540.jpg",
  [SlideType.COMPILER]:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAoN5KbDRO8LlW9ag9aCaHDk2fZhzHJ8Zug&s",
  [SlideType.CLOSING]:
    "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/f/2/f2f837a8bd2fa89c4754a347a07ff806dff58cb2b1e39f7a25dfedea224af7e4/closing-slides-slide4_2.png",
};

const useSlideStore = create<SlideStore>((set) => ({
  slides: [
    {
      idx: "1",
      type: SlideType.OPENING,
      title: slideTypeTitles[SlideType.OPENING],
      description: slideTypeDescriptions[SlideType.OPENING],
      imageSrc: slideTypeImages[SlideType.OPENING],
    },
    {
      idx: "2",
      type: SlideType.CHART,
      description: slideTypeDescriptions[SlideType.CHART],
      imageSrc: slideTypeImages[SlideType.CHART],
    },
    {
      idx: "4",
      type: SlideType.CODE,
      description: slideTypeDescriptions[SlideType.CODE],
      imageSrc: slideTypeImages[SlideType.CODE],
    },
    {
      idx: "5",
      type: SlideType.COMPILER,
      description: slideTypeDescriptions[SlideType.COMPILER],
      imageSrc: slideTypeImages[SlideType.COMPILER],
    },
    {
      idx: "6",
      type: SlideType.CLOSING,
      description: slideTypeDescriptions[SlideType.CLOSING],
      imageSrc: slideTypeImages[SlideType.CLOSING],
    },
  ],
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
        description: slideTypeDescriptions[slideType],
        imageSrc: slideTypeImages[slideType],
      };

      return {
        slides: [...state.slides, newSlide],
      };
    }),
  deleteSlide: (idx: string) =>
    set((state) => ({
      slides: state.slides.filter((slide) => slide.idx !== idx),
    })),
  setSlides: (updateFn: (slides: Array<Slide>) => Array<Slide>) =>
    set((state) => ({
      slides: updateFn(state.slides),
    })),
}));

export default useSlideStore;
