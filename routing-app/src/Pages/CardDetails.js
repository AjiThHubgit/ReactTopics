import React from 'react'
import Header from '../Components/Header';
import { resJson } from '../utils/constant';
import { useLocation } from 'react-router-dom';

export default function CardDetails() {

    const location = useLocation().state;
    console.log(location, 'location');

    return (
        <div>
            <Header data={resJson} />
            <div>
                <p>Product Details :</p>
                <div>
                    <p>title : {location.title}</p>
                    <p>price : {location.price}</p>
                    <p>desc : {location.desc}</p>
                </div>

                <p>Specification :</p>

                <div>
                    {location.details.map((list, i) =>

                    (
                        <div key={i}>
                            <p>{list.section}: {list.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
