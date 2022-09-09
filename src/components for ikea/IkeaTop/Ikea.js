import React, { Component, useEffect } from "react";
import DropDownIcon from "./searchIconForDropDown";
//import "./just.css";
//import "./forPhones.css";
//import './for540px.css';
//import './for412414px.css';
import myFunction from "../AllScriptsTop/script";
import filterFunction from "../AllScriptsTop/script2";
import clearFunction from "../AllScriptsTop/script3";
import backdropHandler from "../AllScriptsTop/backdropScript";
import IkeaMenu from "../IkeaMenu/IkeaMenu";
import IkeaLogin from "../IkeaLogin/IkeaLogin";

const Ikea = () => {
  return (
    <>
      <div id="myApp" className="default" onClick={backdropHandler}></div>
      <div>
        {/*BODY STARTS LIST OF ICONS WITH SEARCH BAR*/}
        <header>
          <ul className="header">
            {/* ICON AND LOGO */}
            <li>
              <IkeaMenu />
            </li>
            <li>
              <svg
              className="LogoForPhones"
                width="100"
                height="40"
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
            </li>
            {/* SEARCH BAR WITH 3 ICONS */}

            <li className="searchBarBackDrop">
              <form className="final">
                <div className="dropdown">
                  <div className="show2" id="wrap">
                    {" "}
                  </div>
                  <input
                    className="newOne"
                    type="text"
                    placeholder="What are you looking for?"
                    onClick={myFunction}
                    onKeyUp={filterFunction}
                    id="myInput"
                  />

                  <div id="myDropdown" className="dropdown-content">
                    <a
                      href="#about"
                      id="borderForDropDown1"
                    >
                      <DropDownIcon /> sofa
                    </a>
                    <a
                      href="#base"
                      id="borderForDropDown2"
                    >
                      <DropDownIcon /> table
                    </a>
                    <a
                      href="#blog"
                      id="borderForDropDown3"
                    >
                      <DropDownIcon /> chair
                    </a>
                    <a
                      href="#contact"
                      id="borderForDropDown4"
                    >
                      <DropDownIcon /> mirror table
                    </a>
                    <a
                      href="#custom"
                      id="borderForDropDown5"
                    >
                      <DropDownIcon /> almirah
                    </a>
                    <a
                      href="#support"
                      id="borderForDropDown6"
                    >
                      <DropDownIcon /> closet
                    </a>
                    <a
                      href="#tools"
                      id="borderForDropDown7"
                    >
                      <DropDownIcon /> dining table
                    </a>
                  </div>
                  {/* LOADING ANIMATION*/}
                  <iframe
                    className="LoadingHiddenMode"
                    id="LoadingId"
                    src="https://embed.lottiefiles.com/animation/73210"
                  ></iframe>
                  {/* CAMERA ICON*/}
                  <a
                    id="iconToReplace"
                    className="newTwo"
                    href="#"
                    title="newTwo"
                  >
                    <svg
                      style={{ width: "22px", height: "22px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="192"
                      height="192"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <path
                        d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></path>
                      <circle
                        cx="128"
                        cy="132"
                        r="36"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></circle>
                    </svg>
                  </a>
                  {/* CANCEL ICON */}
                  <a id="cancelIconLink" onClick={clearFunction} href="#">
                    <svg
                      className="hideit"
                      id="cancelIcon"
                      style={{ width: "24px", height: "24px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="192"
                      height="192"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <line
                        x1="200"
                        y1="56"
                        x2="56"
                        y2="200"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></line>
                      <line
                        x1="200"
                        y1="200"
                        x2="56"
                        y2="56"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></line>
                    </svg>
                  </a>
                  {/* VERTICAL LINE */}
                  <div id="vertical"></div>
                  {/* SEARCH ICON */}
                  <a id="iconToPlace" href="#">
                    <svg
                      className="searchRemovable"
                      id="iconToRemove"
                      style={{ width: "22px", height: "22px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none"></rect>
                      <circle
                        cx="116"
                        cy="116"
                        r="84"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></circle>
                      <line
                        x1="175.4"
                        y1="175.4"
                        x2="224"
                        y2="224"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="24"
                      ></line>
                    </svg>
                  </a>
                  {/* SEARCH ICON TO SHRINK */}

                  <svg
                    className="searchIconToShrink"
                    id="iconToShrinkId"
                    style={{ width: "18px", height: "18px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <circle
                      cx="116"
                      cy="116"
                      r="84"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></circle>
                    <line
                      x1="175.4"
                      y1="175.4"
                      x2="224"
                      y2="224"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                  </svg>
                  {/* <svg
                    className="searchIconToShrink"
                    id="iconToShrinkId"
                    style={{ width: "22px", height: "22px" }}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                    />
                  </svg> */}
                </div>
              </form>
            </li>
            {/* SEARCH BAR ENDS HERE */
            /* LAST THREE RIGHT ICONS */}
            <ul className="left">
              <li>
                {/* LOGIN ICON */}
                <IkeaLogin />
              </li>
              <li>
                {/* ORDER ICON */}
                <a className="orderIcon" href="#">
                  <svg
                    style={{ width: "22px", height: "22px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                      d="M176,80h42.6a7.9,7.9,0,0,1,7.4,5l14,35"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></path>
                    <line
                      x1="16"
                      y1="144"
                      x2="176"
                      y2="144"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <circle
                      cx="180"
                      cy="192"
                      r="24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                    <circle
                      cx="76"
                      cy="192"
                      r="24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                    <line
                      x1="156"
                      y1="192"
                      x2="100"
                      y2="192"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></line>
                    <path
                      d="M52,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V168.3"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></path>
                    <path
                      d="M176,120h64v64a8,8,0,0,1-8,8H204"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                {/* CART ICON */}
                <a className="cartIcon" href="#">
                  <svg
                    style={{ width: "22px", height: "22px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                      d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></path>
                    <circle
                      cx="80"
                      cy="204"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></circle>
                    <circle
                      cx="184"
                      cy="204"
                      r="20"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></circle>
                    <path
                      d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="24"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Ikea;
