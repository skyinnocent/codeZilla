import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <div className="App">
      <Fragment>
        <Header></Header>
        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
