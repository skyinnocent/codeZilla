import "./AddUser.css";
import UserForm from "./UserForm";
import { useState } from "react";

const AddUser = () => {
  const [form, setForm] = useState(false);
  return (
    <>
      <div className="adduser">
        <div className="button">
          <span>Add User</span>
          <button className="circle" onClick={() => setForm(!form)}>
            +
          </button>
        </div>
        <div className="formcontainer">
          {form ? <UserForm onClick={() => setForm(!form)}></UserForm> : ""}
        </div>
      </div>
    </>
  );
};
export default AddUser;
