import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);
  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantsList}/>
    </div>
  );
}

export default App;