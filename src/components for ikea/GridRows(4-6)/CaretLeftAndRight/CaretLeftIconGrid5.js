const CaretLeftIconGrid5 = () => {
  function moveLeftGrid5() {
    var LastscrollLeft = document.getElementById("ForGrid5Id").scrollLeft;
    document.getElementById("ForGrid5Id").scrollLeft = LastscrollLeft - 770;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="LeftIconGrid5"
      id="CaretLeftIconIdGrid5"
      onClick={moveLeftGrid5}
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
        points="160 208 80 128 160 48"
        fill="none"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      ></polyline>
    </svg>
  );
};
export default CaretLeftIconGrid5;
