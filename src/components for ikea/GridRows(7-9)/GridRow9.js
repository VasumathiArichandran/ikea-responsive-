import nine1 from "./GridRow9Images/9.1.jpg";
import nine2 from "./GridRow9Images/9.2.jpg";
import "./GridRow9.css";
const GridRow9 = () => {
  return (
    <>
      <div id="GridBox9Id" className="GridBox9">
        <div className="Box91">
          <div className="Box91Details">
            <h2>Download the IKEA app</h2>
            <p>
              Explore a wide range of affordable, well-designed and functional
              home furnishing solutions for every room in your home - at your
              fingertips.
            </p>
          </div>
          <img src={nine1} id="nine1Id" className="nine1"></img>
        </div>
        <div className="Box92">
          <div className="Box91Details">
            <h2>Clearance sale</h2>
            <p>
              Get up to 50% off on selected products. Discounts will be applied
              directly at checkout. Offers valid for a limited time and till
              stocks last.
            </p>
          </div>
          <img src={nine2} id="nine2Id" className="nine2"></img>
        </div>
      </div>
    </>
  );
};
export default GridRow9;
