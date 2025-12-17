

const Button = ({ text, color, bgColor, size, borderRadius, width }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} py-3 px-6 cursor-pointer hover:opacity-90 ease-in-out duration-300 w-${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
