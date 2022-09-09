import "./GridRow3InstaBar.css";
import TeaCup from "./InstaInsideProductsImages/1.1.jpg";
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
import CancelIconGrid3InstaClose from "./CancelIconGrid3InstaClose";

const GridRow3InstaBar = () => {
  function LoginBoxOpenHandler1() {
    document.getElementById("LoginBoxId3").classList.add("showLoginBox3");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");

    var LastscrollTop3 = document.getElementById("LoginBoxId3").scrollTop;
    LastscrollTop3 = 0;
    document.getElementById("LoginBoxId3").scrollTop = LastscrollTop3 + 0;
  }
  return (
    <>
      {/*LOGIN ICON   */}

      <img
        src={Three1}
        id="Three1Id"
        className="Three1"
        onClick={LoginBoxOpenHandler1}
      ></img>
      <span id="LoginBoxId3" className="HideLoginBox3">
        <div id="stickyContainerId" className="stickyContainer">
          <div className="LogoContainer">
            <h2> Featured on Instagram</h2>
            <CancelIconGrid3InstaClose />{" "}
          </div>
        </div>
        <h2>@whimsyhome</h2>
        <img src={Three1} id="Three1Id" className="Three1"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
        <h2>@anuhomebook</h2>
        <img src={Three2} id="Three2Id" className="Three2"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
        <h2>@one.bhk</h2>
        <img src={Three3} id="Three3Id" className="Three3"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
        <h2>@mysortedhome</h2>
        <img src={Three4} id="Three4Id" className="Three4"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>{" "}
        <h2>@_tasveerz_</h2>{" "}
        <img src={Three5} id="Three5Id" className="Three5"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
        <h2>@jaindeepika2022</h2>
        <img src={Three6} id="Three6Id" className="Three6"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
        <h2>@our.bellway.alder</h2>
        <img src={Three7} id="Three7Id" className="Three7"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
        <h2>@hi.arvindmali</h2>
        <img src={Three8} id="Three8Id" className="Three8"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
        <h2>@kozynest</h2>
        <img src={Three9} id="Three9Id" className="Three9"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
        <h2>@rishalmita</h2>
        <img src={Three10} id="Three10Id" className="Three10"></img>
        <div className="Individual">
          <div className="IndividualImg">
            <img src={TeaCup} id="TeaCupId" className="TeaCupId"></img>
          </div>
          <div>
            <h5>IKEA products in this photo</h5>
            <h6>VARDAGEN </h6>
            <p>Teacup with saucer, 26 cl (9 oz)</p>
            <p>Rs.329 stars(7)</p>
          </div>
        </div>
      </span>
    </>
  );
};
export default GridRow3InstaBar;
