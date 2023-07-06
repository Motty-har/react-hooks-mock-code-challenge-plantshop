import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true)
  function handleInStock(){
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleInStock}>In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
