import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewPlantForm({ addPlant }) {

  const config = {
    // id: uuid(),
    name: "",
    image: "",
    price: 0,
    // stock: true
  };
  const [ newPlant, setNewPlant ] = useState(config);
  
  function onSubmit(e) {
    e.preventDefault();
    addPlant(newPlant)
    // fetch("http://localhost:6001/plants", 
    // {
    //   method: "POST",
    //   headers: {"Content-Type": "Application/JSON"},
    //   body: JSON.stringify(newPlant)
    // }
    // )
    // .then(() => addPlant(newPlant))
    // .then(() => setNewPlant(config));
    // I had to move the above code up to the parent to be part of addPlant so the rerender happened how the test liked
  }

  function onChange(e) {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={onChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={onChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={onChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
