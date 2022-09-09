const OnCancelClearFn = () => {
  /*********************
   * **When user clicks Cancel icon clears the input value and bring
   * back original dropdown*
   * */

  /* bring back original icons in position**/
  document
    .getElementById("LeftArrowIconForSearchBarId")
    .classList.add("LeftArrowIconForSearchBarShow2");
 
  document
    .getElementById("cancelIconId")
    .classList.replace("CancelIcon", "CancelIconHidden");

  document
    .getElementById("SearchBarIconId")
    .classList.replace("SearchBarIcon", "SearchBarIconHidden");
  document
    .getElementById("CameraIconId")
    .classList.replace("CameraIconHidden", "CameraIcon");
  document
    .getElementById("SearchBarIconToShrinkId")
    .classList.replace("SearchBarIconToShrinkHidden", "SearchBarIcon2Shrink");

  document
    .getElementById("InputFieldId")
    .classList.remove("InputFieldMovesLeft");

  //   document
  //     .getElementById("iconToShrinkId")
  //     .classList.replace("iconToShrink", "searchIconToShrink");

  document.getElementById("SearchBoxFullId").classList.remove("SearchOnClick");
  document.getElementById("InputFieldId").classList.remove("SearchOnClick");
  document.getElementById("SearchBoxFullId").classList.remove("SearchOnClick2");

  document.getElementById("verticalId").classList.remove("verticalLine");

  /**************FOR PHONES SEARCH BAR WHEN MOVES UP */
  // document
  //   .getElementById("iconToReplace")
  //   .classList.replace("newTwoToMoveUpDisappear", "newTwoToMoveUp");
  // document
  //   .getElementById("iconToShrinkId")
  //   .classList.replace("iconToShrinkMovesUp", "searchIconToShrinkMovesUp");

  //   document
  //   .getElementById("iconToRemove")
  //   .classList.replace("iconToRightMovesUp", "searchRemovableMovesUp");

  //   document
  //   .getElementById("cancelIcon")
  //   .classList.replace("deleteCancelMovesUp", "hideitMovesUp");

  //   document.getElementById("vertical").classList.remove("verticalLineMovesUp");

  /*********************
      bring
     * back original dropdown*
     * */

  var input, filter, a, i;
  input = document.getElementById("InputFieldId");
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

export default OnCancelClearFn;
