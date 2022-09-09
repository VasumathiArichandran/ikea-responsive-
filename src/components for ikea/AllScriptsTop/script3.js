const clearFunction = () => {
  /*********************
   * **When user clicks Cancel icon clears the input value and bring
   * back original dropdown*
   * */

  /* bring back original icons in position**/
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

  document.getElementById("myInput").classList.remove("newOneOnClick");
  document.getElementById("myInput").classList.remove("newOnKeyUp");
  document.getElementById("vertical").classList.remove("verticalLine");

  /**************FOR PHONES SEARCH BAR WHEN MOVES UP */
  document
    .getElementById("iconToReplace")
    .classList.replace("newTwoToMoveUpDisappear", "newTwoToMoveUp");
  document
    .getElementById("iconToShrinkId")
    .classList.replace("iconToShrinkMovesUp", "searchIconToShrinkMovesUp");

    document
    .getElementById("iconToRemove")
    .classList.replace("iconToRightMovesUp", "searchRemovableMovesUp");

    document
    .getElementById("cancelIcon")
    .classList.replace("deleteCancelMovesUp", "hideitMovesUp");

    document.getElementById("vertical").classList.remove("verticalLineMovesUp");

  /*********************
    bring
   * back original dropdown*
   * */

  var input, filter, a, i;
  input = document.getElementById("myInput");
  input.value = "";
  filter = input.value;
  var div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");

  for (i = 0; i < a.length; i++) {
    var txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    }
  }
};

export default clearFunction;
