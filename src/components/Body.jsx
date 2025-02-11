import { useState, useEffect } from "react";
import {ResturantData} from "./constant"
import RestaurantCard from "./Restaurantcard"; // Fixed import case
import Shimmer from "./Shimmer";

function filterData(search, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase()?.includes(search.toLowerCase()) // Ensure correct field access
    );
}

const Body = () => {
    const [filterRestaurants, setFilterRestaurants] = useState([]); // Fix naming
    const [restaurants, setRestaurants] = useState([]); 
    const [search, setSearch] = useState(""); // State for search query
//search is state variable and set is updated fxn
    useEffect(() => {
        //Api call
         getRestaurant();
            // console.log("effect"); 
    }, []);
console.log('render');
//render 
    async function getRestaurant() {
      const response = await fetch(
            "https://zuingy.mishra.codes/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();//it will return a redable stream
        console.log(json);
        
        const fetchedRestaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setRestaurants(fetchedRestaurants);
        setFilterRestaurants(fetchedRestaurants); // Ensure initial state is set
    }
//not render component
    if (!restaurants) return null;
//rendered here
    return (restaurants?.length===0)?<Shimmer/> :(
        <>
            <div className="search-container">
                <input
                    className="search-box"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const filteredData = filterData(search, restaurants);
                        setFilterRestaurants(filteredData); // Update state
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
            {(filterRestaurants?.length==0) ? "no Restaurant found" : (
            filterRestaurants.map((restaurant) => (
                // console.log(restaurant.info),
                // console.log(filterRestaurants),
                
                <RestaurantCard key={restaurant.info.id} restaurant={restaurant}
                />
                
            ))
            )}
            </div>
        </>
    );
};

export default Body;
