const backdropHandler = () => {
  document.getElementById("myApp").classList.remove("App");
  document.getElementById("myDropdown").classList.remove("show");
  document.getElementById("wrap").classList.remove("wrapper");
  document.getElementById("myInput").classList.remove("newOneOnClick");

  document.getElementById("myApp").classList.remove("menuBackDrop");
  document.getElementById("menuUl").classList.remove("showMenu");

  document.getElementById("loginUl").classList.remove("showLogin");

  document.getElementById("LoadingId").classList.add("LoadingHiddenMode");
  document.getElementById("LoadingId").classList.remove("Loading");

  /**********************FOR PHONES ONCLICKING BACKDROP SEARCH BOX BACH TO ITS NORMAL   */

  document.getElementById("myInput").classList.remove("searchBarMovesUp");
  document
    .getElementById("iconToReplace")
    .classList.replace("newTwoToMoveUp", "newTwo");

  document
    .getElementById("iconToShrinkId")
    .classList.replace("searchIconToShrinkMovesUp", "searchIconToShrink");

  document
    .getElementById("iconToRemove")
    .classList.replace("searchRemovableMovesUp", "searchRemovable");

  document
    .getElementById("cancelIcon")
    .classList.replace("hideitMovesUp", "hideit");
};
export default backdropHandler;
