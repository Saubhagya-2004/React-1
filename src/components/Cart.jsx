import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Imageurl } from './Constant'
import { clearcart } from '../../utils/cartslice'
function Cart() {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleclearcart = ()=>{
        dispatch(clearcart())
    }
    return (
        <div>
            <h1 className='text-pink-500'>Cart - {cartItems.length} <span>
                <button onClick={()=>handleclearcart()}>Clear Cart</button>
                </span></h1>
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        {item.description && (
                            <div className="item-image-container">
                                <img 
                                    src={`${Imageurl}${item.imageId}`} 
                                    alt={item.name}
                                    className="item-image"
                                />
                            </div>
                        )}
                         <div className="item-header">
                            {item.isVeg ? 
                                <span className="veg-badge">🟢</span> : 
                                <span className="nonveg-badge">🔴</span>
                            }
                           
                            <h3 className="item-name">{item.name}</h3>
                            
                        </div>
                        <p className="item-price">Price ₹{item.price}</p>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart
