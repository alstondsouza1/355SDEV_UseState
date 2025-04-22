import { useState } from "react";

// This component displays the details of a restaurant
function Restaurant(props) {

  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  // hours section on button click
  const handleHours = () => {
    setHours((prev) => !prev);
  };

  // menu section on button click
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>

      {/*buttons to show/hide hours and menu */}
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>

      {/*render the hours and menu sections based on state */}
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}
      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;
