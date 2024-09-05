import TitleAndContent from "../../components/TitleAndContent";
import { SLIDE_TYPE_DESCRIPTIONS, SLIDE_TYPE_TITLES } from "../../constants";

const OpeningSlide: React.FC = () => (
  <TitleAndContent
    title={SLIDE_TYPE_TITLES.OPENING}
    content={SLIDE_TYPE_DESCRIPTIONS.OPENING}
  />
);

export default OpeningSlide;
