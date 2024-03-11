import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const MobileNav = ({ setOpenMenu, openMenu }) => {
  return (
    <nav className='mobile-navbar'>
        <p className="logo">
            <Link href="/">
            <Image src="/logo.webp" alt="Westup Agro Farmer Producer Company Lmtd." />
            </Link>
        </p>
        <button className='menuBtn' onClick={() => setOpenMenu(!openMenu)}>
            <AiOutlineMenu />
        </button>
    </nav>
  )
}

export default MobileNav;