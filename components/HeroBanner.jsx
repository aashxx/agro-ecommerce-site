import React from 'react';
import Link from 'next/link';

import { urlFor } from '../sanity/lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container" style={{ background: `url('${urlFor(heroBanner.image)}') no-repeat center center/cover`}}>
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;