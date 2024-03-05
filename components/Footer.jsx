import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
            <div className="footer-items">
            <div className="f-items">
                  <p className="logo">
                    <Link href="/">
                      <img src="/logo.webp" alt="Westup Agro Farmer Producer Company Lmtd." />
                    </Link>
                  </p>
                  <p style={{marginTop: '30px', fontSize: '0.8rem', opacity: '0.5'}}>© Copyright 2023. All Rights Reserved by Attendify</p>
                </div>
                <div className="f-items">Products
                    <ul>
                      <li><Link href="/[category]/[subcategory]" as='/seeds/vegetable-seeds'>Vegetable seeds</Link></li>
                      <li><Link href="/[category]/[subcategory]" as='/seeds/flower-seeds'>Flower Seeds</Link></li>
                      <li><Link href="/[category]/[subcategory]" as='/seeds/fruit-seeds'>Fruit Seeds</Link></li>
                      <li><Link href="/[category]/[subcategory]" as='/seeds/cereals'>Cereals</Link></li>
                      <li><Link href="/[category]/[subcategory]" as='/crop-protection/insecticides'>Insecticides</Link></li>
                      <li><Link href="/[category]/[subcategory]" as='/crop-protection/fungicides'>Fungicides</Link></li>
                      <li><Link href="/[category]/[subcategory]" as='/crop-protection/herbicides'>Herbicides</Link></li>
                      
                    </ul>
                </div>
                <div className="f-items">Download App
                    <ul>
                        <li><a href="https://play.google.com/store/games?hl=en&gl=US" target='_blank'><i className="fa-brands fa-google-play"></i> Google Play</a></li>
                        <li><a href="https://www.apple.com/in/app-store/" target='_blank'><i className="fa-brands fa-app-store-ios"></i> App Store</a></li>
                    </ul>
                </div>
                <div className="f-items">Tech Stack
                    <ul>
                        <li><a href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank">React</a></li>
                        <li><a href="https://sass-lang.com/" target="_blank">SASS</a></li>
                        <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
                        <li><a href="https://nodejs.org/en" target="_blank">NodeJS</a></li>
                        <li><a href="https://expressjs.com/" target="_blank">Express</a></li>
                    </ul>
                </div>
            </div>
            <div className="follow">
                <a href="https://www.instagram.com/mohamed_aashir_/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/aashxx/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/aashxx/" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
        </footer>
    </div>
  )
}

export default Footer;