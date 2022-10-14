import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    // console.log(cart);
    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Products: {cart.length}</h4>
            {
                cart.map(item => <p
                    key={item._id}
                >
                    {item.name} &nbsp;
                    <button onClick={() => handleRemoveItem(item)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;