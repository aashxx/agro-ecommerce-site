import React, { useEffect, useState } from 'react';
import { Product } from '../components';
import { client } from '../sanity/lib/client';
import { useRouter } from 'next/router';

const Search = ({ products }) => {

    const router = useRouter();
    const { searchItem } = router.query;

    const [searchItems, setSearchItems] = useState([]);
    
    useEffect(() => {
      if(!localStorage.getItem("token")) {
        router.push('/auth/login');
      }
    }, []);

    useEffect(() => {
        const displaySearchItems = () => {
            const results = products?.filter(product => 
                product.name.toLowerCase().includes(searchItem.toLowerCase())
            );

            setSearchItems(results);
        }

        if(searchItem) {
            displaySearchItems();
        }

    }, [searchItem]);

    return (
        <div>
            {
                searchItem ? (
                    <>
                        <div className="products-heading">
                            <h2>Search Results</h2>
                            <p>Products matching to &quot;{searchItem}&quot;</p>
                        </div>
                        <div className="products-container">
                            {
                                searchItems.length == 0 ? (
                                    <h2>No Products</h2>
                                ) : searchItems?.map((product) => <Product key={product._id} product={product} />)
                            }
                        </div>
                    </>
                ) : (
                    <>
                        <div className="products-heading">
                            <h2>Page not Found</h2>
                            <p>Bad Request...</p>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export const getServerSideProps = async () => {
    const query = `*[_type == "product"]`;
    const products = await client.fetch(query);

    return {
      props: { products }
    }
}

export default Search;