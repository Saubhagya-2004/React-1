import react from "react";
import { useState,useEffect } from "react";
const useGetdata=()=>{
    const [filterRestaurants, setFilterRestaurants] = useState([]); // Fix naming
    const [restaurants, setRestaurants] = useState([]); 
    useEffect(() => {
        //Api call
         getRestaurant();
            // console.log("effect"); 
    }, []);
console.log('render');
//render 
    async function getRestaurant() {
      const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();//it will return a redable stream
        console.log(json);
        
        const fetchedRestaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setRestaurants(fetchedRestaurants);
        setFilterRestaurants(fetchedRestaurants); // Ensure initial state is set
    }
    return {restaurants,filterRestaurants}
}
export default useGetdata;