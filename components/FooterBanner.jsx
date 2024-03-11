import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { urlFor } from '../sanity/lib/client';
import Image from 'next/image';

const FooterBanner = ({achievement}) => {
  return (
    <section className='photo-section' style={{ marginTop: '100px' }}>
      <div className='products-heading'>
          <h2>📸 Achievements</h2>
      </div>
      <Carousel className='carousel' autoPlay infiniteLoop interval={1000} showArrows={false} showThumbs={false} showStatus={false}>
          {
            achievement?.map((i, index) => (
              <Image key={index} src={urlFor(i.image && i.image)} alt="" />
            ))
          }
      </Carousel>
    </section>
  )
}

export default FooterBanner;