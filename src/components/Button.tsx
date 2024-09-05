type ButtonProps = { label: string; onClick?: () => void };

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    id="hs-dropdown-default"
    type="button"
    className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
    aria-haspopup="menu"
    aria-expanded="false"
    aria-label="Dropdown"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
