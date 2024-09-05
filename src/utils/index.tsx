import { SlideType } from "../types";

/**
 * Returns a title string based on the given slide type.
 *
 * @param slideType - The type of the slide, which is a value from the SlideType enum.
 * @returns The corresponding title string for the given slide type.
 */
export const getTitleFromSlideType = (slideType: SlideType): string => {
  // Define a map of slide types to titles
  const slideTypeTitles: Record<SlideType, string> = {
    [SlideType.OPENING]: "Opening Slide",
    [SlideType.IMAGE]: "Image Slide",
    [SlideType.CHART]: "Chart Slide",
    [SlideType.CODE]: "Code Slide",
    [SlideType.COMPILER]: "Compiler Slide",
    [SlideType.CLOSING]: "Closing Slide",
  };

  // Return the title from the map or a default value if the type is not found
  return slideTypeTitles[slideType] || "Unknown Slide Type";
};

/**
 * Returns the image source URL based on the given slide type.
 *
 * @param slideType - The type of the slide, which is a value from the SlideType enum.
 * @returns The image source URL corresponding to the given slide type.
 */
export const getImageSrcFromSlideType = (slideType: SlideType): string => {
  // Map of slide types to image source URLs
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

  // Return the image source from the map or a default value if the type is not found
  return slideTypeImages[slideType] || "https://example.com/default-image.png";
};
