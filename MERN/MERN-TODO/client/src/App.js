import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001";

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, sePopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch(API_BASE + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };

  const completeTodo = async (id) => {
    const data = fetch(API_BASE + "/todo/" + id).then((res) => res.json());
  };

  return (
    <div className="App">
      <h1> Welcome Syed</h1>
      <h4>Your Tasks</h4>
      <div className="todos">
        {todos.map((todo) => {
          return (
            <div
              className={`todo ${todo.complete ? "is-complete" : ""}`}
              key={todo._id}
              onClick={() => completeTodo(todo._id)}
            >
              <div className="checkbox"></div>
              <div className="text">{todo.text}</div>
              <div className="delete-todo">X</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
