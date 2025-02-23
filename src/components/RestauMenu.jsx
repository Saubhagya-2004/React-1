import { useParams } from "react-router-dom";//useparams give url id(res id)
import { useEffect, useState } from "react";
import { Imageurl } from "./Constant";
import ShimmerRestau from "../../utils/shimmerRestau";
import useRestaurant from "../../utils/useRestaurant";

const RestauMenu = () => {
    const { id } = useParams(); // destructuring
    const { restaurant, menuItems } = useRestaurant(id);

    useEffect(() => {
        // Fetch menu items here and set them to state
        // Example:
        // fetchMenuItems(id).then(items => setMenuItems(items));
    }, [id]);

    if (!restaurant) {
        return < ShimmerRestau/>;
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