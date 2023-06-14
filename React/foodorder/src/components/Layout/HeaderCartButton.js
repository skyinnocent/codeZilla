import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <>
      <button className={classes.btn} onClick={props.onClick}>
        <span className={classes.cartIcon}>
          <CartIcon></CartIcon>
        </span>
        <span className={classes.cartText}>Your Cart</span>
        <span className={classes.cartBadge}> 3 </span>
      </button>
    </>
  );
};

export default HeaderCartButton;
