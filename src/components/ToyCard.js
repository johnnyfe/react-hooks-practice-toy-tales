import React from "react";

function ToyCard({toy , onUpdateToy , onDeleteToy}) {

  const {id, name, image, likes } = toy

  function handleLikeClick (){
    const updateObj={
      likes:toy.likes + 1,
    };

    fetch(`http://localhost:3001/toys/${id}`,  {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
    .then(r=>r.json())
    .then(onUpdateToy)
  }

  function handleDonateClick(){
    fetch(`http://localhost:3001/toys/${id}`,  {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>{onDeleteToy(toy)})
  }
  

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
