import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos?userId=2"
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=2
  useEffect(() =>{
    async function getToDos(){
      const response = await fetch(url);
      const responseData = await response.json();
      setToDos(responseData);
    }
    getToDos();
  }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
