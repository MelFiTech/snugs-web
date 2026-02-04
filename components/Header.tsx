'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass =
    'text-[20px] cursor-pointer hover:text-white transition-all duration-300 text-[#8F8F8F] font-medium';
  const mobileNavLinkClass = 'text-[16px] text-[#8F8F8F] font-medium hover:text-white';

  return (
    <div className='relative flex w-full items-center justify-between flex-row px-4 py-4 md:px-12 md:py-6'>
      {/* Desktop Navigation - Left */}
      <div className='hidden z-10 md:flex flex-row items-center gap-5 md:ml-[50px]'>
        <Link href='/contact' className={navLinkClass}>
          Contact us
        </Link>
        <Link href='/faq' className={navLinkClass}>
          FAQ
        </Link>
      </div>

      {/* Logo - Centered on mobile, original position on desktop */}
      <div className='flex-1 md:flex-none md:ml-14 flex justify-center md:justify-start'>
        <Link href='/'>
          <Image
            src='/images/logo.png'
            alt='logo'
            width={109}
            height={100}
            className='w-32 h-auto md:w-fit md:h-fit'
          />
        </Link>
      </div>

      {/* Desktop Navigation - Right */}
      <div className='hidden md:flex z-10 flex-row items-center gap-5'>
        <Link href='/privacy' className={navLinkClass}>
          Privacy Policy
        </Link>
        <Link href='/terms' className={navLinkClass}>
          Terms of use
        </Link>
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
            <Link href='/contact' className={mobileNavLinkClass} onClick={closeMenu}>
              Contact us
            </Link>
            <Link href='/faq' className={mobileNavLinkClass} onClick={closeMenu}>
              FAQ
            </Link>
            <Link href='/privacy' className={mobileNavLinkClass} onClick={closeMenu}>
              Privacy Policy
            </Link>
            <Link href='/terms' className={mobileNavLinkClass} onClick={closeMenu}>
              Terms of use
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
