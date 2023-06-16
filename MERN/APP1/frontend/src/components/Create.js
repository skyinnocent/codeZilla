import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const newUser = { name, email, age };
    const response = await fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/JSON",
      },
    });

    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      console.log(result);
      setError("");
      setAge("");
      setEmail("");
      setName("");
      navigate("/all");
    }
  };
  return (
    <div className="create">
      {error && <div className="error"> {error}</div>}
      <h1>Create A New User</h1>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          value={name}
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          value={email}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Age</label>
        <input
          value={age}
          placeholder="enter your age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Create;
