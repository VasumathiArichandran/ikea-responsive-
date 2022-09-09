import sR1 from "./AllImages/scrollRight1.jpg";
import sR2 from "./AllImages/scrollRight2.jpg";
import sR3 from "./AllImages/scrollRight3.jpg";
import sR4 from "./AllImages/scrollRight4.jpg";
import sR5 from "./AllImages/scrollRight5.jpg";
import sR6 from "./AllImages/scrollRight6.jpg";
import sR7 from "./AllImages/scrollRight7.jpg";
import CaretLeftIcon from "./CaretLeftIcon";
import CaretRightIcon from "./CaretRightIcon";
import Grid2ForwardIcon from "./ForwardIcon";
import Grid2ForwardIconWhite from "./ForwardIconWhite";
import "./GridRow2(300-599px).css";
import "./GridRow2(600-899px).css";
import "./GridRow2.css";

const GridRow2 = () => {
  // const frame = document.getElementById("frame");
  // const frameDoc = frame.contentDocument;
  // const info = document.getElementById("info");

  // const target = frameDoc.getElementById("overview");
  // frameDoc.scrollingElement.scrollTop = target.offsetTop;

  // info.innerText = `Y offset after scrolling: ${frame.contentWindow.pageYOffset} pixels`;

  return (
    <>
      <div id="GridBox2Id" className="GridBox2">
        <span className="Left">
          <CaretLeftIcon />
        </span>
        <span className="Right">
          <CaretRightIcon />
        </span>
        <img src={sR1} id="sR1Id" className="sR1"></img>
        <div className="sR1Details">
          <div className="sR1DetailWritings">
            <h2>
              <a href="#">Smart ideas, small spends!</a>
            </h2>
            <p>
              It's time to rejuvenate your senses by sleeping right and spending
              smart!
            </p>
          </div>
          <div className="ForwardIconGRid2">
            <Grid2ForwardIcon />
          </div>
        </div>
        <img src={sR2} id="sR2Id" className="sR2"></img>
        <div className="sR2Details">
          <div className="sR2DetailWritings">
            <h2>
              <a href="#"> Made in India</a>
            </h2>
            <p>
              Designed by IKEA of Sweden. Bringing quality, design, and
              affordability together.
            </p>
          </div>
          <div className="ForwardIconGRid2">
            <Grid2ForwardIcon />
          </div>
        </div>

        <img src={sR3} id="sR3Id" className="sR3"></img>
        <div className="sR3Details">
          <div className="sR3DetailWritings">
            <h2>
              <a href="#"> Decor for festivities under Rs.999</a>
            </h2>
          </div>
          <div className="ForwardIconGRid2">
            <Grid2ForwardIcon />
          </div>
        </div>

        <img src={sR4} id="sR4Id" className="sR4"></img>
        <div className="sR4Details">
          <div className="sR4DetailWritings">
            <h2>
              <a href="#"> Workspace essentials</a>
            </h2>
            <p>Create a workspace that is just right for you</p>
          </div>
          <div className="ForwardIconGRid2">
            <Grid2ForwardIcon />
          </div>
        </div>
        <img src={sR5} id="sR5Id" className="sR5"></img>
        <div className="sR5Details">
          <div className="sR5DetailWritings">
            <h2>
              <a href="#">New lower price</a>
            </h2>
          </div>
          <div className="ForwardIconGRid2">
            <Grid2ForwardIconWhite />
          </div>
        </div>
        <img src={sR6} id="sR6Id" className="sR6"></img>
        <div className="sR6Details">
          <div className="sR6DetailWritings">
            <h2>
              <a href="#">Furniture under Rs.2999</a>
            </h2>
            <p>Affordable furniture to create a space of your own</p>
          </div>
          <div className="ForwardIconGRid2">
            <Grid2ForwardIcon />
          </div>
        </div>

        <img src={sR7} id="sR7Id" className="sR7"></img>
        <div className="sR7Details">
          {" "}
          <div className="sR7DetailWritings">
            <h2>
              <a href="#">Our lowest price</a>
            </h2>
            <p>Shop our lowest price products</p>
          </div>
          <div className="ForwardIconGRid2">
            <Grid2ForwardIcon />
          </div>
        </div>
      </div>
    </>
  );
};
export default GridRow2;
