import Header from '@/components/Header';

export const metadata = {
  title: 'Contact Us | Snugs',
  description: 'Get in touch with Snugs support.',
};

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main className='mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16'>
        <h1 className='mb-8 text-center text-3xl font-bold md:text-4xl'>Contact Us</h1>
        <p className='mb-8 text-center text-[#ededed]'>
          Have a question or feedback? We&apos;d love to hear from you.
        </p>

        <section className='rounded-lg border border-gray-800 bg-[#0a0a0a] p-6 md:p-8'>
          <h2 className='mb-4 text-xl font-semibold'>Get in touch</h2>
          <div className='space-y-3 text-[#ededed]'>
            <p>
              <span className='font-medium text-white'>Email:</span>{' '}
              <a
                href='mailto:snugsdating@gmail.com'
                className='text-green-400 underline hover:text-green-300'
              >
                snugsdating@gmail.com
              </a>
            </p>
            <p>
              <span className='font-medium text-white'>App Name:</span> Snugs
            </p>
          </div>
          <p className='mt-6 text-sm text-[#8F8F8F]'>
            We typically respond within 24–48 hours. For app-related issues, you can also use
            in-app support.
          </p>
        </section>
      </main>
    </div>
  );
}
