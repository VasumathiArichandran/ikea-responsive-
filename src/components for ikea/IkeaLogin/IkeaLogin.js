// import "./IkeaLogin.css";
// import "./IkeaLoginFor414px.css"
// import "./IkeaLoginFor394px.css"

const IkeaLogin = () => {
  function LoginOpenHandler() {
    document.getElementById("loginUl").classList.add("showLogin");
    document.getElementById("myApp").classList.add("menuBackDrop");
    document
      .getElementById("myApp")
      .classList.replace("removeMenuBackDrop", "menuBackDrop");
  }
  function closeLoginHandler() {
    document.getElementById("loginUl").classList.remove("showLogin");
    document.getElementById("myApp").classList.remove("menuBackDrop");
  }

  return (
    <>
      {/*LOGIN ICON   */}
      <a className="loginIcon" href="#" onClick={LoginOpenHandler}>
        <svg
          style={{ width: "20px", height: "20px" }}
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <circle
            cx="128"
            cy="96"
            r="64"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></circle>
          <path
            d="M31,216a112,112,0,0,1,194,0"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></path>
        </svg>
        Hej! Log in or sign up
      </a>

      <ul id="loginUl" className="LoginUL">
        {/*CANCEL ICON   */}

        <a id="LoginCancelLink" onClick={closeLoginHandler} href="#">
          <svg
            className="loginCancel"
            id="loginCancelId"
            style={{ width: "36px", height: "36px" }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </a>

        {/*hey j with login button   */}
        <div className="Hej">
          Hej
          <a className="LoginLink" href="#">
            <div className="LoginButton">Log in</div>
          </a>
        </div>
        <div className="JoinIkeaFamily">
          <a href="#" className="JoinIkeaFamily">
            <h6>Join IKEA Family</h6>
            <p>
              Get access to a number of member benefits. Enjoy guaranteed
              discounts, free workshops, exclusive previews and a lot more when
              you join. It's free!
            </p>
          </a>
          {/*IKEA FAMILY FORWARD ICON   */}

          <a id="JoinIkeaFamilyForward" href="#">
            <svg
              className="JoinIkeaFamilyForward"
              id="IFForward"
              style={{ width: "36px", height: "36px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></path>
              <line
                x1="200"
                y1="40"
                x2="200"
                y2="216"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
          </a>
        </div>
        <div className="JoinIkeaFamily">
          {/*IKEA BUSINESS FORWARD ICON   */}

          <a id="JoinIkeaBusinessForward" href="#">
            <svg
              className="JoinIkeaBusinessForward"
              id="IBForward"
              style={{ width: "36px", height: "36px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="192"
              height="192"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M188.8,121.2,68.2,47.4A8,8,0,0,0,56,54.3V201.7a8,8,0,0,0,12.2,6.9l120.6-73.8A8,8,0,0,0,188.8,121.2Z"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></path>
              <line
                x1="200"
                y1="40"
                x2="200"
                y2="216"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="24"
              ></line>
            </svg>
          </a>
          <a href="#" className="JoinIkeaFamily">
            <h6>Join IKEA Business Network</h6>
            <p>
              Get easy access to services, offers and benefits to help your
              business needs. Together, we can help your business to grow. It's
              free!
            </p>
          </a>
        </div>

        {/*lIST OF CONTENTS   */}
        <ul className="LoginDownListUL">
          <li className="LoginDownList">
            <a className="LoginDownLink" href="#">
              Purchase history
            </a>
          </li>
          <li className="LoginDownList">
            <a className="LoginDownLink" href="#">
              Shopping list
            </a>
          </li>
          <li className="LoginDownList">
            <a className="LoginDownLink" href="#">
              Planners
            </a>
          </li>
          
        </ul>
      </ul>
    </>
  );
};

export default IkeaLogin;
