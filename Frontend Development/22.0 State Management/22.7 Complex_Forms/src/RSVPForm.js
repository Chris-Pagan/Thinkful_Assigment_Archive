import React, { useState } from "react";

function RSVPForm() {
  const initialFormState = {
    name: "",
    age:"",
    newMember: false,
    comment: ""
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({target}) =>{
    const value = target.type === "checkbox" ? target.checked: target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData.name, formData.age, formData.newMember, formData.comment);
    setFormData({...initialFormState})
  }
  
  
  return(
    <div class="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" onChange={handleChange} value={formData.name}/>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <select id="age" name="age" onChange={handleChange} value={formData.age}>
            <option value="">Prefer not to say</option>
            <option value="0-19">0-19</option>
            <option value="20-39">20-39</option>
            <option value="40-59">40-59</option>
            <option value="60+">60+</option>
          </select>  
        </div>
        <div>
          <label htmlFor="newMember">New Member: </label>
          <input id="newMember" type="checkbox" name="newMember" onChange={handleChange} checked={formData.newMember}/>
        </div>
        <div>
          <label htmlFor="comment">Comment: </label>
          <input id="comment" type="text" name="comment" onChange={handleChange} value={formData.comment}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div> 
  )
  
  
}

export default RSVPForm;
