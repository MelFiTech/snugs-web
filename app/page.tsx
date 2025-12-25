import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Plan from '@/components/Plan';
import Image from 'next/image';
const Page = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col relative w-full  '>
        <div className='absolute top-0 left-0 w-full h-full '>
          <Image
            src='/images/bg-grp.png'
            alt='hero-background'
            className='w-full h-full object-cover z-10'
            fill
          />
        </div>
        <div className='absolute top-[147.33px] left-[20.28px] hidden md:block '>
          <Image
            src='/images/stars-l-svg.svg'
            alt='hero-background'
            className=' object-cover h-fit w-fit z-10 '
            width={340}
            height={200}
          />
        </div>
        <div className='absolute bottom-[500.33px] right-[20.28px] hidden md:block '>
          <Image
            src='/images/stars-l-svg.svg'
            alt='hero-background'
            className=' object-cover h-fit w-fit z-10 '
            width={340}
            height={200}
          />
        </div>
        <div className='absolute top-0 left-0 h-fit hidden md:block'>
          <Image src='/images/left-green.png' alt='hero-background' width={500} height={300} />
        </div>
        <div className='absolute top-[-20px] right-0 h-fit hidden md:block'>
          <Image src='/images/right-green.png' alt='hero-background' width={500} height={300} />
        </div>
        <Header />
        <Hero />
      </div>
      <Features />
      <Plan />
      <Footer />
    </div>
  );
};

export default Page;
