const TitleAndContent: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <div className="mt-10">
    {/* Title Section */}
    <div className="mb-4 mt-10">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        {title}
      </h1>
    </div>
    {/* Page Content Section */}
    <div className="flex-1">
      <p className="text-lg text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  </div>
);

export default TitleAndContent;
