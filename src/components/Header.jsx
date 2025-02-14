import { useState } from "react";
import Logo from "../assests/img/food.jpeg";
import { Link } from "react-router-dom";
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
                    <Link to="/" style={{textDecoration:'none'}}>
                    <li>Home</li>
                    </Link>
                    <Link to='/about' style={{textDecoration:'none'}}>
                    <li>About</li>
                    </Link>
                    <Link to='/contact' style={{textDecoration:'none'}}>
                    <li>Contact Us</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            {IsloggedIn ? (<button onClick={()=>{setIsloggedIn(false)}} >Logout</button>):(<button onClick={()=>{setIsloggedIn(true)}}>Login</button>)}
        </div>
    );
};
export default HeaderComponent;
