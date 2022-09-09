/*
        SCRIPT STARTS HERE
      */

const myFunction = () => {
  document.getElementById("LoadingId").classList.remove("LoadingHiddenMode");
  document.getElementById("LoadingId").classList.add("Loading");

  document.getElementById("myApp").classList.add("App");
  document.getElementById("myApp").classList.replace("default", "App");
  document.getElementById("myDropdown").classList.add("show");
  document.getElementById("wrap").classList.add("wrapper");

  document.getElementById("wrap").classList.replace("show2", "wrapper");

  document.getElementById("myInput").classList.add("newOneOnClick");

  /************************************FOR PHONES****************************** */
  document.getElementById("LoadingId").classList.replace("Loading","LoadingMovesUp");
  document.getElementById("myInput").classList.add("searchBarMovesUp");
  document
    .getElementById("iconToReplace")
    .classList.replace("newTwo", "newTwoToMoveUp");

  document
    .getElementById("iconToShrinkId")
    .classList.replace("searchIconToShrink", "searchIconToShrinkMovesUp");

  document
    .getElementById("iconToRemove")
    .classList.replace("searchRemovable", "searchRemovableMovesUp");

    document
    .getElementById("cancelIcon")
    .classList.replace("hideit", "hideitMovesUp");

   

};

export default myFunction;
