import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/todos?userId=3";
  
  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3
  useEffect(() =>{
    const abortController = new AbortController();
    async function toDos() {
      try {
          const response = await fetch((url), {signal: abortController.signal});
          const toDoResponse = await response.json();
          setToDos(toDoResponse);
      } catch (error){
        if (error.name === "AbortError"){
        } else{
          throw error;
        }
      }
    }
    toDos();
    return () => abortController.abort();
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
