import Restaurant from "./Restaurant";

function RestaurantsContainer(props) {
  console.log(props);
  return (
    <div className="restaurantContainer">
      {props.restaurants.map((restaurant) => (
        // passing the restaurant object as props to the Restaurant component
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
