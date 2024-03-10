import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import { fetch_data } from "../utils/constant";

function Home() {

    // const [originalProducts, setOriginalProducts] = useState([]);
    const [products, setProduct] = useState([]);

    async function getProduct(){
        setProduct( await fetch_data('https://fakestoreapi.com/products'));
      }
      useEffect(() => {
        getProduct();
      }, []);

    return (
        <>
            <Header products={products} />
            <Main products={products} />
        </>
    );
}

export default Home;
