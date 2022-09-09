import CameraIcon from "../All Icons and Logos/CameraIcon";
import SearchBarIconToShrink from "../All Icons and Logos/SearchBarIconToShrink";
import SearchBarIcon from "../All Icons and Logos/SearchBarIcon";

import DropDownIcon from "../IkeaTop/searchIconForDropDown";
import BackDropHandlerFn from "./BackDropHandlerFn";
import "./SearchBar(300-599px).css";

import "./SearchBar(600-699px).css";
import "./SearchBar(700-899px).css";
import "./SearchBar(900-1199px).css";
import "./SearchBar.css";
import SearchBarFilterFunction from "./SearchBarFilterFunction";
import CancelIcon from "../All Icons and Logos/CancelIcon";

import IkeaIcon from "../All Icons and Logos/IkeaIcon";
import MenuBar from "../MenuBar/MenuBar";

import CartIcon from "../All Icons and Logos/CartIcon";
import OrderIcon from "../All Icons and Logos/OrderIcon";
import LoginBarHandler from "../LoginBar/LoginBar";
import GridRow1 from "../GridRows/GridRow1";
import GridRow2 from "../GridRows/GridRow2";
import GridRow3 from "../GridRows/GridRow3";
import GridRow4 from "../GridRows(4-6)/GridRow4";
import GridRow5 from "../GridRows(4-6)/GridRow5";
import GridRow6 from "../GridRows(4-6)/GridRow6";
import GridRow7 from "../GridRows(7-9)/GridRow7";
import GridRow8 from "../GridRows(7-9)/GridRow8";
import GridRow9 from "../GridRows(7-9)/GridRow9";
import GridRow10 from "../GridRows(10-12)/GridRow10";
import GridRow11 from "../GridRows(10-12)/GridRow11";
import GridRow12 from "../GridRows(10-12)/GridRow12";
import GridRow13 from "../GridRows(13-15)/GridRow13";
import GridRow14 from "../GridRows(13-15)/GridRow14";
import GridRow15 from "../GridRows(13-15)/GridRow15";
import LeftArrowIconForSearchBar from "../All Icons and Logos/LeftArrowIconForSearchBar";
import NewSearchIcon from "../All Icons and Logos/NewSearchIcon";

// https://portfolio-webflow-html-website-template.webflow.io/

