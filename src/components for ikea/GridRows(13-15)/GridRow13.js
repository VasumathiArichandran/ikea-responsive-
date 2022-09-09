import "./GridRow13.css";
import Thr1 from "./GridRow13Images/13.1.jpg";
import Thr2 from "./GridRow13Images/13.2.jpg";

const GridRow13 = () => {
  return (
    <>
      <div id="GridBox13Id" className="GridBox13">
        <div className="Thirteen1">
          <p className="Thirteen1Headings">Coronavirus(Covid-19) information</p>
          <img
            src={Thr1}
            className="Thr1"
            id="Thr1Id"
      
          ></img>
          <a href="#" className="LearnMoreButton1">
            Learn More
          </a>
        </div>
        <div className="Thirteen2">
          <p className="Thirteen2Headings">Product recalls</p>
          <img src={Thr2} className="Thr2" id="Thr2Id"></img>
          <a href="#" className="LearnMoreButton2">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};
export default GridRow13;
