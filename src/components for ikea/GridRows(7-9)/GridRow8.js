import eight1 from "./GridRow8Images/8.1.jpg";
import eight2 from "./GridRow8Images/8.2.jpg";
import "./GridRow8.css";
const GridRow8 = () => {
  return (
    <>
      <div id="GridBox8Id" className="GridBox8">
        <div className="Box81">
          <img src={eight1} id="eight1Id" className="eight1"></img>
          <a href="3" className="Link81">
            <p>All offers</p>
          </a>
        </div>
        <div className="Box82">
          <img src={eight1} id="eight1Id" className="eight1"></img>
          <a href="3" className="Link82">
            <p>Explore top sellers</p>
          </a>
        </div>
        <div className="Box83">
          <img src={eight2} id="eight2Id" className="eight2"></img>
          <a href="3" className="Link83">
            <p>Celebrate the</p> <span>MeatBall day with us</span>
          </a>
        </div>
      </div>
    </>
  );
};
export default GridRow8;
