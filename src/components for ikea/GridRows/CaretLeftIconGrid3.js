const CaretLeftIconGrid3 = () => {
  function moveLeftGrid3() {
    var LastscrollLeft = document.getElementById("ForGrid3Id").scrollLeft;
    var scrollWidth = document.getElementById("ForGrid3Id").scrollWidth;
    scrollWidth = scrollWidth / 10;

    document.getElementById("ForGrid3Id").scrollLeft =
      LastscrollLeft - scrollWidth;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="LeftIconGrid3"
      id="CaretLeftIconIdGrid3"
      onClick={moveLeftGrid3}
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
export default CaretLeftIconGrid3;
