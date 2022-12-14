const CaretLeftIconGrid11 = () => {
  function moveLeftGrid11() {
    var LastscrollLeft = document.getElementById("GridBox11Id").scrollLeft;
    document.getElementById("GridBox11Id").scrollLeft = LastscrollLeft - 770;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="LeftIconGrid11"
      id="CaretLeftIconIdGrid11"
      onClick={moveLeftGrid11}
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
        points="160 208 80 128 160 48"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polyline>
    </svg>
  );
};
export default CaretLeftIconGrid11;
