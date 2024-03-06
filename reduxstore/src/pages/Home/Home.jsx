import React, { useEffect, useState } from "react";
import { fetch_data } from "../../util";
import { useDispatch } from "react-redux";
import { addProduct } from '../../redux/product.action'

export default function Home() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  async function getProduct(){
    setProduct( await fetch_data('https://fakestoreapi.com/products'));
  }
  useEffect(() => {
    getProduct();
  }, []);

  const addToCard = (item) => {
      dispatch(addProduct(item));
  }
 
  return (
    <div className="p-16 flex flex-wrap gap-5">
        {
            product.map((item, index)=>{
                return <div className="border h-52 w-52">
                    <img src={item.image} className="h-3/4" />
                    <button onClick={() => addToCard(item)}> Add to Card </button>
                </div>
            })
        }
    </div>
  );
}
