import { useState, useEffect } from "react";
import { Fetch_menu_url } from "../src/components/constant";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        getRestaurantInfo();
    }, [id]);

    async function getRestaurantInfo() {
        try {
            const data = await fetch(`${Fetch_menu_url}${id}`);
            // const data = await fetch(Fetcch_menu_url+id);
            const json = await data.json();
            console.log(json);
            
            // Set restaurant info
            const restaurantInfo = json.data.cards[2].card.card.info;
            setRestaurant(restaurantInfo);

            // Menu items
            const menuData = json.data.cards.find(card => card.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            if (menuData) {
                const categories = menuData.filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
                    .map(card => ({
                        title: card.card.card.title,
                        items: card.card.card.itemCards.map(item => ({
                            id: item.card.info.id,
                            name: item.card.info.name,
                            description: item.card.info.description,
                            price: item.card.info.price / 100,
                            imageId: item.card.info.imageId,
                            isVeg: item.card.info.isVeg,
                            isBestseller: item.card.info.ribbon?.text === "Bestseller"
                        }))
                    }));
                setMenuItems(categories);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return { restaurant, menuItems };
}

export default useRestaurant;