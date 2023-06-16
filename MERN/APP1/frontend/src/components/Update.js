import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getSingleUser();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    const updatedUser = { name, email, age };
    const response = await fetch(`http://localhost:8000/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/JSON",
      },
    });

    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      setError("");
      Navigate("/all");
    }
  };

  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:8000/${id}`);
    const result = await response.json();

    if (!response.ok) {
      console.log("updated user:", result);
      setError(result.error);
    }

    if (response.ok) {
      setError("");
      setAge(result.age);
      setEmail(result.email);
      setName(result.name);
    }
  };

  return (
    <div className="create">
      {error && <div className="error"> {error}</div>}
      <h1>Edit User Profile</h1>
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

export default Update;
