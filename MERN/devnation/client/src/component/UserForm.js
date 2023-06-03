import { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const submithandler = (event) => {
    event.preventDefault();
    console.log("form submitted");
    console.log(name, designation);
    setName("");
    setDesignation("");
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const designationChangeHandler = (event) => {
    setDesignation(event.target.value);
  };

  return (
    <div className="form">
      <div className="closeform" onClick={props.onClick}>
        X
      </div>
      <form onSubmit={submithandler}>
        <label>
          Name
          <input
            value={name}
            className="formInput"
            type="text"
            placeholder="Name"
            onChange={nameChangeHandler}
          ></input>
        </label>
        <label className="quickfix">
          Designation
          <input
            value={designation}
            className="formInput"
            type="text"
            placeholder="Designation"
            onChange={designationChangeHandler}
          ></input>
        </label>
        <button className={"button-primary"} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
