import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ data }) {

    const { logo, menu_list } = data[0].header_details.nav_items;

    return (
        <div className='header-container'>
            <div className='flex space-between item-center'>
                <div>{logo}</div>
                <nav>
                    <ul className='flex'>
                        {menu_list.map((item, i) => <li key={i}><Link style={{ color: '#ffff', padding: '20px' }} to={item.to}>{item.list}</Link></li>)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
