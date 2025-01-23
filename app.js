import React from 'react';
import ReactDOM from 'react-dom/client';
const Title=()=>(
    <img 
    className='logo'
    src='https://th.bing.com/th/id/OIP.WV9sVQ5yJJ94ZqPoAWh7OAHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='logo'/>
);
const HeaderComponent=()=>(
    <div className='header'>
        <Title/>
        <div className='nav-items' >
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
// const pizza={
//     name:"Pizza",
//     price:'PRICE : 5.8 $',
//     image: 'https://th.bing.com/th/id/OIP.WQBi0m_4hgc8WXSRL-_ovAHaFH?w=289&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
//     description: 'Pizza is a popular dish that organized by Itly',
//     rating:'4.2',
//     cusines:["Pizza", "  Itly"],
// }
// const ResturantCard=()=>(
// <div className='card'>
//     <img src={pizza.image}/>
//     <h2>{pizza.name}</h2>
//     <h3>{pizza.cusines.join(',')}</h3>
//     <h4>{pizza.description}</h4>
//     <h4>{pizza.price}</h4>
//     <h5>{pizza.rating}Stars</h5>

// </div>
// );
const ResturantData=[
    {id:1,Name:'Pizza',ShopName:'Ameian',cuisine:'Italy',rating:'4.2',Image:'https://th.bing.com/th/id/OIP.WQBi0m_4hgc8WXSRL-_ovAHaFH?w=289&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {id:2,Name:'Burger',ShopName:'BurgeY',cuisine:'American',rating:'4.1',Image:'https://th.bing.com/th/id/OIP.RNEJRcChNOXRi0A6LU7KfAHaFE?w=286&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {id:3,Name:'Sushi',ShopName:'Shiyan',cuisine:'Japan',rating:'4.1',Image:'https://th.bing.com/th/id/OIP.iKknrvDGBL6xd-vkTzcHpQHaE6?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
];
const ResturantList = () => (
    <div className="resturant-list">
      {ResturantData.map((resturant) => (
        <ResturantCard key={resturant.id} {...resturant} />
      ))}
    </div>
  );
const ResturantCard=({Name,ShopName,cuisine,rating,Image})=>(
    <div className='resturant-card'>
        <img src={Image}/>
        <h2>{ShopName}</h2>
        <h3>{Name}</h3>
        <h4>{cuisine}</h4>
        <p>Rating{rating}</p>
        
    </div>
);
const Body=()=>(
   <div>
    <ResturantList/>
   </div>
);
const Footer=()=>(
    <div>
        <h1>Footer</h1>
    </div>
)
const AppLayout=()=>(
    <>
    <HeaderComponent/>
    <Body/>
    <Footer/>
    </>
)
//react fragment
// const jsx=(
//     <React.Fragment>
//     <h1>Jsx</h1>
//     <h2>This is jsx</h2>
//     </React.Fragment>
    
// );

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);