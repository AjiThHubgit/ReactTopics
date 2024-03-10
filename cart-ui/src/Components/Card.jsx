import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product.action";

function Card(props) {
    const [quantity, setQuantity] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addProduct(product));
    }

    return (
        <>
            <div className="w-4/5 mx-auto card__container">
                {props.products.map((product) => (
                    <div key={product.id} className="shadow-lg shadow-white-500/40 mt-10 bg-white rounded flex flex-col">
                        <div className="p-5 fs-14 flex-1">{product.title}</div>
                        <div className="flex justify-center p-5" onClick={() => addToCart(product)}>
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
                            <button className="w-1/2 p-3 border-r-4 fw-600" onClick={() => addToCart(product)}>Add To cart</button>
                            <button className="w-1/2 p-3 fw-600">Buy Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Card;
