import { useEffect } from 'react';
import { Product } from '../../components';
import { client } from '../../sanity/lib/client';
import { useRouter } from 'next/router';

const CategoryProducts = ({ products }) => {

    const router = useRouter();
    const { category, subcategory } = router.query;

    useEffect(() => {
        if(!localStorage.getItem("token")) {
        router.push('/auth/login');
        }
    }, []);

    return (
        <div>
            <div className="products-heading">
                <h2>{category.replace('-', ' ').toUpperCase()}</h2>
                <p>{ category == "farming-tools" ? "" : subcategory.toLocaleUpperCase().replace('-', ' ')}</p>
            </div>
            <div className="products-container">
                {products?.map((product) => <Product key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { category, subcategory } = params;
    const query = `*[_type == "product" && category == "${category}" && subCategory == "${subcategory}"]`;
    const products = await client.fetch(query);

    return {
      props: { products }
    }
}

export default CategoryProducts;
