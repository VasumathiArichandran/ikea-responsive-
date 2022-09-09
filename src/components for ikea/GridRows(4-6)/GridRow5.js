import Five1 from "./GridRow5Images/5.1.jpg";
import Five2 from "./GridRow5Images/5.2.jpg";
import Five3 from "./GridRow5Images/5.3.jpg";
import Five4 from "./GridRow5Images/5.4.jpg";
import Five5 from "./GridRow5Images/5.5.jpg";
import Five6 from "./GridRow5Images/5.6.jpg";
import "./GridRow5.css";

import CaretLeftIconGrid5 from "../GridRows(4-6)/CaretLeftAndRight/CaretLeftIconGrid5";
import CaretRightIconGrid5 from "../GridRows(4-6)/CaretLeftAndRight/CaretRightIconGrid5";
const GridRow5 = () => {
  return (
    <>
      <div id="GridBox5Id" className="GridBox5">
        <span className="LeftGrid5">
          <CaretLeftIconGrid5 />
        </span>
        <span className="RightGrid5">
          <CaretRightIconGrid5 />
        </span>

        <div className="Grid5Images">
          <div style={{ position: "relative" }}>
            <img src={Five1} id="Five1Id" className="Five1"></img>
            <span className="ButtonOnImageGrid51">Sofas & armchairs </span>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid52">Beds and mattresses </span>
            <img src={Five2} id="Five2Id" className="Five2"></img>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid53">Storage & organisation</span>{" "}
            <img src={Five3} id="Five3Id" className="Five3"></img>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid54">Table and desks</span>
            <img src={Five4} id="Five4Id" className="Five4"></img>
          </div>
          <div style={{ position: "relative" }}>
            {" "}
            <span className="ButtonOnImageGrid55">Chairs </span>
            <img src={Five5} id="Five5Id" className="Five5"></img>
          </div>
          <div style={{ position: "relative" }}>
            {" "}
            <span className="ButtonOnImageGrid56">Children's furniture </span>
            <img src={Five6} id="Five6Id" className="Five6"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default GridRow5;
