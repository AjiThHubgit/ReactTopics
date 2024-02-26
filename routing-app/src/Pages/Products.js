import React from 'react'
import Header from '../Components/Header';
import { resJson } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

export default function Products() {
   
    const navigate = useNavigate();

    const data = [
        {   
            id: 1,
            title: "Apple ipad",
            desc: "The latest model of the popular iPad series from Apple.",
            price: "$499",
            details: [
                {
                    section: "Specifications",
                    content: "Screen Size: 10.2 inches\nProcessor: A14 Bionic chip\nStorage: 64GB\nRAM: 4GB\nCamera: 8MP rear, 12MP front\nBattery Life: Up to 10 hours\nOperating System: iOS 15"
                },
                {
                    section: "Comments",
                    content: "Customers love the sleek design and powerful performance of this iPad."
                },
                {
                    section: "Warranty",
                    content: "1-year limited warranty provided by Apple."
                },
                {
                    section: "Accessories",
                    content: "Comes with a charging cable and adapter."
                },
                {
                    section: "Availability",
                    content: "Available in multiple colors: Space Gray, Silver, Gold."
                }
            ]
        },
        {
            id: 2,
            title: "Sony Headphone",
            desc: "High-quality headphones from Sony, delivering immersive sound experience.",
            price: "$199",
            details: [
                {
                    section: "Specifications",
                    content: "Driver Size: 40mm\nFrequency Response: 20Hz - 20kHz\nImpedance: 32 ohms\nSensitivity: 102dB/mW\nCable Length: 1.2 meters"
                },
                {
                    section: "Comments",
                    content: "Users praise the comfortable fit and excellent sound quality of these headphones."
                },
                {
                    section: "Warranty",
                    content: "2-year manufacturer warranty provided by Sony."
                },
                {
                    section: "Accessories",
                    content: "Includes a carrying pouch and detachable audio cable."
                },
                {
                    section: "Compatibility",
                    content: "Compatible with smartphones, tablets, laptops, and other devices with a 3.5mm audio jack."
                }
            ]
        },
        {
            id: 3,
            title: "Nikon DSLR",
            desc: "Professional-grade DSLR camera from Nikon, perfect for capturing stunning photographs.",
            price: "$1299",
            details: [
                {
                    section: "Specifications",
                    content: "Sensor Type: CMOS\nMegapixels: 24.2\nISO Range: 100-25600\nShutter Speed: 1/4000 - 30 sec\nViewfinder Type: Optical\nVideo Resolution: Full HD 1080p"
                },
                {
                    section: "Comments",
                    content: "Photographers appreciate the robust build and exceptional image quality of this DSLR."
                },
                {
                    section: "Warranty",
                    content: "5-year extended warranty available for purchase."
                },
                {
                    section: "Accessories",
                    content: "Includes a rechargeable battery, battery charger, neck strap, and lens cap."
                },
                {
                    section: "Connectivity",
                    content: "Built-in Wi-Fi and Bluetooth for wireless connectivity."
                }
            ]
        }
    ];

    const handleOnclick = (item) => {
        navigate(`/product/${item.id}`, { state: item });
    }

    return (
        <div>
            <Header data={resJson} />
            <div>Products</div>
            <div>
                {
                    data.map((list) => 
                    <div key={list.id}>
                        <p>{list.title}</p>
                        <p>{list.desc}</p>
                        <p>{list.price}</p>
                        <button onClick={()=> handleOnclick(list)}>Show Details ➡️</button>
                    </div>
                    )
                }
            </div>
        </div>
    )
}