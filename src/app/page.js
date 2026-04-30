import Image from 'next/image';
import banner from '../assets/banner.jpg'
import HomePage from './home/page';


export default function Home() {
  return (
    <div className='max-w-[80%] mx-auto'>
        <Image className='w-full h-[60vh] my-15' src={banner} alt='Banner photo' width={500} height={300}></Image>
        <HomePage></HomePage>
    </div>
  );
}
