import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import MobileNav from './MobileNav';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {

  const [openMenu, setOpenMenu] = useState(false);
  
  const router = useRouter();

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
    <div className="layout">
      <Head>
        <title>Westup Agro Farmer Producer Company Lmtd.</title>
      </Head>
      <header>
        <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
      <aside className="searchContainer2">
        <input className='searchBar' type="text" placeholder='Search Products' onKeyDown={handleSearch} />
        <div onClick={handleSearchOnClick}>
          <FaMagnifyingGlass style={{ color: 'white'}} />
        </div>
      </aside>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout;