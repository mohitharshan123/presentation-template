import { CodeBlock, dracula } from "react-code-blocks";
import { SLIDE_TYPE_DESCRIPTIONS, SLIDE_TYPE_TITLES } from "../../constants";
import TitleAndContent from "../../components/TitleAndContent";

const DUMMY_CODE = `
    def copy_file(source_path, destination_path):
        try:
            with open(source_path, 'r') as source_file:
                content = source_file.read()

            with open(destination_path, 'w') as destination_file:
                destination_file.write(content)

            print("File copied successfully!")

        except FileNotFoundError:
            print("Source file not found.")
        except IOError as e:
            print(f"Error occurred: {e}")
    `;

const CodeBlockSlide = () => (
  <div className="flex flex-col gap-4">
    <TitleAndContent
      title={SLIDE_TYPE_TITLES.CODE}
      content={SLIDE_TYPE_DESCRIPTIONS.CODE}
    />
    <CodeBlock
      text={DUMMY_CODE}
      language="python"
      theme={dracula}
      showLineNumbers
    />
  </div>
);

export default CodeBlockSlide;
