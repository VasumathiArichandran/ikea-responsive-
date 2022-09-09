const HeartIcon = () => {
  return (
    <svg
      id="HeartIconId"
      className="HeartIconShow"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "50rem",
        display: "block",
        padding: "0.6rem",
      }}
      fill="#ffffff"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></path>
    </svg>
  );
};
export default HeartIcon;
