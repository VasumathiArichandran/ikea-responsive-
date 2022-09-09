const CaretRightIcon = () => {
  function moveRight() {
    var LastscrollLeft = document.getElementById("ForGrid2Id").scrollLeft;

    document.getElementById("ForGrid2Id").scrollLeft = LastscrollLeft + 770;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="RightIconGrid2"
      id="CaretRightIconId"
      onClick={moveRight}
      style={{
        width: "48px",
        height: "48px",
        background: "black",
        borderRadius: "50rem",
        padding: "0.6rem",
      }}
      fill="#ffffff"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <polyline
        points="96 48 176 128 96 208"
        fill="none"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polyline>
    </svg>
  );
};
export default CaretRightIcon;
