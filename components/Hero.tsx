import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col items-center gap-10 mt-[120px]'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#FFFFFF] md:text-[96px] text-[42px] font-bold text-center leading-[81%] tracking-[-1.38px]'>
          flirt loud, <br /> Meet fast, <br /> Feel the spark.
        </h1>
        <p className='md:text-[20px] text-[12px] mt-4 font-bold bg-linear-to-r from-[#8F8F8F] to-[#F5F5F5] text-transparent bg-clip-text'>
          Because life's too short for dry convos and dead matches.
        </p>
      </div>
      <div className=' w-full ml-[-100px] md:ml-0'>
        <Image src='/images/hero-phone.png' alt='hero-image' width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Hero;
