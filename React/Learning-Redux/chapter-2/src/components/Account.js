import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decFunc, incByAmtfunc, incFunc } from "../actions/actions";

function Account() {
  const [value, setValue] = useState();
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button
          onClick={() => {
            dispatch(incFunc());
          }}
        >
          Increment +
        </button>
        <button
          onClick={() => {
            dispatch(decFunc());
          }}
        >
          Decrement -
        </button>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            dispatch(incByAmtfunc(value));
          }}
        >
          Increment By {value} +
        </button>
      </div>
    </div>
  );
}

export default Account;
