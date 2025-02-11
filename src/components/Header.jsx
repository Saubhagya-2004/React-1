import { useState } from "react";
const IsloggedIn=()=>{
    return true;
 }
  const Title=()=>(
 <a href="/">
<img 
className="logo"
alt="logo"
src="https://th.bing.com/th/id/OIP.WV9sVQ5yJJ94ZqPoAWh7OAHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
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
