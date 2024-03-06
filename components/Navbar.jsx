import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Popup from 'reactjs-popup';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from 'next/router';

const Navbar = ({openMenu, setOpenMenu}) => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const closeRef = useRef(null);

  const router = useRouter();

  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      router.push({
        pathname: '/search',
        query: { searchItem: searchItem }
      });
      setSearchItem("");
    }
  };

  const handleSearchOnClick = () => {
      router.push({
        pathname: '/search',
        query: { searchItem: searchItem }
      });
      setSearchItem("");
  };

  return (
    <div className={'navbar-container'} style={{ top: openMenu ? '0' : '-150%'}}>
      <p className="logo">
        <Link href="/"  onClick={() => {setOpenMenu(!openMenu);}}>
          <img src="/logo.webp" alt="Westup Agro Farmer Producer Company Lmtd." />
        </Link>
      </p>

      <div className="searchContainer">
        <input className='searchBar' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} onKeyDown={handleSearch} type="text" placeholder='Search Products' />
        <div onClick={handleSearchOnClick}>
          <FaMagnifyingGlass style={{ color: 'white'}} />
        </div>
      </div>

      <div className='nav-items'>
        <Popup trigger={<button className='nav-popup-triggers'>Seeds</button>} position='bottom center' on='hover' mouseLeaveDelay={300}>
          {
            (close) => (
              <div className='options'>
                <Link href="/[category]/[subcategory]" as='/seeds/vegetable-seeds' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Vegetable seeds</Link>
                <Link href="/[category]/[subcategory]" as='/seeds/flower-seeds' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Flower Seeds</Link>
                <Link href="/[category]/[subcategory]" as='/seeds/fruit-seeds' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Fruit Seeds</Link>
                <Link href="/[category]/[subcategory]" as='/seeds/cereals' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Cereals</Link>
                <button onClick={() => close()} ref={closeRef} style={{display: 'none'}}>Close</button>
              </div>
            )
          }
        </Popup>
        <Popup trigger={<button className='nav-popup-triggers'>Crop Protection</button>} position='bottom center' on='hover' mouseLeaveDelay={300}>
          {
            (close) => (
              <div className='options'>
                <Link href="/[category]/[subcategory]" as='/crop-protection/insecticides' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Insecticides</Link>
                <Link href="/[category]/[subcategory]" as='/crop-protection/fungicides' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Fungicides</Link>
                <Link href="/[category]/[subcategory]" as='/crop-protection/herbicides' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Herbicides</Link>
                <button onClick={() => close()} ref={closeRef} style={{display: 'none'}}>Close</button>
              </div>
            )
          }
        </Popup>
        <Popup trigger={<button className='nav-popup-triggers'>Plant Nutrition</button>} position='bottom center' on='hover' mouseLeaveDelay={300}>
          {
            (close) => (
              <div className='options'>
                <Link href="/[category]/[subcategory]" as='/plant-nutrition/plant-growth-promoters' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Plant Growth Promoters</Link>
                <Link href="/[category]/[subcategory]" as='/plant-nutrition/fertilizers' onClick={() => {setOpenMenu(!openMenu); closeRef.current.click();}}>Fertilizers</Link>
                <button onClick={() => close()} ref={closeRef} style={{display: 'none'}}>Close</button>
              </div>
            )
          }
        </Popup>
        <Link href="/[category]/[subcategory]" as='/farming-tools/no-sub-category' onClick={() => {setOpenMenu(!openMenu); }} className='nav-popup-triggers'>Farming Tools</Link>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>      
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;
