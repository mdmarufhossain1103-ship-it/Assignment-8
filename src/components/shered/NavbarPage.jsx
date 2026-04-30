
import Link from 'next/link';
import logo from '../../assets/logo.jpg'
import Image from 'next/image';

const NavbarPage = () => {
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
                    <div className='flex gap-2 items-center'>
                        <Image src={logo} alt='logo' width={50} height={50}></Image>
                        <Link className='btn btn-primary' href={'/login'}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;