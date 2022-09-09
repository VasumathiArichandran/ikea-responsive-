import Six1 from "./GridRow6Images/6.1.jpg";
import Six2 from "./GridRow6Images/6.2.jpg";
import Six3 from "./GridRow6Images/6.3.jpg";
import Six4 from "./GridRow6Images/6.4.jpg";
import Six5 from "./GridRow6Images/6.5.jpg";
import Six6 from "./GridRow6Images/6.6.jpg";

import "./GridRow6.css";

import CaretLeftIconGrid6 from "./CaretLeftAndRight/CaretLeftIconGrid6";
import CaretRightIconGrid6 from "./CaretLeftAndRight/CaretRightIconGrid6";
const GridRow6 = () => {
  return (
    <>
      <div id="GridBox6Id" className="GridBox6">
        <span className="LeftGrid6">
          <CaretLeftIconGrid6 />
        </span>
        <span className="RightGrid6">
          <CaretRightIconGrid6 />
        </span>

        <div className="Grid6Images">
          <div style={{ position: "relative" }}>
            <img src={Six1} id="Six1Id" className="Six1"></img>
            <span className="ButtonOnImageGrid61">Textiles </span>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid62">Cookware & tableware </span>
            <img src={Six2} id="Six2Id" className="Six2"></img>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid63">Decoration</span>{" "}
            <img src={Six3} id="Six3Id" className="Six3"></img>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid64">
              {" "}
              Shoe rack and clothes stand
            </span>
            <img src={Six4} id="Six4Id" className="Six4"></img>
          </div>
          <div style={{ position: "relative" }}>
            {" "}
            <span className="ButtonOnImageGrid65">Home electronics</span>
            <img src={Six5} id="Six5Id" className="Six5"></img>
          </div>
          <div style={{ position: "relative" }}>
            {" "}
            <span className="ButtonOnImageGrid66">Lighting </span>
            <img src={Six6} id="Six6Id" className="Six6"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default GridRow6;
