import OnCancelClearFn from "../SearchBar/OnCancelClearFn";

const CancelIcon = () => {
  return (
    <a href="#">
      <svg
        onClick={OnCancelClearFn}
        id="cancelIconId"
        className="CancelIconHidden"
        style={{ width: "22px", height: "22px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="200"
          y1="56"
          x2="56"
          y2="200"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="200"
          y1="200"
          x2="56"
          y2="56"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
      </svg>
    </a>
  );
};
export default CancelIcon;
