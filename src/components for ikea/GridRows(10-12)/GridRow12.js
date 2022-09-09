import ClickAndCollectIcon from "./AllTypesOfIcons/ClickAndCollectIcon";
import PlanningToolsIcon from "./AllTypesOfIcons/PlanningToolsIcon";
import ReturnHeartIcon from "./AllTypesOfIcons/ReturnHeartIcon";
import SafetyIcon from "./AllTypesOfIcons/SafetyIcon";
import "./GridRow12.css";
const GridRow12 = () => {
  return (
    <>
      <div id="GridBox12Id" className="GridBox12">
        <div className="Box121">
          <div className="Box121Details">
            <div className="Icon1">
              <ReturnHeartIcon />
            </div>
            <p className="Box121DetailsHeading">Returns policy</p>
            <p>Exceptions during COVID19</p>

            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="Box122">
          <div className="Box122Details">
            <div className="Icon2">
              <ClickAndCollectIcon />
            </div>
            <p className="Box122DetailsHeading">Click & collect</p>
            <p>Safe click and collect shopping at IKEA Stores!</p>

            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="Box123">
          <div className="Box123Details">
            <div className="Icon3">
              <PlanningToolsIcon />
            </div>
            <p className="Box123DetailsHeading">Planning tools</p>
            <p>Our planning tools will help you give shape to your ideas</p>

            <a href="#">Learn more</a>
          </div>
        </div>
        <div className="Box124">
          <div className="Box124Details">
            <div className="Icon4">
              <SafetyIcon />{" "}
            </div>
            <p className="Box124DetailsHeading">Safety at IKEA store</p>
            <p>Safe shopping experience at IKEA</p>

            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default GridRow12;
