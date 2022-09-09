import LoginIcon from "../All Icons and Logos/LoginIcon";
import LoginCancelIcon from "./CancelIcon";
import IkeaFamilyForwarIcon from "./ForwardIcon";
import "./LoginBar.css";

const LoginBarHandler = () => {
  function LoginBoxOpenHandler() {
    document.getElementById("LoginBoxId").classList.add("showLoginBox");
    document.getElementById("BackDrop").classList.add("menuBackDropHandler");
    // document
    // .getElementById("BackDrop")
    // .classList.replace("removeMenuBackDropHandler", "menuBackDropHandler");
  }

  return (
    <>
      {/*LOGIN ICON   */}
      <a className="loginIconHandler" href="#" onClick={LoginBoxOpenHandler}>
        <LoginIcon />
        <p className="HeyJLoginWord">Hej! Log in or sign up</p>
      </a>

      <div id="LoginBoxId" className="HideLoginBox">
        <div className="CancelBlock">
          <div className="justSomeSpaceForXIcon"></div>
          <LoginCancelIcon />
        </div>

        {/*hey j with login button   */}
        <div className="HejWordAlignment">
          Hej
          <div className="LoginToButton">
            <a className="LoginButtonLink" href="#">
              Log in
            </a>
          </div>
        </div>

        {/*IKEA FAMILY FORWARD   */}
        <div className="JoinIkeaFamilyLoginContainer">
          <a href="#" className="JoinIkeaFamilyLogin">
            <div>
              <h6>Join IKEA Family</h6>
              <p>
                Get access to a number of member benefits. Enjoy guaranteed
                discounts, free workshops, exclusive previews and a lot more
                when you join. It's free!
              </p>
            </div>
          </a>

          <a id="JoinIkeaFamilyForwardLink" href="#">
            <IkeaFamilyForwarIcon />
          </a>
        </div>

        {/*IKEA BUSINESS FORWARD   */}
        <div className="JoinIkeaBusinessLoginContainer">
          <a href="#" className="JoinIkeaBusinessLogin">
            <div>
              <h6>Join IKEA Business Network</h6>
              <p>
                Get easy access to services, offers and benefits to help your
                business needs. Together, we can help your business to grow.
                It's free
              </p>
            </div>
          </a>

          <a id="JoinIkeaBusinessForwardLink" href="#">
            <IkeaFamilyForwarIcon />
          </a>
        </div>

        <div className="LoginDownChoices">
          <li className="LoginDownPurchaseList">
            <a className="LoginDownPurchaseLink" href="#">
              Purchase history
            </a>
          </li>
          <li className="LoginDownPurchaseList">
            <a className="LoginDownPurchaseLink" href="#">
              Shopping list
            </a>
          </li>
          <li className="LoginDownPurchaseList">
            <a className="LoginDownPurchaseLink" href="#">
              Planners
            </a>
          </li>
        </div>
      </div>
    </>
  );
};
export default LoginBarHandler;
