import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import axios from 'axios';

function Home() {
    const baseURL = 'https://fakestoreapi.com/products';

    const [originalProducts, setOriginalProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartNum, setCartNum] = useState(0);

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setProducts(response.data);
                setOriginalProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, []);

    console.log(products, 'products');
    const updateCartNum = (newCartNum) => {
        setCartNum(newCartNum);
    };

    const searchFilter = (searchText) => {
        if (searchText === "") {
            setProducts(originalProducts); // If search text is empty, revert to original products
        } else {
            const filteredProducts = originalProducts.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
            setProducts(filteredProducts);
        }
    };

    return (
        <>
            <Header cartNum={cartNum} products={products} searchFilter = {searchFilter}/>
            <Main cartNum={cartNum} products={products} updateCartNum={updateCartNum} />
        </>
    );
}

export default Home;
