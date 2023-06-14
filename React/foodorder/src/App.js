import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setshowCart] = useState(false);

  return (
    <div className="App">
      <Fragment>
        {showCart && <Cart onClick={() => setshowCart(!showCart)}></Cart>}
        <Header onClick={() => setshowCart(!showCart)}></Header>
        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
