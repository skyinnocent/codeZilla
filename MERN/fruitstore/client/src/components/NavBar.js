import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav>
      <h1>Cart : {props.cartTotal}</h1>
      <h2>Total Items: {"100"}</h2>
      <h3> price: {"10000"}</h3>
      <button onClick={() => props.onClick()}>form</button>
    </nav>
  );
};

export default NavBar;
