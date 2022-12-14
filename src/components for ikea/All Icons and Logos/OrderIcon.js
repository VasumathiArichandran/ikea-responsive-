const OrderIcon = () => {
  return (
    <a className="orderIconHandler" href="#">
      <svg
        // style={{ width: "24px", height: "24px" }}
        xmlns="http://www.w3.org/2000/svg"
        
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
  );
};
export default OrderIcon;
