import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ search, setSearch, plants }) {
  return (
    <main>
      <NewPlantForm />
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
