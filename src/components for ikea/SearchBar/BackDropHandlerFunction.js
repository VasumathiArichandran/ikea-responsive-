const BackDropHandlerFunction = () => {
  document
    .getElementById("LeftArrowIconForSearchBarId")
    .classList.remove("LeftArrowIconForSearchBarShow");
  document.getElementById("BackDrop").classList.remove("menuBackDropHandler");
  document
    .getElementById("ContainerFor700To1199pxId")
    .classList.remove("justforfunBackDrop");
  document.getElementById("SearchBarId").classList.remove("justforfunBackDrop");

  document
    .getElementById("SearchBarId")
    .classList.remove("SearchBarBackDropHandler");

  document.getElementById("myDropdown").classList.remove("show");
  document.getElementById("WrapperBlockId").classList.remove("WrapperBlock");
  //document.getElementById("myInput").classList.remove("newOneOnClick");

  document.getElementById("SearchBoxFullId").classList.remove("SearchOnClick");
  document.getElementById("InputFieldId").classList.remove("SearchOnClick");
  document.getElementById("SearchBoxFullId").classList.remove("SearchOnClick2");

  document.getElementById("BackDrop").classList.remove("menuBackDropHandler");
  document.getElementById("MenuBoxId").classList.remove("showMenuBox");
  document.getElementById("LoginBoxId").classList.remove("showLoginBox");

  document.getElementById("LoginBoxId3").classList.remove("showLoginBox3");
  document.getElementById("BackDrop").classList.remove("menuBackDropHandler");

  // document.getElementById("loginUl").classList.remove("showLogin");

  // document.getElementById("LoadingId").classList.add("LoadingHiddenMode");
  // document.getElementById("LoadingId").classList.remove("Loading");
};
export default BackDropHandlerFunction;
