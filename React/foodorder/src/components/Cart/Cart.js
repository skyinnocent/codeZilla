import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes.cartItems}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li className={classes.cartItem}>{item.name}</li>;
      })}
    </ul>
  );
  console.log(cartItems);
  return (
    <Modal onClick={props.onClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.close} onClick={props.onClick}>
          close
        </button>
        <button className={classes.order}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
