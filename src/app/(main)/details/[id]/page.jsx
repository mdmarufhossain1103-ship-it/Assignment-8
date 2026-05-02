
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const DetailsPage = async({params}) => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session){
        redirect('/login');
    }
    const {id} =await params;
        const res = await fetch('http://localhost:4000/products')
        const products = await res.json();
        const product = products.find(p => p.id == id)
    return (
        <div>
            <div className="card bg-base-100 max-w-[80%] p-5 mx-auto my-20 shadow-sm">
                <Image className='w-full h-auto rounded-lg object-cover' src={product.image} alt={product.name} width={900} height={600}></Image>
                <div className="card-body mt-6">
                    <h2 className="card-title text-4xl font-bold mb-3">{product.name}</h2>
                    <p className='text-lg text-gray-300 mb-4'>{product.description}</p>
                    <div className='flex justify-between w-full mb-5'>
                        <p className='text-md font-semibold'><span className='bg-amber-200 p-2 text-white rounded-full'>Brand: {product.brand}</span></p>
                        <p className='text-md font-semibold'><span className='bg-yellow-200 p-2 text-white rounded-full'>Stock: {product.stock}</span></p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <p><span className='flex items-center gap-1 text-3xl font-semibold'><MdOutlineStar className='text-amber-400' />{product.rating}</span></p>
                        <p className='text-4xl font-bold text-gray-400'>${product.price}</p>
                    </div>
                    <p className='text-center mt-5'><span className='bg-green-400 rounded-full p-2 text-xl text-white'>Category: {product.category}</span></p>
                    <ul className='text-center mt-5 font-bold text-gray-400'>
                        <h2 className='underline'>Summer Care Tips</h2>
                        <li>Use SPF 30–50+ daily, even indoors near windows</li>
                        <li>Reapply every 2–3 hours when outside</li>
                        <li>Go for lightweight, non-greasy formulas</li>
                    </ul>
                    <ul className='text-center mt-5 font-bold text-gray-400'>
                        <h2 className='underline'>Top Brands</h2>
                        <li>Neutrogena</li>
                        <li>La Roche-Posay</li>
                        <li>CeraVe</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;