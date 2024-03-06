import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Header(props) {
    const store = useSelector(store => store);

    console.log('store', store);
    //variable handling
    const [searchText, setSearchText] = useState("");

    // //Function handling
    const searchFilter = (productsList, searchText) => {

        const filterProducts = productsList.filter((list) => {
            return list.title.toLowerCase().includes(searchText.toLowerCase());
        });
        props.searchFilter(filterProducts);
        console.log(filterProducts, 'filterProducts');

    }

    const onChangeSearch = (searchText) => {
        setSearchText(searchText);
        props.searchFilter(searchText); // Pass only the search text here
    };

    console.log(searchText, 'searchText');

    return (
        <>
            <div className='w-full bg-black'>
                <div className='w-4/5 mx-auto h-20 flex justify-between items-center'>
                    <div className='logo-section'><FontAwesomeIcon icon={faMugHot} style={{ color: 'rgb(135 29 29)', fontSize: '25px' }} /> <label>CofeeKart</label></div>
                    <div>
                        <input type="search" value={searchText} onChange={
                            (e) => {
                                onChangeSearch(e.target.value)
                            }
                        } className='input__field' placeholder='Search Products' />
                    </div>
                    <div>
                        <div style={{ color: '#000', fontSize: '14px', textAlign: 'right' }}> <span className='cart_num'>{store.length}</span></div>
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
