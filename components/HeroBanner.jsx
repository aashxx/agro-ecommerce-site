import React from 'react';
import Link from 'next/link';

import { urlFor } from '../sanity/lib/client';
import { Carousel } from 'react-responsive-carousel';

const HeroBanner = ({ heroBanner }) => {
  return (
    <Carousel autoPlay infiniteLoop interval={3000} showArrows={true} showThumbs={false} showStatus={false}>
      {
        heroBanner?.map((i, index) => (
          <div className="hero-banner-container" style={{ background: `url('${urlFor(i.image)}') no-repeat center center/cover`}}>
            <div>
              <p className="beats-solo">{i.smallText}</p>
              <h3>{i.midText}</h3>
              <h1>{i.largeText1}</h1>
              <div>
                <Link href={`/product/${i.product}`}>
                  <button type="button">{i.buttonText}</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </Carousel>
  )
}

export default HeroBanner;