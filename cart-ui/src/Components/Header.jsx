import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMugHot } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
        <>
            <div className='w-full bg-black'>
                <div className='w-4/5 mx-auto h-20 flex justify-between items-center'>
                    <div className='logo-section'><FontAwesomeIcon icon={faMugHot} style={{ color: 'rgb(135 29 29)', fontSize: '25px' }} /> <label>CofeeKart</label></div>
                    <div>
                        <input type="search" className='input__field' placeholder='Search Products' />
                    </div>
                    <div>
                        <div style={{ color: '#000', fontSize: '14px', textAlign: 'right' }}> <span className='cart_num'>{props.cartNum}</span></div>
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} style={{ color: '#fff', fontSize: '25px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
