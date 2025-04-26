import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
// using useState hook to manage state in this comoponent
import { useState } from "react";
import RestaurantForm from "./components/RestaurantForm.jsx";
import "./App.css";

function App() {
  // creates a state variable to hold the list of restaurants
  const [restaurantsList, setRestaurantsList] = useState(restaurants);

  const addRestaurant = (newRestaurant) => {
    // adds a new restaurant to the list
    setRestaurantsList((prev) => [...prev, newRestaurant]);
  }
  return (
    <div className="App">
      <h1>Restaurants</h1>
      <RestaurantsContainer restaurants={restaurantsList}/>
      <RestaurantForm addRestaurant={addRestaurant} />
    </div>
  );
}

export default App;