import seven1 from "./GridRow7Images/7.1.jpg";
import seven2 from "./GridRow7Images/7.2.jpg";
import seven3 from "./GridRow7Images/7.3.jpg";
import seven4 from "./GridRow7Images/7.4.jpg";
import seven12 from "./GridRow7Images/7.12.jpg";
import seven22 from "./GridRow7Images/7.22.jpg";
import seven32 from "./GridRow7Images/7.32.jpg";
import seven42 from "./GridRow7Images/7.42.jpg";
import "./GridRow7(300-599px).css";
import "./GridRow7(600-899px).css";
import "./GridRow7(900-1500px).css";
import HeartIcon from "../All Icons and Logos/HeartIcon";
import HeartIconFilled from "../All Icons and Logos/HeartIconFilled";
import LikedBoxCancelIcon from "./CaretLeftAndRight/LikedBoxCancelIcon";
const GridRow7 = () => {
  function HeartFillShowBox() {
    const collection = document.getElementsByClassName("HeartIconShow");

    collection[0].style.display = "none";

    const collection1 = document.getElementsByClassName("HeartIconFilledHide");

    collection1[0].style.opacity = "1";
    collection1[0].style.display = "block";
    document.getElementById("LikedBoxId").classList.add("ShowLikedBox");
    const nodes = document.getElementsByClassName("ProductName");
    document.getElementById("LikedBoxLineId").innerHTML =
      nodes[0].innerHTML + " was added to your shopping bag";
  }
  function HeartFillShowBox2() {
    const collection = document.getElementsByClassName("HeartIconShow");

    collection[1].style.display = "none";

    const collection1 = document.getElementsByClassName("HeartIconFilledHide");

    collection1[1].style.opacity = "1";
    collection1[1].style.display = "block";
    document.getElementById("LikedBoxId").classList.add("ShowLikedBox");
    const nodes = document.getElementsByClassName("ProductName");
    document.getElementById("LikedBoxLineId").innerHTML =
      nodes[1].innerHTML + " was added to your shopping bag";
  }
  function HeartFillShowBox3() {
    const collection = document.getElementsByClassName("HeartIconShow");

    collection[2].style.display = "none";

    const collection1 = document.getElementsByClassName("HeartIconFilledHide");

    collection1[2].style.opacity = "1";
    collection1[2].style.display = "block";
    document.getElementById("LikedBoxId").classList.add("ShowLikedBox");
    const nodes = document.getElementsByClassName("ProductName");
    document.getElementById("LikedBoxLineId").innerHTML =
      nodes[2].innerHTML + " was added to your shopping bag";
  }
  function HeartFillShowBox4() {
    const collection = document.getElementsByClassName("HeartIconShow");
    collection[3].style.display = "none";
    const collection1 = document.getElementsByClassName("HeartIconFilledHide");
    collection1[3].style.opacity = "1";
    collection1[3].style.display = "block";
    document.getElementById("LikedBoxId").classList.add("ShowLikedBox");
    const nodes = document.getElementsByClassName("ProductName");
    document.getElementById("LikedBoxLineId").innerHTML =
      nodes[3].innerHTML + " was added to your shopping bag";
  }

  return (
    <>
      <div id="GridBo72Id" className="GridBox7">
        <div id="seven1Id" className="seven1">
          <img src={seven1}></img>
          <img src={seven12} id="seven12Id" className="seven12"></img>
          <div id="seven1DetailsId" className="seven1Details">
            <h4 className="ProductHeading">IKEA Family price</h4>
            <p id="ProductNameId1" className="ProductName">
              APELHÖSTMAL
            </p>
            <p className="ProductContent">
              Curtains, 1 pair, 145x150 cm (57x59 ")
            </p>
            <p className="ProductNormalPrice">Normal price Rs.999</p>
            <p className="ProductDiscountPrice">
              Rs.<span>799</span>
            </p>
            <div className="StarIcon">
              * * * * * <span>(5)</span>
            </div>
            <p className="ProductMore">More options</p>
            <p className="ProductPriceValidity">
              Price valid Aug 16 - Aug 31 or while supply lasts
            </p>
            <div className="HeartIconClickable" onClick={HeartFillShowBox}>
              <HeartIcon />
              <HeartIconFilled />
            </div>
          </div>{" "}
        </div>

        <div id="seven2Id" className="seven2">
          <img src={seven2}></img>
          <img src={seven22} id="seven22Id" className="seven22"></img>
          <div className="seven2Details">
            <h4 className="ProductHeading">IKEA Family price</h4>
            <p className="ProductName">KNASTRIGT</p>
            <p className="ProductContent">Tealight holder, 3 cm (1 ¼ ")</p>
            <p className="ProductNormalPrice">Normal priceRs.249</p>
            <p className="ProductDiscountPrice">
              Rs.<span>199</span>
            </p>
            <div className="StarIcon">
              * * * * <span>(15)</span>
            </div>
            <p className="ProductMore">More options</p>
            <p className="ProductPriceValidity">
              Price valid Aug 16 - Aug 31 or while supply lasts
            </p>
            <div className="HeartIconClickable" onClick={HeartFillShowBox2}>
              <HeartIcon />
              <HeartIconFilled />
            </div>
          </div>{" "}
        </div>
        <div id="seven3Id" className="seven3">
          <img src={seven3}></img>
          <img src={seven32} id="seven32Id" className="seven32"></img>
          <div className="seven3Details">
            <h4 className="ProductHeading">IKEA Family price</h4>
            <p className="ProductName">FEJKA</p>
            <p className="ProductContent">
              Artificial potted plant, 12 cm (4 ¾ ")
            </p>
            <p className="ProductNormalPrice">Normal priceRs.799 </p>
            <p className="ProductDiscountPrice">
              Rs.<span>649</span>
            </p>
            <div className="StarIcon">
              * * * * * <span>(3)</span>
            </div>

            <p className="ProductPriceValidity">
              Price valid Aug 16 - Aug 31 or while supply lasts
            </p>
            <div className="HeartIconClickable" onClick={HeartFillShowBox3}>
              <HeartIcon />
              <HeartIconFilled />
            </div>
          </div>{" "}
        </div>

        <div id="seven4Id" className="seven4">
          <img src={seven4}></img>
          <img src={seven42} id="seven42Id" className="seven42"></img>
          <div className="seven4Details">
            <h4 className="ProductHeading">IKEA Family price</h4>
            <p className="ProductName">URSPRUNGLIG</p>
            <p className="ProductContent">Cushion cover, 50x50 cm (20x20 ")</p>
            <p className="ProductNormalPrice">Normal price Rs.249</p>
            <p className="ProductDiscountPrice">
              Rs.<span>179</span>
            </p>
            <div className="StarIcon">
              * * <span>(1)</span>
            </div>

            <p className="ProductPriceValidity">
              Price valid Aug 16 - Aug 31 or while supply lasts
            </p>
            <div className="HeartIconClickable" onClick={HeartFillShowBox4}>
              <HeartIcon />
              <HeartIconFilled />
            </div>
          </div>{" "}
        </div>
      </div>

      <div id="LikedBoxId" className="HideLikedBox">
        <p id="LikedBoxLineId" className="LikedBoxLine">
          {" "}
        </p>
        <a className="LikedBoxLink" href="#">
          show
        </a>
        <div className="LikedBoxCancelIcon">
          <LikedBoxCancelIcon />
        </div>
      </div>
      <div className="ShowAllButtonContainer" >
        <a  href="#" className="ShowAllButton">Show all </a></div>
    </>
  );
};
export default GridRow7;
