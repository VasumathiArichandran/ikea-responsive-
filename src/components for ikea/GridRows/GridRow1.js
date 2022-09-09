import img1 from "./AllImages/1.jpg";
import img2 from "./AllImages/2.jpg";
import img3 from "./AllImages/3.jpg";
import img4 from "./AllImages/4.jpg";
import sale from "./AllImages/sale.jpg";
import "./GridRow1.css";
const GridRow1 = () => {
  return (
    <>
      <div className="GridBox1">
        <img src={sale} className="sale"></img>
        <img src={img1} className="img1"></img>
        <img src={img2} className="img2"></img>
        <img src={img3} className="img3"></img>
        <img src={img4} className="img4"></img>
      </div>
    </>
  );
};
export default GridRow1;
