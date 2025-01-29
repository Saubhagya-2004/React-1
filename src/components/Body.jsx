import { useState } from "react";
import { ResturantData } from "./constant"; // Import dataset
import RestaurantCard from "./Restaurantcard"; // Import card component

function filterData(search, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant.Name.toLowerCase().includes(search.toLowerCase())
    );
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(ResturantData); 
    const [search, setSearch] = useState(""); // State for search query
//search is state variable setsearch is updated fxn
console.log(restaurants);

    return (
        <>
            <div className="search-container">
                <input
                    className="search-box"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} // Update search input
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const filteredData = filterData(search, restaurants); // Filter original data
                        setRestaurants(filteredData); // Update state
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} {...restaurant} />
                ))}
            </div>
        </>
    );
};

export default Body;
