const CaretRightIconGrid11 = () => {
  function moveRightGrid11() {
    var LastscrollLeft = document.getElementById("GridBox11Id").scrollLeft;
    console.log(LastscrollLeft);
    document.getElementById("GridBox11Id").scrollLeft = LastscrollLeft + 770;
    console.log(document.getElementById("GridBox11Id").scrollLeft);
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="RightIconGrid11"
      id="CaretRightIconIdGrid11"
      onClick={moveRightGrid11}
      style={{
        width: "36px",
        height: "36px",
        background: "white",
        borderRadius: "50rem",
        padding: "0.6rem",
      }}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <polyline
        points="96 48 176 128 96 208"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polyline>
    </svg>
  );
};
export default CaretRightIconGrid11;