const SearchBar = () => {
  var lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    var searchBox = document.getElementById("SearchBarId");
    var searchBox2 = document.getElementById("SearchBoxFullId");

    var searchBox1 = document.getElementById("ContainerFor700To1199pxId");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      searchBox.classList.add("justforfun1");
      searchBox2.classList.add("SearchBoxFullUp");
      // searchBox.classList.replace("justforfun", "justforfunScroll");
      searchBox1.classList.add("ContainerFor700To1199pxUp");
    } else {
      searchBox.classList.remove("justforfun1");
      searchBox2.classList.add("SearchBoxFullUp");
      // searchBox.classList.replace("justforfunScroll", "justforfun");
      searchBox1.classList.remove("ContainerFor700To1199pxUp");
      console.log(scrollTop);
      console.log(lastScrollTop);
    }
    if (scrollTop == 0) {
      searchBox2.classList.remove("SearchBoxFullUp");
      document
        .getElementById("NewSearchIconId")
        .classList.replace("NewSearchIcon", "NewSearchIconHidden");
    } else {
      document
        .getElementById("NewSearchIconId")
        .classList.replace("NewSearchIconHidden", "NewSearchIcon");
    }
    lastScrollTop = scrollTop;
  });

  function TurnGrey() {
    document.getElementById("SearchBoxFullId").classList.add("InputField1");

    document
      .getElementById("LeftArrowIconForSearchBarId")
      .classList.replace(
        "LeftArrowIconForSearchBarShow1",
        "LeftArrowIconForSearchBarShow2"
      );
    document
      .getElementById("InputFieldId")
      .classList.replace("InputField", "InputField2");
  }
  function ReturnNormal() {
    document
      .getElementById("InputFieldId")
      .classList.replace("InputField2", "InputField");

    document.getElementById("SearchBoxFullId").classList.remove("InputField1");

    document
      .getElementById("LeftArrowIconForSearchBarId")
      .classList.replace(
        "LeftArrowIconForSearchBarShow2",
        "LeftArrowIconForSearchBarShow1"
      );
  }
  function TurnWhite() {
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

    document
      .getElementById("WrapperBlockId")
      .classList.replace("WrapperBlockHidden", "WrapperBlock");
  }

  function ScrollFunction() {
    var lastScrollTop = 0;

    var LeftIcon = document.getElementById("CaretLeftIconId");
    var RightIcon = document.getElementById("CaretRightIconId");

    var scrollLeft = document.getElementById("ForGrid2Id").scrollLeft;
    var scrollBarWidth = document.getElementById("ForGrid2Id").offsetWidth;

    if (scrollLeft > lastScrollTop) {
      LeftIcon.classList.add("LeftIconGrid2OnScroll");
    } else {
      LeftIcon.classList.remove("LeftIconGrid2OnScroll");
    }
    var scrollWidth = document.getElementById("ForGrid2Id").scrollWidth;
    console.log(scrollLeft);
    console.log(scrollBarWidth);
    console.log(scrollWidth);

    if (scrollLeft + 2 + scrollBarWidth >= scrollWidth) {
      RightIcon.classList.add("RightIconGrid2OnScroll");
    } else {
      RightIcon.classList.remove("RightIconGrid2OnScroll");
    }
  }

  function ScrollFunctionGrid3() {
    var lastScrollTop = 0;

    var LeftIcon = document.getElementById("CaretLeftIconIdGrid3");
    var RightIcon = document.getElementById("CaretRightIconIdGrid3");

    var scrollLeft = document.getElementById("ForGrid3Id").scrollLeft;
    var scrollBarWidth = document.getElementById("ForGrid3Id").offsetWidth;
    if (scrollLeft > lastScrollTop) {
      LeftIcon.classList.add("LeftIconGrid3OnScroll");
    } else {
      LeftIcon.classList.remove("LeftIconGrid3OnScroll");
    }

    var scrollWidth = document.getElementById("ForGrid3Id").scrollWidth;
    console.log(scrollLeft);
    console.log(scrollBarWidth);
    console.log(scrollWidth);
    if (scrollLeft + 1 + scrollBarWidth >= scrollWidth) {
      RightIcon.classList.add("RightIconGrid3OnScroll");
    } else {
      RightIcon.classList.remove("RightIconGrid3OnScroll");
    }

    // var scrollWidth1 = scrollWidth / 10;

    // document.getElementById("ForGrid3Id").scrollLeft =
    //   (LastscrollLeft + scrollWidth) / 10;

    // var LastscrollLeft = document.getElementById("ForGrid3Id").scrollLeft;
    // var scrollWidth = document.getElementById("ForGrid3Id").scrollWidth;

    //document.getElementById("ForGrid3Id").scrollLeft = (scrollWidth / 10);
  }

  function ScrollFunctionGrid5() {
    var lastScrollTop = 0;

    var LeftIcon = document.getElementById("CaretLeftIconIdGrid5");
    var RightIcon = document.getElementById("CaretRightIconIdGrid5");

    var scrollLeft = document.getElementById("ForGrid5Id").scrollLeft;
    var scrollBarWidth = document.getElementById("ForGrid3Id").offsetWidth;
    var scrollWidth = document.getElementById("ForGrid5Id").scrollWidth;

    if (scrollLeft > lastScrollTop) {
      LeftIcon.classList.add("LeftIconGrid5OnScroll");
    } else {
      LeftIcon.classList.remove("LeftIconGrid5OnScroll");
    }

    var scrollHeight = document.getElementById("ForGrid5Id").scrollHeight;
    console.log(scrollHeight);
    if (scrollLeft + 1 + scrollBarWidth >= scrollWidth) {
      RightIcon.classList.add("RightIconGrid5OnScroll");
    } else {
      RightIcon.classList.remove("RightIconGrid5OnScroll");
    }
  }

  function ScrollFunctionGrid6() {
    var lastScrollTop = 0;

    var LeftIcon = document.getElementById("CaretLeftIconIdGrid6");
    var RightIcon = document.getElementById("CaretRightIconIdGrid6");

    var scrollLeft = document.getElementById("ForGrid6Id").scrollLeft;
    var scrollBarWidth = document.getElementById("ForGrid6Id").offsetWidth;
    var scrollWidth = document.getElementById("ForGrid6Id").scrollWidth;

    if (scrollLeft > lastScrollTop) {
      LeftIcon.classList.add("LeftIconGrid6OnScroll");
    } else {
      LeftIcon.classList.remove("LeftIconGrid6OnScroll");
    }

    var scrollHeight = document.getElementById("ForGrid6Id").scrollHeight;
    console.log(scrollHeight);
    if (scrollLeft + 1 + scrollBarWidth >= scrollWidth) {
      RightIcon.classList.add("RightIconGrid6OnScroll");
    } else {
      RightIcon.classList.remove("RightIconGrid6OnScroll");
    }
  }

  function ScrollFunctionGrid10() {
    var lastScrollTop = 0;

    var LeftIcon = document.getElementById("CaretLeftIconIdGrid10");
    var RightIcon = document.getElementById("CaretRightIconIdGrid10");

    var scrollLeft = document.getElementById("ForGrid10Id").scrollLeft;
    var scrollBarWidth = document.getElementById("ForGrid10Id").offsetWidth;
    var scrollWidth = document.getElementById("ForGrid10Id").scrollWidth;

    if (scrollLeft > lastScrollTop) {
      LeftIcon.classList.add("LeftIconGrid10OnScroll");
    } else {
      LeftIcon.classList.remove("LeftIconGrid10OnScroll");
    }

    if (scrollLeft + 1 + scrollBarWidth >= scrollWidth) {
      RightIcon.classList.add("RightIconGrid10OnScroll");
    } else {
      RightIcon.classList.remove("RightIconGrid10OnScroll");
    }
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          id="BackDrop"
          // className="ToDefault"
          onClick={BackDropHandlerFn}
        ></div>
        <div
          id="ContainerFor700To1199pxId"
          className="ContainerFor700To1199pxDown"
        >
          <div id="MenuBarStickyId" className="MenuBarSticky">
            <MenuBar />
          </div>
          <div className="divForSticky">
            <div id="SearchBarId" className="justforfun">
              <div className="IkeaIconHandler">
                <IkeaIcon />
              </div>

              <div className="InputAndDropDown">
                <span id="WrapperBlockId">
                  <div
                    onMouseEnter={TurnGrey}
                    onMouseLeave={ReturnNormal}
                    id="SearchBoxFullId"
                    className="SearchBoxFull"
                  >
                    <div className="InputAndSearchIconLeft">
                      <div>
                        <SearchBarIconToShrink />
                        <LeftArrowIconForSearchBar />
                      </div>

                      <input
                        id="InputFieldId"
                        className="InputField"
                        placeholder="What are you looking for?"
                        type="text"
                        onClick={TurnWhite}
                        onKeyUp={SearchBarFilterFunction}
                        // onDoubleClick={BackToNormal}
                      ></input>
                    </div>
                    <div className="AllRightIcons">
                      <CancelIcon />
                      {/* VERTICAL LINE */}
                      <div id="verticalId"></div>
                      <div style={{ display: "flex" }}>
                        <div id="CameraIconId" className="CameraIcon">
                          <CameraIcon />
                        </div>
                        <div
                          id="SearchBarIconId"
                          className="SearchBarIconHidden"
                        >
                          <SearchBarIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
                {/* <div className="dropdown"> */}
                <div id="myDropdown" className="dropdown-content">
                  {" "}
                  <a href="#about" id="borderForDropDown1">
                    <DropDownIcon /> sofa
                  </a>
                  <a href="#base" id="borderForDropDown2">
                    <DropDownIcon /> table
                  </a>
                  <a href="#blog" id="borderForDropDown3">
                    <DropDownIcon /> chair
                  </a>
                  <a href="#contact" id="borderForDropDown4">
                    <DropDownIcon /> mirror table
                  </a>
                  <a href="#custom" id="borderForDropDown5">
                    <DropDownIcon /> almirah
                  </a>
                  <a href="#support" id="borderForDropDown6">
                    <DropDownIcon /> closet
                  </a>
                  <a href="#tools" id="borderForDropDown7">
                    <DropDownIcon /> dining table
                  </a>
                </div>
              </div>
              <div>
                <NewSearchIcon />
              </div>
              <div className="RightThreeIcons">
                <div>
                  <LoginBarHandler />
                </div>
                <div>
                  <CartIcon />
                </div>
                <div>
                  <OrderIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ForGrid">
          <GridRow1 />
        </div>
        <div id="ForGrid2Id" className="ForGrid2" onScroll={ScrollFunction}>
          <GridRow2 />
        </div>
        <div className="Grid3Headings">
          <h2>See how our products look in real homes!</h2>
          <p>
            Share your photos on Instagram with #IKEAlifeathome or tag
            @ikea.india to get a chance to be seen here!
          </p>
        </div>
        <div
          id="ForGrid3Id"
          className="ForGrid3"
          onScroll={ScrollFunctionGrid3}
        >
          <GridRow3 />
        </div>
        <div id="ForGrid4Id" className="ForGrid4">
          <GridRow4 />
        </div>
        <div className="Grid5Headings">
          <h2>Top furniture categories</h2>
        </div>
        <div
          id="ForGrid5Id"
          className="ForGrid5"
          onScroll={ScrollFunctionGrid5}
        >
          <GridRow5 />
        </div>
        <div className="Grid6Headings">
          <h2>Top accessories categories</h2>
        </div>
        <div
          id="ForGrid6Id"
          className="ForGrid6"
          onScroll={ScrollFunctionGrid6}
        >
          <GridRow6 />
        </div>
        <div className="Grid7Headings">
          <h2>Ikea Family Offers</h2>
        </div>
        <div id="ForGrid7Id" className="ForGrid7">
          <GridRow7 />
        </div>
        <div id="ForGrid8Id" className="ForGrid8">
          <GridRow8 />
        </div>
        <div id="ForGrid9Id" className="ForGrid9">
          <GridRow9 />
        </div>
        <div className="Grid10Headings">
          <h2>Shop products for a more sustainable home</h2>
        </div>
        <div
          id="ForGrid10Id"
          className="ForGrid10"
          onScroll={ScrollFunctionGrid10}
        >
          <GridRow10 />
        </div>
        <div className="Grid11Headings">
          <h2>More ideas and inspirations</h2>
        </div>
        <div id="ForGrid11Id" className="ForGrid11">
          <GridRow11 />
        </div>
        <div id="ForGrid12Id" className="ForGrid12">
          <GridRow12 />
        </div>
        <div className="Grid13Headings">
          <h2>Important Information</h2>
        </div>
        <div id="ForGrid13Id" className="ForGrid13">
          <GridRow13 />
        </div>
        <div id="ForGrid14Id" className="ForGrid14">
          <GridRow14 />
        </div>
        <div id="ForGrid15Id" className="ForGrid15">
          <GridRow15 />
        </div>
      </div>
    </>
  );
};
export default SearchBar;
