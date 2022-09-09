//import "./IkeaMenu.css";
// import "./IkeaMenuForPhones.css";
// import "./IkeaMenuFor540px.css";
// import "./IkeaMenuFor414px.css";
// import "./IkeaMenuFor393px.css";
const IkeaMenu = () => {
  function menuOpenHandler() {
    document.getElementById("menuUl").classList.add("showMenu");
   

    document.getElementById("myApp").classList.add("menuBackDrop");
    document
      .getElementById("myApp")
      .classList.replace("removeMenuBackDrop", "menuBackDrop");

      /*****************FOR PHONES */
      //document.getElementById("menuUl").classList.remove("showMenu");
     document.getElementById("menuUl").classList.add("showMenuPhones");

     //document.getElementById("menuUl").classList.replace("showMenu","showMenuPhones");
      /*********** */
  }
  function closeMenuHandler() {
    document.getElementById("menuUl").classList.remove("showMenu");
    document.getElementById("myApp").classList.remove("menuBackDrop");
          /*****************FOR PHONES */
    document.getElementById("menuUl").classList.remove("showMenuPhones");
          /*********** */
  }

  return (
    <>
      <a href="#"  className="menuIcon" onClick={menuOpenHandler}>
        <svg
          style={{ width: "24px", height: "24px" }}
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="40"
            y1="64"
            x2="216"
            y2="64"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="40"
            y1="192"
            x2="216"
            y2="192"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
        </svg>
      </a>

      <ul id="menuUl" className="MenuUl">
        {/*CANCEL ICON   */}
        <div className="ikeaIconback">
          <a id="menuCancelLink" onClick={closeMenuHandler} href="#">
            <svg
              className="menuCancel"
              id="menuCancelId"
              style={{ width: "29px", height: "29px" }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </a>

          {/*IKEA ICON   */}

          <svg
            width="90"
            height="35"
            className="ikeaIcon"
            viewBox="0 0 100 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path fill="#0058AB" d="M99.986 40H0V0h100v40z" />
              <path
                d="M2 20c0 9.833 20.116 18 48.007 18S98 29.833 98 20 77.884 2 50.007 2C22.131 2 2 10.167 2 20z"
                fill="#FBD914"
              />
              <path
                d="M46.448 26.005c.315.447.66.867 1.06 1.245h-10.82c0-.42-.416-1.273-.875-1.945a2119.01 2119.01 0 01-2.938-4.35v5.05c0 .42 0 .825.215 1.245h-9.015c.215-.42.215-.826.215-1.245V14c0-.42 0-.826-.215-1.245h9.015c-.215.42-.215.825-.215 1.245v5.246s2.88-3.665 3.54-4.519c.502-.643 1.118-1.553 1.118-1.972h9.402c-.645.42-1.361 1.175-1.949 1.874l-3.44 4.1s4.329 6.45 4.902 7.275zM49.286 14v12.004c0 .42 0 .825-.215 1.245h17.4v-4.03c-.43.21-.846.21-1.276.21h-7.324v-1.902h7.037v-3.05h-7.037V16.56h7.324c.43 0 .846 0 1.276.196v-4.015h-17.4c.215.433.215.84.215 1.259zm41.292 12.004c.144.461.387.881.703 1.245H81.85c.043-.42-.115-.826-.287-1.245 0 0-.143-.336-.344-.826l-.086-.21h-5.432l-.086.224s-.158.406-.301.826c-.143.42-.301.825-.244 1.245h-7.438a3.64 3.64 0 00.673-1.245l4.458-12.004c.157-.42.315-.826.258-1.245h12.57c-.115.42.114.825.272 1.245.372.91 4.4 11.178 4.715 11.99zm-10.635-4.1l-1.318-3.357a7.288 7.288 0 01-.287-.952 5.501 5.501 0 01-.258.952c-.043.14-.602 1.609-1.247 3.357h3.11zm-60.14-9.15H10c.215.42.215.826.215 1.246v12.004c0 .42 0 .825-.215 1.245h9.804c-.215-.42-.215-.826-.215-1.245V14c0-.42 0-.826.215-1.245zm67.765 1.148c-.043-1.021.774-1.875 1.82-1.903h.13c1.06-.014 1.934.798 1.949 1.833v.07c.028 1.05-.817 1.93-1.906 1.959-1.075.028-1.978-.798-2.007-1.861.014-.028.014-.07.014-.098zm.387 0c0 .84.703 1.525 1.563 1.525s1.562-.686 1.562-1.525c0-.84-.702-1.525-1.562-1.525-.832-.028-1.534.602-1.563 1.413v.112zm1.176 1.133h-.344v-2.294h.874a.74.74 0 01.73.741c0 .28-.157.532-.415.672l.502.881h-.387l-.459-.811h-.501v.811zm0-1.133h.473c.229.014.43-.154.43-.378s-.158-.42-.387-.42h-.516v.798z"
                fill="#0058A3"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </div>
        {/*lIST OF CONTENTS   */}
        <li className="MenuList">
          <a className="MenuLink" href="#">
            Products
          </a>
        </li>
        <li className="MenuList">
          <a className="MenuLink" href="#">
            Rooms
          </a>
        </li>
        <li className="MenuList">
          <a className="MenuLink" href="#">
            New at IKEA
          </a>
        </li>
        <li className="MenuList">
          <a className="MenuLink" href="#">
            All offers
          </a>
        </li>

        {/*lIST OF small CONTENTS   */}
        <ul className="MenuListSmallUL">
          <li className="MenuListSmall">
            <a className="MenuLinkSmall" href="#">
              Tips and inspirations
            </a>
          </li>
          <li className="MenuListSmall">
            <a className="MenuLinkSmall" href="#">
              Currently at IKEA
            </a>
          </li>
          <li className="MenuListSmall">
            <a className="MenuLinkSmall" href="#">
              Track your order
            </a>
          </li>
        </ul>

        {/*lIST OF  VERY small CONTENTS   */}
        <ul className="MenuListVSmallUL">
          <li className="MenuListVSmall">
            <a className="MenuLinkVSmall" href="#">
              Join IKEA Family
            </a>
          </li>
          <li className="MenuListVSmall">
            <a className="MenuLinkVSmall" href="#">
              IKEA Business
            </a>
          </li>
          <li className="MenuListVSmall">
            <a className="MenuLinkVSmall" href="#">
              IKEA Resaurant
            </a>
          </li>
          <li className="MenuListVSmall">
            <a className="MenuLinkVSmall" href="#">
              Our stores
            </a>
          </li>
          <li className="MenuListVSmall">
            <a className="MenuLinkVSmall" href="#">
              Design your room
            </a>
          </li>
          <li className="MenuListVSmall">
            <a className="MenuLinkVSmall" href="#">
              Customer service
            </a>
          </li>
          <li className="MenuListVSmall">
            <a className="MenuLinkVSmall" href="#">
              Download the IKEA app
            </a>
          </li>
        </ul>
        <div>
          <a className="changeCountry" href="#">
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>{" "}
            <div className="justTheWord">Change country</div>
          </a>
        </div>
      </ul>
    </>
  );
};

export default IkeaMenu;
