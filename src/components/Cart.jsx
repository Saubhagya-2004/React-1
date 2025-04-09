import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Imageurl } from '../components/constant';
import { clearcart, additems, removeitems,deleteitems } from '../../utils/cartslice';
//icon
import { MdDelete } from "react-icons/md";
function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleclearcart = () => {
        dispatch(clearcart());
    };

   const handleadd = (item) =>{
    dispatch(additems(item))
   }
   const handledelete = (item) =>{
    dispatch(deleteitems(item));
   }

    const handleremove = (item) => {
        dispatch(removeitems({ id: item.id })); // Dispatch removeitems action
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className="text-pink-500">
                Cart - {cartItems.length} Items
                <span>
                    <button onClick={handleclearcart}>Clear Cart</button>
                </span>
            </h1>
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
                            {item.isVeg ? (
                                <span className="veg-badge">🟢</span>
                            ) : (
                                <span className="nonveg-badge">🔴</span>
                            )}
                            <h3 className="item-name">{item.name}</h3>
                            <p className="item-price">Price: ₹{item.price}</p>
                            <p className="item-quantity">Quantity: {item.quantity}</p>
                            <p className="item-total">Total: ₹{item.price * item.quantity}</p>
                            <button className="remove-button" onClick={() => handleadd(item)}>+</button>
                            <button className="remove-button" onClick={() => handledelete(item)}>-</button>
                            <button onClick={() => handleremove(item)}><MdDelete/></button>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="total-price">Total Price: ₹{totalPrice}</h2>
        </div>
    );
}

export default Cart;
