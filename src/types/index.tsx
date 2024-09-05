export enum SlideType {
  OPENING = "OPENING",
  IMAGE = "IMAGE",
  CHART = "CHART",
  CODE = "CODE",
  COMPILER = "COMPILER",
  CLOSING = "CLOSING",
}

export type Slide = {
  idx: string;
  type: SlideType;
  title: string;
  description: string;
  imageSrc?: string;
};
