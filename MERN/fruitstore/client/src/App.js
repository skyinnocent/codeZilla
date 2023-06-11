import "./App.css";
import { useState, useEffect } from "react";
import Fruit from "./components/Fruit";
import NavBar from "./components/NavBar";

const API_BASE = "http://localhost:3001";
const App = () => {
  const [fruits, setFruits] = useState([]);
  const [modal, setModal] = useState(false);
  const [fruitName, SetFruitName] = useState("");
  const [fruitPrice, setFruitPrice] = useState("");
  const [imglink, setimgLink] = useState("");
  const [cartTotal, setCartTotal] = useState("");
  useEffect(() => {
    fetch(API_BASE + "/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data))
      .catch((err) => console.error("error:", err));
  }, []);
  const modalHandler = () => {
    setModal(!modal);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = await fetch(API_BASE + "/newfruit/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fruitName,
        price: fruitPrice,
        img: imglink,
      }),
    }).then((res) => res.json());
    setFruits([...fruits, data]);
    setFruitPrice("");
    SetFruitName("");
    setimgLink("");
  };
  const deductCart = () => {
    setCartTotal(Number(cartTotal) - 1);
  };

  const addCart = () => {
    setCartTotal(Number(cartTotal) + 1);
  };
  return (
    <>
      <div className="'app">
        <div>
          <NavBar cartTotal={cartTotal} onClick={() => modalHandler()}></NavBar>
        </div>
        <div className="main">
          {fruits.map((fruit) => {
            return (
              <Fruit
                name={fruit.name}
                img={fruit.img}
                onDeduct={deductCart}
                onAdd={addCart}
              ></Fruit>
            );
          })}
        </div>
        {modal ? (
          <div>
            <form onSubmit={submitHandler}>
              <label>
                Name:
                <input
                  value={fruitName}
                  onChange={(e) => SetFruitName(e.target.value)}
                ></input>
              </label>

              <label>
                Price:
                <input
                  value={fruitPrice}
                  onChange={(e) => setFruitPrice(e.target.value)}
                ></input>
              </label>
              <label>
                img link:
                <input
                  value={imglink}
                  onChange={(e) => setimgLink(e.target.value)}
                ></input>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
