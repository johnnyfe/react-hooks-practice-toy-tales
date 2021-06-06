import React, { useState } from "react";

function ToyForm({onAddToy}) {

  const [formData, setFormData]=useState({
    name: "",
    image:"",
  });
  
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }

  function handleSubmitToy (e){
    e.preventDefault();
    const newToy={...formData, likes:0,}

    fetch("http://localhost:3001/toys",  {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
    .then(r=>r.json())
    .then(onAddToy);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmitToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
