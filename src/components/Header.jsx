import { useState} from "react";
import Logo from "../assests/img/food.jpeg";
import { Link } from "react-router-dom";
import useAuth from "../../utils/useAuth";
import { useSelector } from "react-redux";
import Store from "../../utils/Store";
import { IoCart } from "react-icons/io5";

const Title = () => (
    <a href="/">
        <img 
            className="logo"
            alt="logo"
            src={Logo}
        />
    </a>
);

const HeaderComponent = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
  const cartitems = useSelector( Store=> Store.cart.items)
  console.log(cartitems);
  
  // (Store => Store.cart.items) specifies which part of the Redux state you want to extract. In this case, it is accessing Store.cart.items.store.js
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li>Home</li>
                    </Link>
                    <Link to='/about' style={{ textDecoration: 'none' }}>
                        <li>About</li>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                        <li>Contact Us</li>
                   </Link>
                    
                   <Link to='/cart' style={{textDecoration:'none'}}>
                   <li><IoCart />{cartitems.length}</li>
                   </Link>
                    
                    {/* <Link to='/instamart' style={{ textDecoration: 'none' }}>
                        <li>Insta Mart</li>
                    </Link> */}
                </ul>
            </div>
            
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    );
};

export default HeaderComponent;
