
const RestaurantCard = ({ restaurant}) => {
    // console.log(resturant);
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.info.cloudinaryImageId}`;

    return (
        <div className='resturant-card'>
            <div className="restu-detail">
            <img src={imageUrl} alt={name} />
            <h2>{restaurant.info.name}</h2>
            <h3 className='cusine'>{restaurant.info.cuisines.join(",")}</h3>
            <h4>Area:{restaurant.info.areaName}</h4>
            <p>Locality:{restaurant.info.locality}</p>
            <h5>Cost :{restaurant.info.costForTwo}</h5>
            <h6>Delivery Time: {restaurant.info.sla.deliveryTime} Min  <br/><br/> Distance{restaurant.info.sla.lastMileTravelString}</h6>
            <p>Opened : {restaurant.info.availability.opened?"YES":"No"}</p>
            <p>AvgRating: {restaurant.info .avgRating}</p>
        </div>
        </div>
    );
};

export default RestaurantCard;