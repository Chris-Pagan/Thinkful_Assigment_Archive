import React, { useState } from "react";

function DogForm() {
  const [name, setName] = useState(' ');
  const [breed, setBreed] = useState(' ');
  const [age, setAge] = useState(' ');
  
  const handleNameChange = (e) =>setName(e.target.value);
  const handleBreedChange = (e) =>setBreed(e.target.value);
  const handleAgeChange = (e) =>setAge(e.target.value);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name, breed, age);
    setName("");
    setBreed("");
    setAge("");
  };
  
  return(
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="name">Name </label>
         <input id="name" type="text" name="name" onChange={handleNameChange} value={name}/>
      </div>
      <div>
      <label htmlFor="breed">Breed </label>
         <input id="breed" type="text" name="breed" onChange={handleBreedChange} value={breed}/>
      </div>
      <div>
      <label htmlFor="age">Age </label>
         <input id="age" type="text" name="age" onChange={handleAgeChange} value={age}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default DogForm;
