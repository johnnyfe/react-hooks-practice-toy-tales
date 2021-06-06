import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys,setToys]=useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(()=> {
    fetch(`http://localhost:3001/toys`)
    .then(r=>r.json())
    .then(setToys)
  },[toys]);

  function handleAddToy(newToy){
    setToys([...toys, newToy]);
  }

  function handleUpdatedToy(updatedToy){
    const updatedToys=toys.map((toy)=>toy.id===updatedToy.id ? updatedToy : toy);
    setToys(updatedToys);
  }

  function handleDeleteToy(toyToDelete){
    const deletedToy=toys.filter((toy)=>toy.id!==toyToDelete.id)
    setToys(deletedToy)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm  onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onUpdatedToy={handleUpdatedToy} onDeleteToy={handleDeleteToy} toys={toys}/>
    </>
  );
}

export default App;
