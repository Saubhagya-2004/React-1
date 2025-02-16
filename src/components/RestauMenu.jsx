import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Imageurl } from "./constant";
const RestauMenu=()=>{
    const{id} =useParams();//destructuring
    const [restaurant,setRestaurant]=useState([]);
    // console.log(params);
    useEffect(()=>{
        getrestaurantinfo();
    },[]);
    
     async function getrestaurantinfo() {
        const data= await fetch("https://zuingy.mishra.codes/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&submitAction=ENTER&restaurantId=375041");
        // console.log(data);
        const json =await data.json();
        const fetched=(json.data.cards);
        console.log();
        setRestaurant(fetched);
     }
    return(
        <div>
        <h1>{restaurant.name}</h1>
        <img src={Imageurl+restaurant.cloudinaryImageId} alt="" />
        <h2>Restaurant id:{restaurant.id}</h2>
        <h3>city : {restaurant.city}</h3>
        <h3>AvgRating : {restaurant.avgRating} *</h3>
        <h3>Cost:{restaurant.costForTwoMessage } </h3>
        </div>
    )
}
export default RestauMenu;