import TitleAndContent from "../../components/TitleAndContent";
import { SLIDE_TYPE_DESCRIPTIONS, SLIDE_TYPE_TITLES } from "../../constants";

const ClosingSlide: React.FC = ({}) => {
  return (
    <TitleAndContent
      title={SLIDE_TYPE_TITLES.CLOSING}
      content={SLIDE_TYPE_DESCRIPTIONS.CLOSING}
    />
  );
};

export default ClosingSlide;
