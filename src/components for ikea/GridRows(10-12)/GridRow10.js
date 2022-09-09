import CaretLeftIconGrid10 from "./AllTypesOfIcons/CaretLeftIconGrid10";
import CaretRightIconGrid10 from "./AllTypesOfIcons/CaretRightIconGrid10";
import ten1 from "./GridRow10Images/10.1.jpg";
import ten2 from "./GridRow10Images/10.2.jpg";
import ten3 from "./GridRow10Images/10.3.jpg";
import ten4 from "./GridRow10Images/10.4.jpg";
import ten5 from "./GridRow10Images/10.5.jpg";
import ten6 from "./GridRow10Images/10.6.jpg";
import ten7 from "./GridRow10Images/10.7.jpg";
import "./GridRow10.css";
import ForwardIconforGrid10 from "./AllTypesOfIcons/ForwardIconforGrid10";

const GridRow10 = () => {
  return (
    <>
      <div id="GridBox10Id" className="GridBox10">
        <span className="LeftGrid10">
          <CaretLeftIconGrid10 />
        </span>
        <span className="RightGrid10">
          <CaretRightIconGrid10 />
        </span>

        <div className="Grid10Images">
          <div style={{ position: "relative" }} id="ten0Id" className="ten0">
            <a href="#">
              {" "}
              <p>Explore our guides to sustainable living </p>
            </a>
            <ForwardIconforGrid10/>
          </div>
          <div style={{ position: "relative" }}>
            <img src={ten1} id="ten1Id" className="ten1"></img>
            <span className="ButtonOnImageGrid10-1">Water saving </span>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid10-2">Energy saving </span>
            <img src={ten2} id="ten2Id" className="ten2"></img>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid10-3">Healthier home</span>{" "}
            <img src={ten3} id="ten3Id" className="ten3"></img>
          </div>
          <div style={{ position: "relative" }}>
            <span className="ButtonOnImageGrid10-4"> Reducing waste</span>
            <img src={ten4} id="ten4Id" className="ten4"></img>
          </div>
          <div style={{ position: "relative" }}>
            {" "}
            <span className="ButtonOnImageGrid10-5">
              More sustainable furniture
            </span>
            <img src={ten5} id="ten5Id" className="ten5"></img>
          </div>
          <div style={{ position: "relative" }}>
            {" "}
            <span className="ButtonOnImageGrid10-6">
              More sustainable materials{" "}
            </span>
            <img src={ten6} id="ten6Id" className="ten6"></img>
          </div>
          <div style={{ position: "relative" }}>
            {" "}
            <span className="ButtonOnImageGrid10-7">
              More sustainable food{" "}
            </span>
            <img src={ten7} id="ten7Id" className="ten7"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default GridRow10;
