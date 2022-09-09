import Four1 from "./GridRow4Images/4.1.jpg";
import Four2 from "./GridRow4Images/4.2.jpg";
import "./GridRow4.css";

const GridRow4 = () => {
  return (
    <>
      <div id="GridBox4Id" className="GridBox4">
        <img src={Four1} id="Four1Id" className="Four1" ></img>
        <img src={Four2} id="Four2Id" className="Four2" ></img>
      </div>
    </>
  );
};
export default GridRow4;
