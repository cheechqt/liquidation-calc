import { BsXSquareFill } from "react-icons/bs";

function XButton({ onClick, size = 50 }) {
  return (
    <button
      type="button"
      className="rounded-[3px] cursor-pointer flex-center transition-all duration-300 hover:translate-y-[-2px] ml-1 p-0"
      onClick={onClick}
    >
      <BsXSquareFill
        className="text-red-500"
        size={size}
      />
    </button>
  );
}

export default XButton;
