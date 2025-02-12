import { useState } from "react";
import Logo from "../assests/img/food.jpeg";
  const Title=()=>(
 <a href="/">
<img 
className="logo"
alt="logo"
src={Logo}/>
</a>
);
const HeaderComponent=()=>{
    const[IsloggedIn,setIsloggedIn]=useState(true);
    return (
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
            {IsloggedIn ? (<button onClick={()=>{setIsloggedIn(false)}} >Logout</button>):(<button onClick={()=>{setIsloggedIn(true)}}>Login</button>)}
        </div>
    );
};
export default HeaderComponent;
