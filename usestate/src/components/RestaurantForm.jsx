import { useState } from "react";

// This component is used to add a new restaurant
const RestaurantForm = ({ addRestaurant }) => {

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        rating: 0,
        priceRange: "",
    });

    // handleChange function to update the state of the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRestaurant = {
            id: Math.floor(Math.random() * 10000),
            ...formData,
            rating: parseFloat(formData.rating),
        };
        addRestaurant(newRestaurant);

        setFormData({
            name: "",
            address: "",
            rating: 0,
            priceRange: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Restaurant Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Restaurant Address"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            placeholder="Rating (0 - 5)"
            step="0.1"
            min="0"
            max="5"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="priceRange"
            value={formData.priceRange}
            placeholder="Price Range (e.g., 10-20)"
            onChange={handleChange}
            required
          />
          <button type="submit">Add Restaurant</button>
        </form>
    );
};

export default RestaurantForm;