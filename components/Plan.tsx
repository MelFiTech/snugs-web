import Image from 'next/image';

const Plan = () => {
  return (
    <div className=''>
      <div className='bg-black w-full px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0'>
        {/* Left side - Main slogan */}
        <div className='flex flex-col'>
          <div className='text-[42px] md:text-[96px] font-bold leading-[81%] tracking-[-0.7px] md:tracking-[-1.38px]'>
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
        <div className='text-center md:text-left bg-linear-to-r from-[#8F8F8F] to-[#F5F5F5] text-transparent bg-clip-text text-base md:text-[24px] leading-[125%] tracking-[-0.5px] md:tracking-[-1.21px]'>
          <p>Bringing you the vibe you've been</p>
          <p>looking for based on your personality</p>
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
    </div>
  );
};

export default Plan;
