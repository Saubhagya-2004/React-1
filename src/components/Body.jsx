import { useState,useEffect } from "react";
import { ResturantData } from "./constant"; // Import dataset
import Restaurantcard from "./Restaurantcard"; // Import card component
import Shimmer from "./Shimmer";

function filterData(search, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase())
    );
}
const Body = () => {
    const [restaurants, setRestaurants] = useState(ResturantData); 
    const [search, setSearch] = useState(""); // State for search query
//search is state variable setsearch is updated fxn
//empty dependency array once after render
// dep array[search]=once after intial render+everytime after render(my search text change)
useEffect(()=>{
    //Api call
    getrestaurant();
}, []);
async function getrestaurant() {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    // console.log(json);
    //optional channing
    // setRestaurants(  json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
}
console.log(restaurants);

    return restaurants.length==0?(<Shimmer/>) :
    (
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
                    <Restaurantcard key={restaurant.id} {...restaurant} />
                ))}
            </div>
        </>
    );
};

export default Body;
