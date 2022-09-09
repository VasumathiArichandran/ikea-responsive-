const SearchBarFilterFunction = () => {
  /*********************
   * **When user types something**
   * */

  document
    .getElementById("SearchBarIconToShrinkId")
    .classList.replace("SearchBarIcon2Shrink", "SearchBarIconToShrinkHidden");
  document
    .getElementById("SearchBarIconId")
    .classList.replace("SearchBarIconHidden", "SearchBarIcon");
  document
    .getElementById("CameraIconId")
    .classList.replace("CameraIcon", "CameraIconHidden");

  document
    .getElementById("cancelIconId")
    .classList.replace("CancelIconHidden", "CancelIcon");

  document.getElementById("InputFieldId").classList.add("InputFieldMovesLeft");
  document.getElementById("verticalId").classList.add("verticalLine");

  //document.getElementById("LoadingId").classList.add("LoadingHiddenMode");
  //document.getElementById("LoadingId").classList.remove("Loading");

  // document.getElementById("myInput").classList.add("newOnKeyUp");

  /********************FOR PHONES SEARCH BAR WHEN MOVES UP */

  var input, filter, a, i;
  input = document.getElementById("InputFieldId");
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
      .getElementById("SearchBarIconToShrinkId")
      .classList.replace("SearchBarIconToShrinkHidden", "SearchBarIcon2Shrink");
    document
      .getElementById("SearchBarIconId")
      .classList.replace("SearchBarIcon", "SearchBarIconHidden");
    document
      .getElementById("CameraIconId")
      .classList.replace("CameraIconHidden", "CameraIcon");

    document
      .getElementById("cancelIconId")
      .classList.replace("CancelIcon", "CancelIconHidden");

    document
      .getElementById("InputFieldId")
      .classList.remove("InputFieldMovesLeft");
    document.getElementById("verticalId").classList.remove("verticalLine");
  }
};

export default SearchBarFilterFunction;
