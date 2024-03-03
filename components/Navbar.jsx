import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import Popup from 'reactjs-popup';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <img src="/logo.webp" alt="Westup Agro Farmer Producer Company Lmtd." />
        </Link>
      </p>

      <div className='nav-items'>
        <Popup trigger={<button className='nav-popup-triggers'>Seeds</button>} position='bottom center' on='hover' mouseLeaveDelay={300}>
          {
            (close) => (
              <div className='options'>
                <Link href="/[category]/[subcategory]" as='/seeds/vegetable-seeds'>Vegetable seeds</Link>
                <Link href="/[category]/[subcategory]" as='/seeds/flower-seeds'>Flower Seeds</Link>
                <Link href="/[category]/[subcategory]" as='/seeds/fruit-seeds'>Fruit Seeds</Link>
                <Link href="/[category]/[subcategory]" as='/seeds/cereals'>Cereals</Link>
              </div>
            )
          }
        </Popup>
        <Popup trigger={<button className='nav-popup-triggers'>Crop Protection</button>} position='bottom center' on='hover' mouseLeaveDelay={300}>
          {
            (close) => (
              <div className='options'>
                <Link href="/[category]/[subcategory]" as='/crop-protection/insecticides'>Insecticides</Link>
                <Link href="/[category]/[subcategory]" as='/crop-protection/fungicides'>Fungicides</Link>
                <Link href="/[category]/[subcategory]" as='/crop-protection/herbicides'>Herbicides</Link>
              </div>
            )
          }
        </Popup>
        <Popup trigger={<button className='nav-popup-triggers'>Plant Nutrition</button>} position='bottom center' on='hover' mouseLeaveDelay={300}>
          {
            (close) => (
              <div className='options'>
                <Link href="/[category]/[subcategory]" as='/plant-nutrition/plant-growth-promoters'>Plant Growth Promoters</Link>
                <Link href="/[category]/[subcategory]" as='/plant-nutrition/fertilizers'>Fertilizers</Link>
              </div>
            )
          }
        </Popup>
        <Link href="/[category]/[subcategory]" as='/farming-tools/no-sub-category' className='nav-popup-triggers'>Farming Tools</Link>
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
