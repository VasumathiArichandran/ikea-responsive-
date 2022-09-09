const NewSearchIcon = () => {
  function TurnWhite() {
    var searchBox2 = document.getElementById("SearchBoxFullId");

    document
      .getElementById("LeftArrowIconForSearchBarId")
      .classList.add("LeftArrowIconForSearchBarShow");
    document
      .getElementById("LeftArrowIconForSearchBarId")
      .classList.remove("LeftArrowIconForSearchBarShow1");
    document
      .getElementById("LeftArrowIconForSearchBarId")
      .classList.remove("LeftArrowIconForSearchBarShow2");

    document.getElementById("SearchBoxFullId").classList.add("SearchOnClick");
    document.getElementById("InputFieldId").classList.add("SearchOnClick");
    document.getElementById("SearchBoxFullId").classList.add("SearchOnClick2");
    document.getElementById("myDropdown").classList.add("show");

    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    document
      .getElementById("ContainerFor700To1199pxId")
      .classList.add("justforfunBackDrop");
    document.getElementById("SearchBarId").classList.add("justforfunBackDrop");

    document
      .getElementById("SearchBarId")
      .classList.add("SearchBarBackDropHandler");

    // document
    //   .getElementById("BackDrop")
    //   .classList.replace("ToDefault", "BackDropHandler");

    document.getElementById("WrapperBlockId").classList.add("WrapperBlock");
    searchBox2.classList.remove("SearchBoxFullUp");

    document
      .getElementById("WrapperBlockId")
      .classList.replace("WrapperBlockHidden", "WrapperBlock");
  }

  return (
    // <a id="iconToPlace" href="#">
    <svg
      onClick={TurnWhite}
      id="NewSearchIconId"
      className="NewSearchIconHidden"
      // style={{ width: "18px", height: "18px" }}
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle
        cx="116"
        cy="116"
        r="84"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></circle>
      <line
        x1="175.4"
        y1="175.4"
        x2="224"
        y2="224"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
    </svg>
    // </a>
  );
};
export default NewSearchIcon;
