const Cart = (props) => {
  return (
    <div key={props.id} className="cart_container">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <button onClick={props.onDelete}>DEL</button>
    </div>
  );
};

export default Cart;
