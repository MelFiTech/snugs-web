'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
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
    <>
      <div className='flex flex-col items-center gap-10 mt-[120px]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-[#FFFFFF] md:text-[96px] text-[64px] font-bold text-center leading-[81%] tracking-[-1.38px]'>
            flirt loud, <br /> Meet fast, <br /> Feel the <br className='md:hidden block' /> spark.
          </h1>
          <p className='md:text-[20px] w-[252px] md:w-full text-center text-[16px] mt-4 font-bold bg-linear-to-r from-[#8F8F8F] to-[#F5F5F5] text-transparent bg-clip-text'>
            Because life's too short for dry convos and dead matches.
          </p>
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
        <div className=' w-[697px] md:w-full md:h-full z-10 h-[647.85px] ml-[-400px] md:ml-0'>
          <Image src='/images/hero-phone.png' alt='hero-image' width={1000} height={1000} />
        </div>
      </div>

      {/* Modal */}
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
    </>
  );
};

export default Hero;
