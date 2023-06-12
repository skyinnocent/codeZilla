const CartIcon = () => {
  const svgStyles = {
    width: "20px",
    height: "20px",
    color: "white",
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style={svgStyles}
      >
        <circle cx="9" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M1 1h4l2.5 9h11v8H6" />
      </svg>
    </>
  );
};
export default CartIcon;
