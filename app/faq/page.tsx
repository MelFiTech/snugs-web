import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: 'FAQ | Snugs',
  description: 'Frequently asked questions about Snugs.',
};

export default function FAQPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main className='mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16'>
        <h1 className='mb-10 text-center text-3xl font-bold md:text-4xl'>FAQ</h1>

        <div className='space-y-8'>
          <section>
            <h2 className='mb-2 text-lg font-semibold'>1. What is Snugs?</h2>
            <p className='pl-4 text-[#ededed]'>
              Snugs is a mobile app for connecting with others, managing activities, and
              convenience.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-lg font-semibold'>2. Is Snugs free to use?</h2>
            <p className='pl-4 text-[#ededed]'>
              Snugs is free to download and use. Some features may require payment or premium
              access.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-lg font-semibold'>3. How do I create an account?</h2>
            <p className='pl-4 text-[#ededed]'>
              Download the app, open it, and follow the on-screen steps to sign up using your
              email or phone number.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-lg font-semibold'>4. Is my personal information safe on Snugs?</h2>
            <p className='pl-4 text-[#ededed]'>
              Yes. We take your privacy seriously and use secure systems to protect your data. For
              more details, see our{' '}
              <Link href='/privacy' className='text-green-400 underline hover:text-green-300'>
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-lg font-semibold'>5. Can I delete my account?</h2>
            <p className='pl-4 text-[#ededed]'>
              Yes. You can delete your account at any time through the app settings or by
              contacting support.
            </p>
          </section>

          <section>
            <h2 className='mb-2 text-lg font-semibold'>6. How can I contact Snugs support?</h2>
            <p className='pl-4 text-[#ededed]'>
              You can reach us through in-app support or by emailing snugsdating@gmail.com.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
