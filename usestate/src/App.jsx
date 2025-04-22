import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
// using useState hook to manage state in this comoponent
import { useState } from "react";
import "./App.css";

function App() {
  // creates a state variable to hold the list of restaurants
  const [restaurantsList, setRestaurantsList] = useState(restaurants);
  return (
    <div className="App">
      <h1>Restaurants</h1>
      <RestaurantsContainer restaurants={restaurantsList}/>
    </div>
  );
}

export default App;