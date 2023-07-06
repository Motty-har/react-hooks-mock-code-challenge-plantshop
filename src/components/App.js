import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])
  
  const filtered = plants.filter((plant) => {
    if(search === "")return true
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })
  console.log(filtered)
  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={filtered} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
