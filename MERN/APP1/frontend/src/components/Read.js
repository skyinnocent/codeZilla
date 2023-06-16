import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getResult = async () => {
    const result = await fetch("http://localhost:8000");
    const response = await result.json();
    setData(response);
  };

  useEffect(() => {
    getResult();
  }, []);
  const deleteHandler = async (id) => {
    const response = await fetch(`http://localhost:8000/${id}`, {
      method: "DELETE",
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      setError("Deleted Succesfully");

      setTimeout(() => {
        setError("");
        getResult();
      }, 2000);
    }
  };

  return (
    <div>
      <div className="read">
        <h1>All Data</h1>
        {error && <div className="error"> {error}</div>}
        {data.map((item) => {
          return (
            <div className="card" key={item._id}>
              <h1>{item.name}</h1>
              <h2>{item.email}</h2>
              <h3>{item.age}</h3>
              <div>
                <button onClick={() => deleteHandler(item._id)}>delete</button>
                <Link to={`/${item._id}`}>Edit</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Read;
