const CaretRightIconGrid6 = () => {
  function moveRightGrid6() {
    var LastscrollLeft = document.getElementById("ForGrid6Id").scrollLeft;
    console.log(LastscrollLeft);
    document.getElementById("ForGrid6Id").scrollLeft = LastscrollLeft + 770;
    console.log(document.getElementById("ForGrid6Id").scrollLeft);
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="RightIconGrid6"
      id="CaretRightIconIdGrid6"
      onClick={moveRightGrid6}
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
export default CaretRightIconGrid6;
