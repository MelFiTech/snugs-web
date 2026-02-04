import Image from 'next/image';

const Features = () => {
  return (
    <div className='relative w-full min-h-screen md:h-screen'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          src='/images/sec-bg.png'
          alt='features-bg'
          className='object-cover h-fit w-fit z-10'
          fill
        />
      </div>
      <div className='flex mt-8 flex-col w-full justify-center items-center px-4 pb-8 md:pb-0'>
        <p className='text-[48px] tracking-[-1.21px] leading-[81%] md:text-[64px] font-bold bg-linear-to-r from-[#8F8F8F] to-[#F5F5F5] text-transparent bg-clip-text text-center'>
          What are you waiting for?
        </p>
        <p className='text-[20px] md:text-[24px] tracking-[-1.21px] leading-[125%] font-bold bg-linear-to-r from-[#8F8F8F] to-[#F5F5F5] text-transparent bg-clip-text text-center mt-2 md:mt-0 px-4'>
          Your True Love Might Just Be Waiting For You , Who Knows!
        </p>

        <div className='grid grid-cols-1 w-full px-6 md:grid-cols-3  mt-8 z-10 gap-8'>
          <div className='flex flex-col  items-center justify-center'>
            <Image
              src='/images/first-img.png'
              alt='feature-1'
              width={354}
              height={337}
              className='w-full  md:w-[354px] h-auto'
            />
          </div>
          <div className='flex flex-col items-center justify-center '>
            <Image
              src='/images/middle-img.png'
              alt='feature-1'
              width={354}
              height={337}
              className='w-full md:w-[354px] h-auto'
            />
          </div>
          <div className='flex flex-col items-center justify-center '>
            <Image
              src='/images/last-img.png'
              alt='feature-1'
              width={354}
              height={337}
              className='w-full md:w-[354px] h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
