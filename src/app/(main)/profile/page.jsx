'use client'
import UpdateProfile from '@/components/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    if(!user){
        return <div>
            <p className='flex items-center justify-center my-15 font-bold text-3xl'>No user found.</p>
        </div>
    }
    return (
        <div className=' flex items-center justify-center my-15'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="avatar gap-3 flex items-center justify-center">
                <div className="ring-primary ring-offset-base-100 w-30 rounded-full ring-2 ring-offset-2">
                <Image src={user?.image} alt='Avater' width={50} height={50} referrerPolicy='no-referrer'></Image>
                </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-bold">Name: {user?.name}</h2>
                    <p className='text-lg font-semibold'>Email: {user?.email}</p>
                    <div className="card-actions">
                        <UpdateProfile></UpdateProfile>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;