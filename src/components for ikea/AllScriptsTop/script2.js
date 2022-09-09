const filterFunction = () => {
  /*********************
   * **When user types something**
   * */

  document
    .getElementById("iconToRemove")
    .classList.replace("searchRemovable", "iconToRight");
  document
    .getElementById("iconToReplace")
    .classList.replace("newTwo", "newTwoToDisappear");

  document
    .getElementById("cancelIcon")
    .classList.replace("hideit", "deleteCancel");

  document
    .getElementById("iconToShrinkId")
    .classList.replace("searchIconToShrink", "iconToShrink");

  document.getElementById("myInput").classList.add("newOnKeyUp");
  document.getElementById("vertical").classList.add("verticalLine");

  document.getElementById("LoadingId").classList.add("LoadingHiddenMode");
  document.getElementById("LoadingId").classList.remove("Loading");

  /********************FOR PHONES SEARCH BAR WHEN MOVES UP */

  document
    .getElementById("LoadingId")
    .classList.add("LoadingHiddenModeMovesUp");
  document.getElementById("LoadingId").classList.remove("LoadingMovesUp");
  document
    .getElementById("iconToReplace")
    .classList.replace("newTwoToMoveUp", "newTwoToMoveUpDisappear");

  document
    .getElementById("iconToShrinkId")
    .classList.replace("searchIconToShrinkMovesUp", "iconToShrinkMovesUp");

  document
    .getElementById("iconToRemove")
    .classList.replace("searchRemovableMovesUp", "iconToRightMovesUp");

  document
    .getElementById("cancelIcon")
    .classList.replace("hideitMovesUp", "deleteCancelMovesUp");
  //document.getElementById("vertical").classList.remove("verticalLine");
  //document.getElementById("vertical").classList.add("verticalLineMovesUp");
  document
    .getElementById("vertical")
    .classList.replace("verticalLine", "verticalLineMovesUp");
  /************** ************************************************/

  var input, filter, a, i;
  input = document.getElementById("myInput");
  filter = input.value;
  var div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    var txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }

  if (txtValue.toLowerCase().indexOf(filter) > -1) {
    document
      .getElementById("cancelIcon")
      .classList.replace("deleteCancel", "hideit");

    document
      .getElementById("iconToRemove")
      .classList.replace("iconToRight", "searchRemovable");
    document
      .getElementById("iconToReplace")
      .classList.replace("newTwoToDisappear", "newTwo");

    document
      .getElementById("iconToShrinkId")
      .classList.replace("iconToShrink", "searchIconToShrink");

    document.getElementById("myInput").classList.remove("newOnKeyUp");
    document.getElementById("vertical").classList.remove("verticalLine");

    /******************************FOR PHONES WHEN SEARCH BAR MOVES UP */

    document
      .getElementById("iconToRemove")
      .classList.replace("iconToRightMovesUp", "searchRemovableMovesUp");
    document
      .getElementById("iconToReplace")
      .classList.replace("newTwoToMoveUpDisappear", "newTwoToMoveUp");

    document
      .getElementById("iconToShrinkId")
      .classList.replace("iconToShrinkMovesUp", "searchIconToShrinkMovesUp");

    document
      .getElementById("cancelIcon")
      .classList.replace("deleteCancelMovesUp", "hideitMovesUp");
    document.getElementById("vertical").classList.remove("verticalLineMovesUp");
  }
};

export default filterFunction;
