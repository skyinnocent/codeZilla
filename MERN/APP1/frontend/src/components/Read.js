import React, { useEffect, useState } from "react";

const dummy = [
  {
    _id: "648c68f384b0737c356a817e",
    name: "LWD",
    email: "LWD@gmail.com",
    age: 27,
    createdAt: "2023-06-16T13:51:47.425Z",
    updatedAt: "2023-06-16T14:03:20.769Z",
    __v: 0,
  },
  {
    _id: "648c68fc84b0737c356a8180",
    name: "Ha1",
    email: "Dimah@gmail.com",
    age: 27,
    createdAt: "2023-06-16T13:51:56.515Z",
    updatedAt: "2023-06-16T13:51:56.515Z",
    __v: 0,
  },
  {
    _id: "648c81122d38819abd043b30",
    name: "Ha2",
    email: "Dimah@gmail.com",
    age: 27,
    createdAt: "2023-06-16T15:34:42.662Z",
    updatedAt: "2023-06-16T15:34:42.662Z",
    __v: 0,
  },
  {
    _id: "648c81162d38819abd043b32",
    name: "Ha2",
    email: "Dimah@gmail.com",
    age: 27,
    createdAt: "2023-06-16T15:34:46.902Z",
    updatedAt: "2023-06-16T15:34:46.902Z",
    __v: 0,
  },
  {
    _id: "648c9538a793709d8a365d95",
    name: "aa",
    email: "aaa@bb.com",
    age: 123,
    createdAt: "2023-06-16T17:00:40.584Z",
    updatedAt: "2023-06-16T17:00:40.584Z",
    __v: 0,
  },
  {
    _id: "648c9574a793709d8a365d98",
    name: "aLiBaba",
    email: "aaa@bb.com",
    age: 123,
    createdAt: "2023-06-16T17:01:40.918Z",
    updatedAt: "2023-06-16T17:01:40.918Z",
    __v: 0,
  },
];

function Read() {
  const [data, setData] = useState([]);

  const getResult = async () => {
    const result = await fetch("http://localhost:8000");
    const response = await result.json();
    setData(response);
  };
  useEffect((async) => {
    getResult();
  }, []);

  return (
    <div className="read">
      {data.map((item) => {
        return (
          <div className="card">
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.age}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Read;
