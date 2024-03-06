import React from "react";
import { useSelector } from "react-redux";

const AddToCard = () => {
    const store = useSelector(store => store);
    console.log('store', store);

    return (
        <>
            <div className="p-16 flex flex-wrap gap-5">
                {
                    store.map((item, index) =>
                    (
                        <div key={item.id} className="border h-52 w-52">
                            <img src={item.image} className="h-3/4" />
                            <p>{item.title}</p>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default AddToCard;