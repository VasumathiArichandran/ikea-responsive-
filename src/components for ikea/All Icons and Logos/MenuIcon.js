import MenuBar from "../MenuBar/MenuBar";
import "../MenuBar/MenuBar.css";

const MenuIcon = () => {
  // document.getElementById("myApp").classList.add("menuBackDrop");
  // document
  //   .getElementById("myApp")
  //   .classList.replace("removeMenuBackDrop", "menuBackDrop");

  return (
    <>
      <div>
        <svg
        className="MenuIconforPhones"
          // style={{ width: "28px", height: "28px" }}
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
      </div>
    </>
  );
};
export default MenuIcon;
