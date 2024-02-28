import React, { useState } from "react";

function Card(props) {
    const [quantity, setQuantity] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [cartDetails, setCartDetails] = useState([]);

    const addToCart = (product) => {
        props.updateCartNum(props.cartNum + 1);
        setCartDetails([...cartDetails, product]);
    };

    return (
        <>
            <div className="w-4/5 mx-auto flex gap-5 flex-wrap">
                {props.products.map((product) => (
                    <div key={product.id} className="w-1/4 shadow-lg shadow-white-500/40 mt-10 bg-white">
                        <div className="rounded flex justify-center p-5">
                            <img src={product.image} alt={product.title} className="card_img" />
                        </div>
                        <div>
                            <div className="p-4 flex justify-between">
                                <div>
                                    <label>price : {product.price}</label>
                                </div>
                                <div>
                                    <label>Quantity: </label>
                                    <select>
                                        {quantity.map((item) => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="btn-action border-t-4">
                            <button className="w-1/2 p-3 border-r-4" onClick={() => addToCart(product)}>Add To cart</button>
                            <button className="w-1/2 p-3">Buy Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Card;
