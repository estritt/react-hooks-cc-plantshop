import React, { useState, useEffect } from "react";
// I made a way to update this in the json, but for some reason the patch request wont update the property. I think it has to do with the json server api permissions

function PlantCard({ plant, deletePlant }) {

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

  const [ newPrice, setNewPrice ] = useState("");
  const [ displayPrice, setDisplayPrice ] = useState(price)
  function onChange(e) {
    setNewPrice(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify({ price: newPrice })
    }).then(() => {setDisplayPrice(newPrice); setNewPrice("")})
  }

  function onDelete() {
    deletePlant(id);
  } //deletePlant has to be defined in PlantPage because we are changing the state of plants to get a rerender

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {displayPrice}</p>
      {(isInStock) ? (
        <button className="primary" onClick={onClick}>In Stock</button>
      ) : (
        <button onClick={onClick}>Out of Stock</button>
      )}
      <form onSubmit={onSubmit} className="change-price-form" >
        <input type="number" name="price" step="0.01" placeholder="Enter New Price" onChange={onChange} value={newPrice}/>
        <button type="submit">Set Price</button>
      </form>
      <button className="delete-plant" onClick={onDelete}>X</button>
    </li>
  );
}

export default PlantCard;
