const RestaurantCard=({name,imageId,shopName,cuisine,rating})=>{
    return(
        <div className='resturant-card'>
            <img src={imageId}/>
            <h2>{name}</h2>
            <h3>{shopName}</h3>
            <h4>{cuisine}</h4>
            <p>Rating{rating}</p>

        </div>
    )
}
export default RestaurantCard;