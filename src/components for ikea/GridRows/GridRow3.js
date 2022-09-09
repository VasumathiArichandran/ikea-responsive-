import Three1 from "./AllImages/Grid3.1.jpg";
import Three2 from "./AllImages/Grid3.2.jpg";
import Three3 from "./AllImages/Grid3.3.jpg";
import Three4 from "./AllImages/Grid3.4.jpg";
import Three5 from "./AllImages/Grid3.5.jpg";
import Three6 from "./AllImages/Grid3.6.jpg";
import Three7 from "./AllImages/Grid3.7.jpg";
import Three8 from "./AllImages/Grid3.8.jpg";
import Three9 from "./AllImages/Grid3.9.jpg";
import Three10 from "./AllImages/Grid3.10.jpg";
import "./GridRow3(300-599px).css";
import "./GridRow3(600-).css";
import "./GridRow3InstaBar.css";
import CaretLeftIconGrid3 from "./CaretLeftIconGrid3";
import CaretRightIconGrid3 from "./CaretRightIconGrid3";
import GridRow3InstaBar from "./GridRow3InstaBar";
const GridRow3 = () => {
  function LoginBoxOpenHandler2() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;
    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + LastscrollHeight * 1;
  }
  function LoginBoxOpenHandler3() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;
    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + LastscrollHeight * 2;
  }
  function LoginBoxOpenHandler4() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;
    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + LastscrollHeight * 3;
  }
  function LoginBoxOpenHandler5() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;
    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + LastscrollHeight * 4;
  }
  function LoginBoxOpenHandler6() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;
    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + LastscrollHeight * 5;
  }
  function LoginBoxOpenHandler7() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;
    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + LastscrollHeight * 6;
  }
  function LoginBoxOpenHandler8() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;
    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + LastscrollHeight * 7;
  }
  function LoginBoxOpenHandler9() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;
    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + LastscrollHeight * 8;
  }
  function LoginBoxOpenHandler10() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");

    var scrollBarWidth = document.getElementById("LoginBoxId3").offsetHeight;
    var LastscrollHeight =
      document.getElementById("LoginBoxId3").scrollHeight / 10;

    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop =
      LastscrollTop3 + scrollBarWidth + LastscrollHeight * 9;
    console.log(scrollBarWidth);
  }
  return (
    <>
      <div id="GridBox3Id" className="GridBox3">
        <span className="LeftGrid3">
          <CaretLeftIconGrid3 />
        </span>
        <span className="RightGrid3">
          <CaretRightIconGrid3 />
        </span>

        <div className="Grid3InstaImages">
          <GridRow3InstaBar />
          <img
            src={Three2}
            id="Three2Id"
            className="Three2"
            onClick={LoginBoxOpenHandler2}
          ></img>
          <img
            src={Three3}
            id="Three3Id"
            className="Three3"
            onClick={LoginBoxOpenHandler3}
          ></img>
          <img
            src={Three4}
            id="Three4Id"
            className="Three4"
            onClick={LoginBoxOpenHandler4}
          ></img>
          <img
            src={Three5}
            id="Three5Id"
            className="Three5"
            onClick={LoginBoxOpenHandler5}
          ></img>
          <img
            src={Three6}
            id="Three6Id"
            className="Three6"
            onClick={LoginBoxOpenHandler6}
          ></img>
          <img
            src={Three7}
            id="Three7Id"
            className="Three7"
            onClick={LoginBoxOpenHandler7}
          ></img>
          <img
            src={Three8}
            id="Three8Id"
            className="Three8"
            onClick={LoginBoxOpenHandler8}
          ></img>
          <img
            src={Three9}
            id="Three9Id"
            className="Three9"
            onClick={LoginBoxOpenHandler9}
          ></img>
          <img
            src={Three10}
            id="Three10Id"
            className="Three10"
            onClick={LoginBoxOpenHandler10}
          ></img>
        </div>
      </div>
    </>
  );
};
export default GridRow3;
