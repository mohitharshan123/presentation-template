import { SlideType } from "../types";

/**
 * A record of descriptions for different slide types.
 *
 * This object maps each `SlideType` to a descriptive string that provides information
 * about the purpose and content of that type of slide. It helps users understand
 * what each slide type is used for in the presentation.
 *
 * @example
 * // Get the description for an image slide
 * const imageSlideDescription = SLIDE_TYPE_DESCRIPTIONS[SlideType.IMAGE];
 * // "An image slide is used to display a visual element, such as a photograph or illustration, to support or enhance the presentation's content."
 *
 * @see {@link ../types} For the definition of `SlideType`.
 */
export const SLIDE_TYPE_DESCRIPTIONS: Record<SlideType, string> = {
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

/**
 * A record of titles for different slide types.
 *
 * This object maps each `SlideType` to a human-readable title that represents the type of slide.
 * It provides a clear and concise label for each slide type, useful for display purposes or
 * categorizing slides in a user interface.
 *
 * @example
 * // Get the title for a chart slide
 * const chartSlideTitle = SLIDE_TYPE_TITLES[SlideType.CHART];
 * // "Chart Slide"
 *
 * @see {@link ../types} For the definition of `SlideType`.
 */
export const SLIDE_TYPE_TITLES: Record<SlideType, string> = {
  [SlideType.OPENING]: "Opening Slide",
  [SlideType.IMAGE]: "Image Slide",
  [SlideType.CHART]: "Chart Slide",
  [SlideType.CODE]: "Code Slide",
  [SlideType.COMPILER]: "Compiler Slide",
  [SlideType.CLOSING]: "Closing Slide",
};

/**
 * A record of image URLs associated with different slide types.
 *
 * This object maps each `SlideType` to a URL of an image that visually represents
 * that type of slide. These images can be used for preview thumbnails, icons, or
 * other visual aids in the user interface.
 *
 * @example
 * // Get the image URL for a code slide
 * const codeSlideImage = SLIDE_TYPE_IMAGES[SlideType.CODE];
 * // "https://image.slidesdocs.com/responsive-images/background/abstract-code-blocks-rendered-in-3d-within-the-virtual-space-powerpoint-background_79acb22bd5__960_540.jpg"
 *
 * @see {@link ../types} For the definition of `SlideType`.
 */
export const SLIDE_TYPE_IMAGES: Record<SlideType, string> = {
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

export const DUMMY_IMAGES: string[] = [
  "https://t3.ftcdn.net/jpg/07/48/11/52/240_F_748115240_4DVNDQhGilBbEstgx8OEtMv6CVpx3RvW.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small/4k-beautiful-colorful-abstract-wallpaper-photo.jpg",
  "https://static.vecteezy.com/system/resources/thumbnails/032/242/170/small/beautiful-waterfall-flowers-water-nature-waterfall-hd-wallpaper-ai-generated-free-photo.jpg",
  "https://cdn.pixabay.com/photo/2023/05/23/10/45/girl-8012460_640.jpg",
];
