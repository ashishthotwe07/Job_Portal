import { FaLink } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className='container px-4 2xl:px-20 mx-auto flex flex-wrap items-center justify-between gap-6 py-5 mt-20 border-t border-gray-300'>
      <div
        className='flex items-center cursor-pointer'
        onClick={() => navigate('/')}
      >
        <FaLink className='text-blue-600 text-3xl mr-2' />
        <span className='text-xl font-bold text-gray-900 tracking-wide'>JobLinker</span>
      </div>
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-600 max-sm:hidden'>
        Copyright © {new Date().getFullYear()} JobLinker | All rights reserved.
      </p>
      <div className='flex gap-3'>
        <img width={32} src={assets.facebook_icon} alt="Facebook" className='hover:opacity-80 transition' />
        <img width={32} src={assets.twitter_icon} alt="Twitter" className='hover:opacity-80 transition' />
        <img width={32} src={assets.instagram_icon} alt="Instagram" className='hover:opacity-80 transition' />
      </div>
    </footer>
  );
};

export default Footer;
