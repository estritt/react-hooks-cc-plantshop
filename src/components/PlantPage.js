import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ plants, setPlants ] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(dbPlants => setPlants(dbPlants))
  }, []);

  const [ filter, setFilter ] = useState("");
  function changeFilter(string) {
    setFilter(string);
  }

  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "Application/JSON" }
    }).then(() => setPlants(plants.filter(plant => plant.id != id)));
  }
  
  function addPlant(newPlant) {
    // setPlants([...plants, newPlant]);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(addedPlant => {
      setPlants([...plants, addedPlant]);
    });
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search changeFilter={changeFilter} />
      <PlantList plants={plants} filter={filter} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
