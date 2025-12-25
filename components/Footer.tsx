import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-black w-full py-8 md:py-16'>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0 mb-8 md:mb-12 px-4 md:px-20'>
        {/* Left - Logo */}
        <div className='md:ml-[-20px]'>
          <Image
            src='/images/logo.png'
            alt='snugs logo'
            width={340}
            height={82}
            className='h-auto w-[200px] md:w-[340px]'
          />
        </div>

        {/* Right - Social Media Icons */}
        <div className='flex items-center gap-3 md:gap-4 md:ml-[10px]'>
          {/* Facebook */}
          <div className='w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity'>
            <span className='text-white font-bold text-base md:text-lg'>f</span>
          </div>
          {/* Instagram */}
          <div className='w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity'>
            <svg
              className='w-5 h-5 md:w-6 md:h-6 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </div>
          {/* X/Twitter */}
          <div className='w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity'>
            <span className='text-white font-bold text-base md:text-lg'>X</span>
          </div>
          {/* LinkedIn */}
          <div className='w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity'>
            <span className='text-white font-semibold text-xs md:text-sm'>in</span>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className='flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 md:mb-12 px-4 md:px-20'>
        {/* Left - Navigation Links */}
        <div className='flex items-center gap-2'>
          <a
            href='#'
            className='text-white text-sm md:text-base hover:opacity-80 transition-opacity'
          >
            Contact us
          </a>
          <span className='w-1 h-1 rounded-full bg-gray-600'></span>
          <a
            href='#'
            className='text-white text-sm md:text-base hover:opacity-80 transition-opacity'
          >
            About us
          </a>
        </div>

        {/* Right - Newsletter Subscription */}
        <div className='flex flex-col gap-3 w-full md:w-[50%]'>
          <p className='text-white text-sm md:text-base'>Subscribe to Newsletter</p>
          <div className='flex items-center bg-[#1a1a1a] rounded-full pr-1 md:pr-1.5'>
            <input
              type='email'
              placeholder='Your Email'
              className='bg-transparent text-gray-400 placeholder-gray-500 rounded-full px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base focus:outline-none border-none flex-1 min-w-0'
            />
            <button className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors cursor-pointer shrink-0'>
              <svg
                className='w-5 h-5 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className='border-t border-gray-600 mb-8'></div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4 md:px-20'>
        {/* Left - Copyright */}
        <p className='text-white text-xs md:text-base text-center md:text-left'>
          © 2025 SNUGS. All rights reserved.
        </p>

        {/* Right - Legal Links */}
        <div className='flex items-center gap-3'>
          <a
            href='#'
            className='text-white text-sm md:text-base hover:opacity-80 transition-opacity'
          >
            Terms & Conditions
          </a>
          <span className='w-px h-4 bg-gray-600'></span>
          <a
            href='#'
            className='text-white text-sm md:text-base hover:opacity-80 transition-opacity'
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
