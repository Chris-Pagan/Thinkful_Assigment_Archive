import React, {useEffect, useState} from "react";

function AlbumList({ user = {} }) {
  const [albums, setAlbums] = useState([]);

  useEffect(()=> {
    const abortController = new AbortController()
    async function loadAlbums(userId, signal) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
          { signal, }
        );
        const albums = await response.json();
        setAlbums(albums);       
     }
      catch(error) {
        if(error.name !== "AbortError") {
          console.log(error);
        }
      }
    }
    if(user.id) {
      const abortController = new AbortController()
      loadAlbums(user.id, abortController.signal);

      return () => {
        abortController.abort()
      };
    }
  }, [user]);

  if(user.id) {
    return (
      <div>
        <h3>{user.name} Albums</h3> 
        <ul>
          {
            albums.map((album)=> (
            <li key={album.id}> {album.id} - {album.title}</li>
            )
           )
          }
        </ul>
      </div>
    );
  }
  return <p> Please click on a user name to the left</p>
}
export default AlbumList;