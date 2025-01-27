const RestaurantCard=({Name,Image,ShopName,cuisine,rating})=>{
    return(
        <div className='resturant-card'>
            <img src={Image}/>
            <h2>{Name}</h2>
            <h3>{ShopName}</h3>
            <h4>{cuisine}</h4>
            <p>Rating{rating}</p>

        </div>
    )
}
export default RestaurantCard;