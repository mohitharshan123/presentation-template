import { useState } from "react";

import Editor from "@monaco-editor/react";
import TitleAndContent from "../../components/TitleAndContent";
import { SLIDE_TYPE_DESCRIPTIONS, SLIDE_TYPE_TITLES } from "../../constants";

const CodeEditorSlide: React.FC = () => {
  const [value, setCode] = useState<string>();

  const handleOnChange = (action?: string, data?: string) => {
    // Define a mapping of actions to functions
    const actionHandlers: Record<string, (data?: string) => void> = {
      code: (data) => setCode(data),
    };

    // Use early return if the action is not recognized
    if (!action || !actionHandlers[action]) {
      console.warn("Case not handled!", action, data);
      return;
    }

    // Execute the corresponding handler
    actionHandlers[action](data);
  };

  return (
    <div className="flex flex-col gap-10">
      <TitleAndContent
        title={SLIDE_TYPE_TITLES.COMPILER}
        content={SLIDE_TYPE_DESCRIPTIONS.COMPILER}
      />
      <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
        <Editor
          height="56vh"
          width={`100%`}
          language="python"
          value={value}
          theme="oceanic-next"
          defaultValue="// Write your code here"
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};
export default CodeEditorSlide;
