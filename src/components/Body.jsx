import { useState, useEffect } from "react";
import {ResturantData} from "./Constant"
import RestaurantCard from "./Restaurantcard"; // Fixed import case
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useGetdata from "../../utils/useGetdata";
import useOnline from "../../utils/useOnline";
function filterData(search, restaurants) {
    return restaurants.filter((restaurant) =>
        restaurant?.info?.name.toLowerCase()?.includes(search.toLowerCase()) // Ensure correct field access
    );
}

const Body = () => {
   
    const [search, setSearch] = useState(""); // State for search query
    
    const {restaurants,filterRestaurants,setFilterRestaurants}= useGetdata();
   // search is state variable and set is updated fxn
 const isOnline=useOnline();
 if(!isOnline)
    {
    return(
    <>
      <h1 className='online'>🔴🔴 You are looking Offline !!. Please Check Your internet Connection🛜  </h1>
      
    </>  
    ) 
    }
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
                {(filterRestaurants?.length == 0) ? "no Restaurant found" : (
                    filterRestaurants.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={"/restaurant/" + restaurant.info.id}
                            style={{ textDecoration: 'none', color: "black" }}
                        >
                            <RestaurantCard restaurant={restaurant} />
                        </Link>
                    ))
                )}
            </div>
        </>
    );
};

export default Body;
