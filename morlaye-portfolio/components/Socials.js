// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiFacebookLine,
  RiPinterestLine,
  RiLinkedinLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/morlaye-sylla-6a69871a2/'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.youtube.com/@MorlayeSylla-cs8xm'} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.facebook.com/morlaye.sylla.142'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://fr.pinterest.com/smorlaye313/_profile/'} className='hover:text-accent transition-all duration-300'>
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
