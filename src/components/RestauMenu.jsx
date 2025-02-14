import { useParams } from "react-router-dom";
import { useEffect } from "react";
const RestauMenu=()=>{
    const{id} =useParams();//destructuring
    // console.log(params);
    useEffect(()=>{
        getrestaurantinfo();
    },[]);
     async function getrestaurantinfo() {
        const data= await fetch("https://zuingy.mishra.codes/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&submitAction=ENTER&restaurantId=375041");
        // console.log(data);
        const json =await data.json();
        console.log(json);
        
     }
    return(
        <div>
        <h1>Restaurant id:{id}</h1>
        <h2>Hlw</h2>
        </div>
    )
}
export default RestauMenu;