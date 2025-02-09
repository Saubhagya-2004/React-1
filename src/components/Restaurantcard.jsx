
const RestaurantCard = ({ resturant}) => {
    console.log(resturant);
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resturant.info.cloudinaryImageId}`;

    return (
        <div className='resturant-card'>
            <img src={imageUrl} alt={name} />
            <h2>{resturant.info.name}</h2>
            <h3>Area:{resturant.info.areaName}</h3>
            <p>Locality:{resturant.info.locality}</p>
            <h4>{resturant.info.cuisines.join(",")}</h4>
            <h5>Cost For Two:{resturant.info.costForTwo}</h5>
            <p>Rating: {resturant.info .avgRating}</p>
        
        </div>
    );
};

export default RestaurantCard;