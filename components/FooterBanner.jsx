import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { urlFor } from '../sanity/lib/client';

const FooterBanner = ({achievement}) => {
  return (
    <section className='photo-section'>
      <div className='products-heading'>
          <h2>📸 Achievements</h2>
      </div>
      <Carousel className='carousel' autoPlay infiniteLoop interval={1000} showArrows={false} showThumbs={false} showStatus={false}>
          {
            achievement?.map((i, index) => (
              <img key={index} src={urlFor(i.image && i.image)} alt="" />
            ))
          }
      </Carousel>
    </section>
  )
}

export default FooterBanner;