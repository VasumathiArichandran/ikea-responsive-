const LoginCancelIcon = () => {
  function closeLoginBoxHandler() {
    document.getElementById("LoginBoxId").classList.remove("showLoginBox");
    document.getElementById("BackDrop").classList.remove("menuBackDropHandler");
  }
  return (
    <svg
      className="loginCancelIcon"
      onClick={closeLoginBoxHandler}
      id="loginCanceIconlId"
      style={{ width: "36px", height: "36px" }}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
      />
    </svg>
  );
};
export default LoginCancelIcon;