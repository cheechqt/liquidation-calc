import { BsFillPlusSquareFill } from "react-icons/bs";

function PlusButton({ onClick, size = 50 }) {
  return (
    <button
      type="button"
      className="rounded-[3px] cursor-pointer flex-center transition-all duration-300 hover:translate-y-[-2px] ml-1 p-0"
      onClick={onClick}
    >
      <BsFillPlusSquareFill
        className="text-yellow-500"
        size={size}
    />
    </button>
  );
}

export default PlusButton;
