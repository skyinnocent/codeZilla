import { useState } from "react";
import "./Question.css";

const Question = (props) => {
  const [display, setDisplay] = useState("hide");
  const displayHandler = () => {
    display === "hide" ? setDisplay("show") : setDisplay("hide");
  };
  return (
    <div className="container">
      <h1>{props.q}</h1>
      <p className={display}>{props.answer}</p>
      <button onClick={displayHandler}>{display === "hide" ? "+" : "-"}</button>
    </div>
  );
};

export default Question;
