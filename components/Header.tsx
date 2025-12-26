'use client';

import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative flex w-full items-center justify-between flex-row px-4 py-4 md:px-12 md:py-6'>
      {/* Desktop Navigation - Left */}
      <div className='hidden z-10 md:flex flex-row items-center gap-5 md:ml-[50px]'>
        <p className='text-[20px] cursor-pointer hover:text-white transition-all duration-300 text-[#8F8F8F] font-medium'>
          Contact us
        </p>
        <p className='text-[20px] cursor-pointer hover:text-white transition-all duration-300 text-[#8F8F8F] font-med'>
          FAQ
        </p>
      </div>

      {/* Logo - Centered on mobile, original position on desktop */}
      <div className='flex-1 md:flex-none md:ml-14 flex justify-center md:justify-start'>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={109}
          height={100}
          className='w-32 h-auto md:w-fit md:h-fit'
        />
      </div>

      {/* Desktop Navigation - Right */}
      <div className='hidden md:flex z-10 flex-row items-center gap-5'>
        <p className='text-[20px] cursor-pointer hover:text-white transition-all duration-300 text-[#8F8F8F] font-med'>
          Privacy Policy
        </p>
        <p className='text-[20px] cursor-pointer hover:text-white transition-all duration-300 text-[#8F8F8F] font-med'>
          Terms of use
        </p>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMenu}
        className='md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 z-50'
        aria-label='Toggle menu'
      >
        <span
          className={`block w-6 h-0.5 bg-[#8F8F8F] transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#8F8F8F] transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#8F8F8F] transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-black border-t border-gray-800 py-4 px-4 z-40 md:hidden'>
          <div className='flex flex-col gap-4'>
            <p className='text-[16px] text-[#8F8F8F] font-medium'>Contact us</p>
            <p className='text-[16px] text-[#8F8F8F] font-med'>FAQ</p>
            <p className='text-[16px] text-[#8F8F8F] font-med'>Privacy Policy</p>
            <p className='text-[16px] text-[#8F8F8F] font-med'>Terms of use</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
