'use client'
import Link from 'next/link';
import logo from '../../assets/logo.jpg'
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';

const NavbarPage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    const handleSignout = async() =>{
        await authClient.signOut();
    }
    const links = <>
    <Link href={'/'}>Home</Link>
    <Link href={'/products'}>Product</Link>
    <Link href={'/profile'}>My Profile</Link>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Image src={logo} alt='logo' width={50} height={50}></Image>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 text-xl font-semibold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                        {!user && <Link className='btn btn-primary' href={'/login'}>Login</Link>}
                        {user && <div className="avatar gap-3">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <Image src={user?.image} alt='Avater' width={50} height={50} referrerPolicy='no-referrer'></Image>
                            </div>
                            <button onClick={handleSignout} className='btn btn-error text-white font-bold'>SignOut</button>
                        </div>
                        }
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;