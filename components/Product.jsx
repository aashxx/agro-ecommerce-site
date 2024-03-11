import React from 'react';
import Link from 'next/link';

import { urlFor } from '../sanity/lib/client';
import Image from 'next/image';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            src={urlFor(image && image[0])}
            alt='none'
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">₹{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product;