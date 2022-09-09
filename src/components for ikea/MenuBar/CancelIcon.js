const CancelIconCloseMenu = () => {
  function closeMenuBoxHandler() {
    document.getElementById("MenuBoxId").classList.remove("showMenuBox");
    document.getElementById("MenuBoxId").classList.add("MenuBox");
    document.getElementById("BackDrop").classList.remove("menuBackDropHandler");
  }

  return (
    <a href="#">
      <svg
        onClick={closeMenuBoxHandler}
        id="closeMenuBoxHandlerId"
        className="closeMenuBox"
        style={{ width: "36px", height: "36px" }}
        xmlns="http://www.w3.org/2000/svg"
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
export default CancelIconCloseMenu;
