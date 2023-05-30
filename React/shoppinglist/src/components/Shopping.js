import "./Shopping.css";
import ShoppingCartData from "./Data";
import Cart from "./Cart";
import { useState } from "react";
const DUMMY_DATA = ShoppingCartData;
const Shopping = () => {
  const [inputValue, SetinputValue] = useState();
  const [Data, setData] = useState(DUMMY_DATA);
  const handleChange = (event) => {
    SetinputValue(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const id = Data.length + 1;
    setData([
      ...Data,
      {
        id: id,
        item: inputValue,
        text: "We then generate text which is randomly produced but has...",
      },
    ]);
    SetinputValue("");
  };
  const handleDelete = (id) => {
    const updatedData = Data.filter((item) => item.id !== id);
    setData(updatedData);
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
        {Data.map((e, i) => {
          return (
            <Cart
              title={e.item}
              text={e.text}
              id={e.id}
              onDelete={() => handleDelete(e.id)}
            ></Cart>
          );
        })}
      </div>
    </>
  );
};

export default Shopping;
