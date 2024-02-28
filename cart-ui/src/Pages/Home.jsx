import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import axios from 'axios';

function Home() {
    const baseURL = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState([]);
    const [cartNum, setCartNum] = useState(0);
    
    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, []);

    console.log(products, 'products');
    const updateCartNum = (newCartNum) => {
        setCartNum(newCartNum);
    };

    return (
        <>
            <Header cartNum={cartNum} />
            <Main cartNum={cartNum} updateCartNum={updateCartNum} products={products} />
        </>
    );
}

export default Home;
