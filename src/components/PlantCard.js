import React, { useState, useEffect } from "react";
// I made a way to update this in the json, but for some reason the patch request wont update the property. I think it has to do with the json server api permissions

function PlantCard({ plant }) {

  const { id, name, image, price, 
    // stock 
  } = plant;

  const [ isInStock, setIsInStock ] = useState(true);

  // function fetchPlant() {
  //   fetch(`http://localhost:6001/plants/${id}`)
  //   .then(r => r.json())
  //   .then(dbPlant => setIsInStock(dbPlant.stock));
  // }

  // useEffect(() => fetchPlant(), [])

  function onClick(e) { //toggles plant stock 
    // fetch(`http://localhost:6001/plants/${id}`, {
    //   method: "PATCH",
    //   header: {"Content-Type": "application/json"},
    //   body: JSON.stringify({ stock: !stock }) // this will make stock true if it is not yet a key
    // }).then(r=>r.json()).then(plant=> {debugger})
    setIsInStock(!isInStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {(isInStock) ? (
        <button className="primary" onClick={onClick}>In Stock</button>
      ) : (
        <button onClick={onClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
