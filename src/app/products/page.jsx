import { getProducts } from '@/components/lib/data';
import Image from 'next/image';
import React from 'react';

const ProductsPage = async() => {
    const products = await getProducts();
    console.log(products,"products");
    return (
        <div className='max-w-[80%] mx-auto'>
            <h2 className='mt-10 text-center text-4xl font-bold'>Our Products</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-20'>
                {
                    products.map(product => {
                        return (
                            <div key={product.id}>
                                <div className="card bg-base-100 p-5 rounded-lg shadow-sm h-full">
                                    <Image className='w-full' src={product.image} alt={product.name} width={300} height={300}></Image>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl font-bold my-5">{product.name}</h2>
                                        <h3 className='text-xl font-semibold mb-5'>{product.brand}</h3>
                                        <p className='text-lg'>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductsPage;