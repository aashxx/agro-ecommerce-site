import React, { useEffect } from 'react';

import { client } from '../sanity/lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import { useRouter } from 'next/router';

const Home = ({ products, bannerData, achievement }) => {

  const router = useRouter();

  useEffect(() => {
    if(!localStorage.getItem("token")) {
      router.push('/auth/login');
    }
  }, []);

  return (
    <div>
      <HeroBanner heroBanner={bannerData && bannerData}  />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Access to all quality products</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner achievement={achievement && achievement} />
    </div>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const achievementQuery = '*[_type == "achievement"]';
  const achievement = await client.fetch(achievementQuery);

  return {
    props: { products, bannerData, achievement }
  }
}

export default Home;