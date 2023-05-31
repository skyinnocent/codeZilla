import { useMemo, useState } from "react";

function App() {
  const [Height, setHeight] = useState(120);
  const [Weight, setWeight] = useState(80);
  const [heightSquared, setHeightSquared] = useState(0);
  const [bmi, setBmi] = useState();

  const changeHandler = (event) => {
    setHeight(event.target.value);
    setBmi(parseInt(Weight / heightSquared));
  };
  const changeHandler2 = (event) => {
    setWeight(event.target.value);
    setBmi(parseInt(Weight / heightSquared));
  };

  useMemo(() => {
    const heightinmeters = Height / 100;
    const heightsquarede = heightinmeters * heightinmeters;
    setHeightSquared(heightsquarede);
  }, [Height]);

  return (
    <div className="App">
      <>
        <h1>
          {Height} {"cm"}
        </h1>
        <label>
          Height
          <input
            value={Height}
            type="range"
            step={10}
            min={20}
            max={250}
            onChange={changeHandler}
          ></input>
        </label>
      </>
      <>
        <h1>
          {Weight} {"kg"}
        </h1>
        <label>
          Weight
          <input
            value={Weight}
            setWeight
            type="range"
            step={10}
            min={20}
            max={150}
            onChange={changeHandler2}
          ></input>
        </label>
      </>
      <>
        <h2>your bmi is: {bmi}</h2>
      </>
    </div>
  );
}

export default App;
