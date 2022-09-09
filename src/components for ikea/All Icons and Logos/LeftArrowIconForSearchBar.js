import BackDropHandlerFunction from "../SearchBar/BackDropHandlerFunction";
const LeftArrowIconForSearchBar = () => {
  function BackDropHandlerFunctionHere() {
    document
      .getElementById("LeftArrowIconForSearchBarId")
      .classList.remove("LeftArrowIconForSearchBarShow");
    document.getElementById("BackDrop").classList.remove("menuBackDropHandler");
    document
      .getElementById("ContainerFor700To1199pxId")
      .classList.remove("justforfunBackDrop");
    document
      .getElementById("SearchBarId")
      .classList.remove("justforfunBackDrop");

    document
      .getElementById("SearchBarId")
      .classList.remove("SearchBarBackDropHandler");

    document.getElementById("myDropdown").classList.remove("show");
    document.getElementById("WrapperBlockId").classList.remove("WrapperBlock");
    //document.getElementById("myInput").classList.remove("newOneOnClick");

    document
      .getElementById("SearchBoxFullId")
      .classList.remove("SearchOnClick");
    document.getElementById("InputFieldId").classList.remove("SearchOnClick");
    document
      .getElementById("SearchBoxFullId")
      .classList.remove("SearchOnClick2");

    document.getElementById("BackDrop").classList.remove("menuBackDropHandler");
    document.getElementById("MenuBoxId").classList.remove("showMenuBox");
    document.getElementById("LoginBoxId").classList.remove("showLoginBox");

    document.getElementById("LoginBoxId3").classList.remove("showLoginBox3");
    document.getElementById("BackDrop").classList.remove("menuBackDropHandler");

    // document.getElementById("loginUl").classList.remove("showLogin");

    // document.getElementById("LoadingId").classList.add("LoadingHiddenMode");
    // document.getElementById("LoadingId").classList.remove("Loading");


      var searchBox = document.getElementById("SearchBarId");
      var searchBox2 = document.getElementById("SearchBoxFullId");

      var searchBox1 = document.getElementById("ContainerFor700To1199pxId");
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 0) {
        searchBox2.classList.add("SearchBoxFullUp");
      }
      else{
        searchBox2.classList.remove("SearchBoxFullUp");
      }
   
  
  }
  return (
    <svg
      id="LeftArrowIconForSearchBarId"
      className="LeftArrowIconForSearchBar"
      onClick={BackDropHandlerFunctionHere}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "30px",
        height: "30px",

        padding: "0.1rem",
      }}
      fill="#000000"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="216"
        y1="128"
        x2="40"
        y2="128"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <polyline
        points="112 56 40 128 112 200"
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></polyline>
    </svg>
  );
};

export default LeftArrowIconForSearchBar;
