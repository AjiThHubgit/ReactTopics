import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import { fetch_data } from "../utils/constant";

function Home() {

    const [originalProducts, setOriginalProducts] = useState([]);
    const [products, setProduct] = useState([]);

    async function getProduct(){
        setProduct( await fetch_data('https://fakestoreapi.com/products'));
      }
      useEffect(() => {
        getProduct();
      }, []);

    // const searchFilter = (searchText) => {
    //     if (searchText === "") {
    //         setProduct(originalProducts); // If search text is empty, revert to original products
    //     } else {
    //         const filteredProducts = originalProducts.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
    //         setProduct(filteredProducts);
    //     }
    // };

    return (
        <>
            <Header products={products} />
            <Main products={products} />
        </>
    );
}

export default Home;
