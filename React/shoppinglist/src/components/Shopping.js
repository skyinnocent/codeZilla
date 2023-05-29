import "./Shopping.css";
import ShoppingCartData from "./Data";
import Cart from "./Cart";
import { useState } from "react";
const Shopping = () => {
  console.log(ShoppingCartData);
  const [inputValue, SetinputValue] = useState("");
  const handleChange = (event) => {
    SetinputValue(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const id = ShoppingCartData.length + 1;
    ShoppingCartData.push({
      id: id,
      item: inputValue,
      text: "We then generate text which is randomly produced but has...",
    });
    SetinputValue("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="item">Add Items </label>
        <input
          id="item"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="add items to cart"
        ></input>
        <button type="submit">Add</button>
      </form>

      <div>
        {ShoppingCartData.map((e) => {
          return <Cart title={e.item} text={e.text} id={e.id}></Cart>;
        })}
      </div>
    </>
  );
};

export default Shopping;
