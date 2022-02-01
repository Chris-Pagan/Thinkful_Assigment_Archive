import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  // const [displayAlbums, setDisplayAlbums] = useState([]);

  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Awesome Album App";

    const abortController = new AbortController();

    async function loadUsers() {
     try {
      const response = await fetch(
       "https://jsonplaceholder.typicode.com/users",
        { signal: abortController.signal }
      );
      const userList = await response.json();
      setUsers(userList);
    }
      catch(error){       
      }     
    }
    loadUsers();
    
    return () => {
      document.title = originalTitle;
      abortController.abort();
    }
  }, [])
    
  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} />
      </div>
    </div>
  );
}
export default App;