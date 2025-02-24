import react from "react";
import { useState,useEffect } from "react";
import { Restu_Url } from "../src/components/Constant";
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
      const response = await fetch(Restu_Url);
        const json = await response.json();//it will return a redable stream
        console.log(json);
        
        const fetchedRestaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setRestaurants(fetchedRestaurants);
        setFilterRestaurants(fetchedRestaurants); // Ensure initial state is set
    }
    return {restaurants,filterRestaurants,setFilterRestaurants}
}
export default useGetdata;