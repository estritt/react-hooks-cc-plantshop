import React from "react";
import PlantCard from "./PlantCard";
import { v4 as uuid } from "uuid";

function PlantList({ plants, filter }) {
  return (
    <ul className="cards">
      {
        plants.filter(plant => plant.name.toLowerCase().includes(filter.toLowerCase()))
        .map(plant => <PlantCard key={plant.id ? plant.id : uuid()} plant={plant} />)
      }
    </ul>
  );
}

export default PlantList;
