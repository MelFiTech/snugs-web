'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Plan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleButtonClick = () => {
    if (isDesktop) {
      setIsModalOpen(true);
    } else {
      // On mobile, directly go to App Store
      window.open('https://apps.apple.com/app/snugs', '_blank');
    }
  };

  const handleModalButtonClick = () => {
    window.open('https://apps.apple.com/app/snugs', '_blank');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='relative'>
      <div className='bg-black w-full px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center md:items-end justify-between gap-4 md:gap-0'>
        {/* Left side - Main slogan */}
        <div className='flex flex-col'>
          <div className='text-[64px] md:text-[96px] font-bold leading-[81%] tracking-[-0.7px] md:tracking-[-1.38px]'>
            <div>
              <span className='text-white'>Talk </span>
              <span className='bg-linear-to-r from-[#00C2A8] to-[#F5CF45] bg-clip-text text-transparent'>
                Less
              </span>
            </div>
            <div>
              <span className='text-white'>Plan </span>
              <span className='bg-linear-to-r from-[#00C2A8] to-[#F5CF45] bg-clip-text text-transparent'>
                Dates
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Descriptive text */}
        <div className='flex flex-col items-start '>
          <div className='text-start mb-2 md:text-left bg-linear-to-r from-[#8F8F8F] to-[#F5F5F5] text-transparent bg-clip-text text-[20px] md:text-[24px] leading-[125%] tracking-[-0.5px] md:tracking-[-1.21px]'>
            <p>Bringing you the vibe you've been</p>
            <p>looking for based on your personality</p>
          </div>

          {isDesktop ? (
            <div
              onClick={handleButtonClick}
              className='cursor-pointer z-10 rounded-full bg-linear-to-r from-[#00C2A8] to-[#F5CF45] p-[2px]'
            >
              <div className='flex flex-row items-center  bg-black rounded-full py-[7.34px] px-[22.03px] gap-4'>
                <Image src='/images/apple.svg' alt='download-icon' width={16} height={16} />
                <div className='flex flex-row items-center gap-1'>
                  <p className='text-[#FDFDFD] text-[11px] mt-[0.05px] font-normal'>Download </p>
                  <p className='bg-linear-to-r from-[#A3E635] to-[#5EEAD4] bg-clip-text text-transparent'>
                    Snugs
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={handleButtonClick}
              className='cursor-pointer z-10 rounded-full border border-[#00C2A8]'
            >
              <div className='flex flex-row items-center   rounded-full py-[7.34px] px-[22.03px] gap-4'>
                <Image src='/images/apple.svg' alt='download-icon' width={16} height={16} />
                <div className='flex flex-row items-center gap-1'>
                  <p className='text-[#FDFDFD] text-[11px] mt-[0.05px] font-normal'>Download </p>
                  <p className='bg-linear-to-r from-[#A3E635] to-[#5EEAD4] bg-clip-text text-transparent'>
                    Snugs
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='w-full min-h-[400px] md:h-screen relative'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <Image
            src='/images/about-to-kiss.png'
            alt='features-bg'
            className='object-cover h-fit w-fit z-10'
            fill
          />
        </div>
      </div>
      {isModalOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-xs'
          onClick={closeModal}
        >
          <Image src='/images/thm-img.png' alt='modal-bg' width={1000} height={1000} />
          {/* <div
            className='w-[1037px] items-center justify-center h-[544.42px] relative rounded-[56.17px] flex flex-col'
            style={{
              boxShadow:
                '0 0 60px 20px rgba(160, 255, 64, 0.25), 0 0 100px 40px rgba(160, 255, 64, 0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src='/images/thumbnail.png'
              className='rounded-[56.17px] absolute top-0 left-0 w-full h-full object-cover'
              alt='modal-bg'
              width={1000}
              height={1000}
            />
            <div className='flex flex-col items-center gap-2 z-10 '>
              <p className='text-[20.74px] font-bold bg-linear-to-b from-[#00C2A8] to-[#F5CF45] text-transparent bg-clip-text'>
                Scan to Download
              </p>
              <Image src='/images/logo.png' alt='modal-logo' width={100} height={100} />
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Plan;
