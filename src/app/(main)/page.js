import Image from 'next/image';
import banner from '../../assets/banner.jpg'
import HomePage from './home/page';
import Marquee from 'react-fast-marquee';


export default function Home() {
  return (
    <div className='max-w-[80%] mx-auto'>
      <Marquee><span className='text-md text-green-500 animate__animated animate__bounce'>A Product-based Modern E-Commerce Platform for all the needs of E-Commerce merchants and Enterprise Businesses.</span></Marquee>
      <Image className='w-full h-[60vh] my-15' src={banner} alt='Banner photo'  width={500} height={300}></Image>
        <HomePage></HomePage>
    </div>
  );
}
