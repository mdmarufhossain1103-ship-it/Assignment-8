
import { getProducts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const HomePage = async() => {
    const products = await getProducts();
    return (
        <div>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-7 my-20'>
                            {
                                products.map(product => {
                                    return (
                                        <div key={product.id}>
                                            <div className="card bg-base-100 p-5 rounded-lg shadow-sm h-full">
                                                <Image className='w-full' src={product.image} alt={product.name} width={300} height={300}></Image>
                                                <div className="card-body">
                                                    <h2 className="card-title text-2xl font-bold my-5">{product.name}</h2>
                                                    <p className='text-lg'>{product.description}</p>
                                                </div>

                                                <Link href={`/details/${product.id}`}><button className='btn btn-primary'>View Details</button></Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                </div>
        </div>
    );
};

export default HomePage;