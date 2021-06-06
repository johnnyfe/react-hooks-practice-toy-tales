import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onUpdateToy, onDeleteToy}) {
  const toyCards=toys.map((toy)=>(
    <ToyCard 
    key={toy.id}
    toy={toy}
    onUpdateToy={onUpdateToy}
    onDeleteToy={onDeleteToy}
    />));
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
