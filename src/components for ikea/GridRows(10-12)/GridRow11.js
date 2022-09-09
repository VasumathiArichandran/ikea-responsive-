import CaretLeftIconGrid11 from "./AllTypesOfIcons/CaretLeftIconGrid11";
import CaretRightIconGrid11 from "./AllTypesOfIcons/CaretRightIconGrid11";
import El1 from "./GridRow11Images/11.1.jpg";
import El2 from "./GridRow11Images/11.2.jpg";
import El3 from "./GridRow11Images/11.3.jpg";
import El4 from "./GridRow11Images/11.4.jpg";
import El5 from "./GridRow11Images/11.5.jpg";
import El6 from "./GridRow11Images/11.6.jpg";
import El7 from "./GridRow11Images/11.7.jpg";
import El8 from "./GridRow11Images/11.8.jpg";
import El9 from "./GridRow11Images/11.9.jpg";
import El10 from "./GridRow11Images/11.10.jpg";
import El11 from "./GridRow11Images/11.11.jpg";
import El12 from "./GridRow11Images/11.12.jpg";
/********************************************************* */
import El13 from "./GridRow11Images/11.13.jpg";
import El14 from "./GridRow11Images/11.14.jpg";
import El15 from "./GridRow11Images/11.15.jpg";
import El16 from "./GridRow11Images/11.16.jpg";
import El17 from "./GridRow11Images/11.17.jpg";
import El18 from "./GridRow11Images/11.18.jpg";
import El19 from "./GridRow11Images/11.19.jpg";
import El20 from "./GridRow11Images/11.20.jpg";
import El21 from "./GridRow11Images/11.21.jpg";
import El22 from "./GridRow11Images/11.22.jpg";
import El23 from "./GridRow11Images/11.23.jpg";
import El24 from "./GridRow11Images/11.24.jpg";
import "./GridRow11(300-599px).css";
import "./GridRow11.css";
const GridRow11 = () => {
  /******************************************************************************************* */

  function OpenAll() {
    document
      .getElementById("ImageHeadings3Id")
      .classList.add("ImageHeadings3OnClick");
    document
      .getElementById("GridBox11ImagesId")
      .classList.remove("GridBox11ImagesHide");
    document
      .getElementById("GridBox11ImagesId")
      .classList.add("GridBox11ImagesShow");
    document
      .getElementById("ImageHeadings3Id")
      .classList.remove("ImageHeadings3OnClick");
    document
      .getElementById("ImageHeadings1Id")
      .classList.add("ImageHeadings1OnClick");
    document
      .getElementById("ImageHeadings3Id")
      .classList.remove("ImageHeadings3OnClick");
    document
      .getElementById("ImageHeadings2Id")
      .classList.remove("ImageHeadings2OnClick");
    // document
    //   .getElementById("GridBox11ImagesId")
    //   .classList.replace("GridBox11ImagesHide", "GridBox11ImagesShow");
    document
      .getElementById("GridBox11Images2Id")
      .classList.replace("GridBox11Images2Show", "GridBox11Images2Hide");
    document
      .getElementById("GridBox11Images3Id")
      .classList.replace("GridBox11Images3Show", "GridBox11Images3Hide");
  }
  function OpenBedRoom() {
    document
      .getElementById("GridBox11Images3Id")
      .classList.replace("GridBox11Images3Show", "GridBox11Images3Hide");
    document
      .getElementById("GridBox11ImagesId")
      .classList.add("GridBox11ImagesHide");
    document
      .getElementById("ImageHeadings1Id")
      .classList.remove("ImageHeadings1OnClick");
    document
      .getElementById("ImageHeadings2Id")
      .classList.add("ImageHeadings2OnClick");

    document
      .getElementById("ImageHeadings3Id")
      .classList.remove("ImageHeadings3OnClick");
    document
      .getElementById("GridBox11Images2Id")
      .classList.replace("GridBox11Images2Hide", "GridBox11Images2Show");
  }
  function OpenLivingRoom() {
    document
      .getElementById("ImageHeadings1Id")
      .classList.remove("ImageHeadings1OnClick");
    document
      .getElementById("ImageHeadings2Id")
      .classList.remove("ImageHeadings2OnClick");

    document
      .getElementById("ImageHeadings3Id")
      .classList.add("ImageHeadings3OnClick");
    document
      .getElementById("GridBox11ImagesId")
      .classList.add("GridBox11ImagesHide");
    document
      .getElementById("GridBox11Images2Id")
      .classList.replace("GridBox11Images2Show", "GridBox11Images2Hide");
    document
      .getElementById("GridBox11Images3Id")
      .classList.replace("GridBox11Images3Hide", "GridBox11Images3Show");
  }

  function LoadMoreImages() {
    document
      .getElementById("LoadMoreButtonId")
      .classList.add("LoadMoreButtonHide");
    document
      .getElementById("LoadMoreId")
      .classList.replace("LoadMoreHide", "LoadMoreShow");
  }

  function ScrollFunctionGrid11() {
    var lastScrollTop = 0;

    var LeftIcon = document.getElementById("LeftGrid11Id");
    var RightIcon = document.getElementById("RightGrid11Id");

    var scrollLeft = document.getElementById("GridBox11Id").scrollLeft;
    var scrollBarWidth = document.getElementById("GridBox11Id").offsetWidth;
    var scrollWidth = document.getElementById("GridBox11Id").scrollWidth;

    if (scrollLeft > lastScrollTop) {
      LeftIcon.classList.add("LeftIconGrid11OnScroll");
    } else {
      LeftIcon.classList.remove("LeftIconGrid11OnScroll");
    }

    if (scrollLeft + 1 + scrollBarWidth >= scrollWidth) {
      RightIcon.classList.add("RightIconGrid11OnScroll");
    } else {
      RightIcon.classList.remove("RightIconGrid11OnScroll");
    }
  }
  return (
    <>
      <div
        id="GridBox11Id"
        className="GridBox11"
        onScroll={ScrollFunctionGrid11}
      >
        <span id="LeftGrid11Id" className="LeftGrid11">
          <CaretLeftIconGrid11 />
        </span>
        <span id="RightGrid11Id" className="RightGrid11">
          <CaretRightIconGrid11 />
        </span>
        <p
          id="ImageHeadings1Id"
          className="ImageHeadings1 ImageHeadings1OnClick"
          onClick={OpenAll}
        >
          All
        </p>
        <p
          id="ImageHeadings2Id"
          className="ImageHeadings2"
          onClick={OpenBedRoom}
        >
          Bedroom
        </p>
        <p
          id="ImageHeadings3Id"
          className="ImageHeadings3"
          onClick={OpenLivingRoom}
        >
          Living room{" "}
        </p>
        <p className="ImageHeadings4">Kitchen</p>
        <p className="ImageHeadings5">Workspace</p>
        <p className="ImageHeadings6">Outdoor</p>
        <p className="ImageHeadings7">Bathroom</p>
        <p className="ImageHeadings8">Baby & children room</p>
        <p className="ImageHeadings9">Dining</p>
        <p className="ImageHeadings10">Hallway</p>
        <p className="ImageHeadings11">Laundry</p>
        <p className="ImageHeadings12">Accessories</p>
      </div>
      {/* <div id="WholeAllGrid11ContainerId" className="WholeAllGrid11Container"> */}
      <div id="GridBox11ImagesId" className="GridBox11ImagesShow">
        <img src={El1} id="El1Id" className="El1"></img>
        <img src={El2} id="El2Id" className="El2"></img>
        <img src={El3} id="El3Id" className="El3"></img>
        <img src={El4} id="El4Id" className="El4"></img>
        <img src={El5} id="El5Id" className="El5"></img>
        <img src={El6} id="El6Id" className="El6"></img>
        <img src={El7} id="El7Id" className="El7"></img>
        <img src={El8} id="El8Id" className="El8"></img>
        <img src={El9} id="El9Id" className="El9"></img>
        <img src={El10} id="El10Id" className="El10"></img>
        <img src={El11} id="El11Id" className="El11"></img>
        <img src={El12} id="El12Id" className="El12"></img>
      </div>

      <div id="GridBox11Images2Id" className="GridBox11Images2Hide">
        <img src={El2} id="El1Id" className="El1"></img>
        <img src={El4} id="El2Id" className="El2"></img>
        <img src={El6} id="El3Id" className="El3"></img>
        <img src={El8} id="El4Id" className="El4"></img>
        <img src={El10} id="El5Id" className="El5"></img>
        <img src={El2} id="El6Id" className="El6"></img>
        <img src={El1} id="El7Id" className="El7"></img>
        <img src={El3} id="El8Id" className="El8"></img>
        <img src={El5} id="El9Id" className="El9"></img>
        <img src={El7} id="El10Id" className="El10"></img>
        <img src={El9} id="El11Id" className="El11"></img>
        <img src={El11} id="El12Id" className="El12"></img>
      </div>

      <div id="GridBox11Images3Id" className="GridBox11Images3Hide">
        <img src={El3} id="El1Id" className="El1"></img>
        <img src={El6} id="El2Id" className="El2"></img>
        <img src={El9} id="El3Id" className="El3"></img>
        <img src={El12} id="El4Id" className="El4"></img>
        <img src={El2} id="El5Id" className="El5"></img>
        <img src={El5} id="El6Id" className="El6"></img>
        <img src={El8} id="El7Id" className="El7"></img>
        <img src={El11} id="El8Id" className="El8"></img>
        <img src={El1} id="El9Id" className="El9"></img>
        <img src={El4} id="El10Id" className="El10"></img>
        <img src={El7} id="El11Id" className="El11"></img>
        <img src={El10} id="El12Id" className="El12"></img>
      </div>
      <div className="LoadMoreButtonPosition">
        <p
          id="LoadMoreButtonId"
          className="LoadMoreButtonShow"
          onClick={LoadMoreImages}
        >
          Load 12 More{" "}
        </p>
      </div>
      <div id="LoadMoreId" className="LoadMoreHide">
        <img src={El13} id="El13Id" className="El13"></img>
        <img src={El14} id="El14Id" className="El14"></img>
        <img src={El15} id="El15Id" className="El15"></img>
        <img src={El16} id="El16Id" className="El16"></img>
        <img src={El17} id="El17Id" className="El17"></img>
        <img src={El18} id="El18Id" className="El18"></img>
        <img src={El19} id="El19Id" className="El19"></img>
        <img src={El20} id="El20Id" className="El20"></img>
        <img src={El21} id="El21Id" className="El21"></img>
        <img src={El22} id="El22Id" className="El22"></img>
        <img src={El23} id="El23Id" className="El23"></img>
        <img src={El24} id="El24Id" className="El24"></img>
      </div>
      {/* </div> */}
    </>
  );
};
export default GridRow11;
