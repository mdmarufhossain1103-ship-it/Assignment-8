
import Image from 'next/image';
import React from 'react';

const DetailsPage = async({params}) => {
    const {id} =await params;
        const res = await fetch('http://localhost:4000/products')
        const products = await res.json();
        const product = products.find(p => p.id == id)
    return (
        <div>
            <div className="card bg-base-100 max-w-[80%] p-5 mx-auto my-20 shadow-sm">
                <Image className='w-full h-[80vh]' src={product.image} alt={product.name} width={100} height={100}></Image>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;