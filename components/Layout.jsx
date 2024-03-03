import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import MobileNav from './MobileNav';

const Layout = ({ children }) => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="layout">
      <Head>
        <title>Westup Agro Farmer Producer Company Lmtd.</title>
      </Head>
      <header>
        <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
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