import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Imageurl } from "./constant";
import Shimmer from "./Shimmer";
const RestauMenu=()=>{
    const{id} =useParams();//destructuring
    const [restaurant,setRestaurant]=useState([]);
    const [menuItems,setMenuItems]= useState([]);
    // console.log(params);
    useEffect(()=>{
        getrestaurantinfo();
    },[id]);
    
     async function getrestaurantinfo() {
        try{
        const data = await fetch(`https://zuingy.mishra.codes/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&submitAction=ENTER&restaurantId=${id}`);
        // console.log(data);
        //id:375041
        const json =await data.json();
        //set restu info
        const restaurantInfo = json.data.cards[2].card.card.info;
            setRestaurant(restaurantInfo);
        //menu items
        const menuData = json.data.cards.find(card => card.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        if(menuData){
            const catagories = menuData.filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                )
                .map(card => ( {
                    title : card.card.card.title,
                    items :card.card.card.itemCards.map(item=>({
                        id: item.card.info.id,
                        name :item.card.info.name,
                        description : item.card.info.description,
                        price : item.card.info.price /100,
                        imageId : item.card.info.imageId,
                        isVeg : item.card.info.isVeg,
                        isBestseller: item.card.info.ribbon?.text === "Bestseller"
                    }))

                }));
                setMenuItems(catagories);
        }
    }
        catch (error){
            console.error("Error fetching data:", error);
        }
     }
    return (
        <div className="restaurant-menu">
            <div className="restaurant-header">
                <div className="restaurant-info">
                    <h1>{restaurant.name}</h1>
                    <div className="restaurant-details">
                        <p>{restaurant.cuisines?.join(", ")}</p>
                        <p>{restaurant.areaName}, {restaurant.city}</p>
                        <div className="restaurant-metrics">
                            <div className="metric">
                                <span className="rating">★ {restaurant.avgRating}</span>
                                <span className="metric-label">{restaurant.totalRatingsString}</span>
                            </div>
                            <div className="divider"></div>
                            <div className="metric">
                                <span>{restaurant.sla?.deliveryTime} mins</span>
                                <span className="metric-label">Delivery Time</span>
                            </div>
                            <div className="divider"></div>
                            <div className="metric">
                                <span>{restaurant.costForTwoMessage}</span>
                                <span className="metric-label">Cost for two</span>
                            </div>
                        </div>
                    </div>
                </div>
                {restaurant.cloudinaryImageId && (
                    <img 
                        className="restaurant-image"
                        src={`${Imageurl}${restaurant.cloudinaryImageId}`} 
                        alt={restaurant.name} 
                    />
                )}
            </div>

            {/* Menu Categories */}
            <div className="menu-container">
                {menuItems.map((category, index) => (
                    <div key={index} className="menu-category">
                        <h2 className="category-title">{category.title}</h2>
                        <div className="items-grid">
                            {category.items.map(item => (
                                <div key={item.id} className="menu-item">
                                    <div className="item-info">
                                        <div className="item-header">
                                            {item.isVeg ? 
                                                <span className="veg-badge">🟢</span> : 
                                                <span className="nonveg-badge">🔴</span>
                                            }
                                            <h3 className="item-name">{item.name}</h3>
                                            {item.isBestseller && 
                                                <span className="bestseller-badge">⭐ Bestseller</span>
                                            }
                                        </div>
                                        <p className="item-price">₹{item.price}</p>
                                        {item.description && 
                                            <p className="item-description">{item.description}</p>
                                        }
                                    </div>
                                    {item.imageId && (
                                        <div className="item-image-container">
                                            <img 
                                                src={`${Imageurl}${item.imageId}`} 
                                                alt={item.name}
                                                className="item-image"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestauMenu;