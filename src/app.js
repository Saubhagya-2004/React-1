import React from 'react';
import ReactDOM from 'react-dom/client';
//default export
import HeaderComponent from './components/Header';
//Named export
// import { Title,HeaderComponent }  from './components/Header';
//or
// import HeaderComponent,{ Title } from './components/Header.jsx'; 


// const Title=()=>(
//     <img 
//     className='logo'
//     src='https://th.bing.com/th/id/OIP.WV9sVQ5yJJ94ZqPoAWh7OAHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='logo'/>
// );

const ResturantData=[
    {id:1,Name:'Pizza',ShopName:'Ameian',cuisine:'Italy',rating:'4.2',Image:'https://th.bing.com/th/id/OIP.WQBi0m_4hgc8WXSRL-_ovAHaFH?w=289&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {id:2,Name:'Burger',ShopName:'BurgeY',cuisine:'American',rating:'4.1',Image:'https://th.bing.com/th/id/OIP.RNEJRcChNOXRi0A6LU7KfAHaFE?w=286&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {id:3,Name:'Sushi',ShopName:'Shiyan',cuisine:'Japan',rating:'4.1',Image:'https://th.bing.com/th/id/OIP.iKknrvDGBL6xd-vkTzcHpQHaE6?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
    {id:4,Name:'Idli-Dosa',ShopName:'Anna-Restu',cuisine:'Indian',rating:'4.5',Image:'https://th.bing.com/th/id/OIP.qcGu4nx1n-BgdM_tQV8w2wHaE8?w=277&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
   
   
];
const ResturantCard=({Name,Image,ShopName,cuisine,rating})=>{
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
const ResturantList=()=>(
    <div className='resturant-list'>
        {ResturantData.map((resturant)=>(
            <ResturantCard key={resturant.id}{...resturant}/>
        ))}
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