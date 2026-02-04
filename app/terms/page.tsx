import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
  title: 'Terms of Use | Snugs',
  description: 'Snugs Terms of Use - rules and agreements for using the Snugs app.',
};

export default function TermsOfUsePage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main className='mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16'>
        <h1 className='mb-8 text-center text-3xl font-bold md:text-4xl'>Terms of Use</h1>
        <p className='mb-10 text-[#ededed]'>
          Welcome to Snugs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Use
          (&quot;Terms&quot;) govern your access to and use of the Snugs mobile application and
          related services (the &quot;App&quot;). By accessing or using Snugs, you agree to be
          bound by these Terms. If you do not agree, please do not use the App.
        </p>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>1. Eligibility</h2>
          <p className='text-[#ededed]'>
            You must be at least 13 years old to use Snugs. By using the App, you confirm that you
            meet this requirement and have the legal capacity to agree to these Terms.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>2. Account Registration</h2>
          <p className='mb-3 text-[#ededed]'>
            To use certain features of Snugs, you may need to create an account. You agree to:
          </p>
          <ul className='list-inside list-disc space-y-1 pl-2 text-[#ededed]'>
            <li>Provide accurate and complete information</li>
            <li>Keep your login details secure</li>
            <li>Be responsible for all activities under your account</li>
          </ul>
          <p className='mt-3 text-[#ededed]'>
            Snugs is not responsible for any loss caused by unauthorized access to your account.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>3. Acceptable Use</h2>
          <p className='mb-3 text-[#ededed]'>When using Snugs, you agree not to:</p>
          <ul className='list-inside list-disc space-y-1 pl-2 text-[#ededed]'>
            <li>Use the App for illegal or harmful activities</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Upload false, misleading, or inappropriate content</li>
            <li>Attempt to hack, disrupt, or misuse the App or its systems</li>
          </ul>
          <p className='mt-3 text-[#ededed]'>
            We reserve the right to suspend or terminate accounts that violate these rules.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>4. User Content</h2>
          <p className='mb-3 text-[#ededed]'>
            You may be able to upload or share content (such as text or images) on Snugs. By doing
            so:
          </p>
          <ul className='list-inside list-disc space-y-1 pl-2 text-[#ededed]'>
            <li>You confirm you own or have permission to use the content</li>
            <li>
              You grant Snugs a non-exclusive, royalty-free license to use, display, and store the
              content for app operation
            </li>
          </ul>
          <p className='mt-3 text-[#ededed]'>You remain responsible for any content you share.</p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>5. Privacy</h2>
          <p className='text-[#ededed]'>
            Your use of Snugs is also governed by our{' '}
            <Link href='/privacy' className='text-green-400 underline hover:text-green-300'>
              Privacy Policy
            </Link>
            , which explains how we collect and use your information. By using the App, you agree
            to our Privacy Policy.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>6. Termination</h2>
          <p className='mb-3 text-[#ededed]'>
            We may suspend or terminate your access to Snugs at any time if:
          </p>
          <ul className='list-inside list-disc space-y-1 pl-2 text-[#ededed]'>
            <li>You violate these Terms</li>
            <li>Your use poses a risk to other users or the App</li>
          </ul>
          <p className='mt-3 text-[#ededed]'>
            You may stop using Snugs and delete your account at any time.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>7. Intellectual Property</h2>
          <p className='text-[#ededed]'>
            All content, features, branding, and design of Snugs are owned by Snugs or its
            licensors. You may not copy, modify, distribute, or exploit any part of the App without
            permission.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>8. Disclaimer</h2>
          <p className='text-[#ededed]'>
            Snugs is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not
            guarantee that the App will be error-free, secure, or uninterrupted.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>9. Limitation of Liability</h2>
          <p className='text-[#ededed]'>
            To the fullest extent permitted by law, Snugs shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of the App.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>10. Changes to These Terms</h2>
          <p className='text-[#ededed]'>
            We may update these Terms from time to time. Any changes will be effective once posted in
            the App. Continued use of Snugs means you accept the updated Terms.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>11. Governing Law</h2>
          <p className='text-[#ededed]'>
            These Terms shall be governed by and interpreted in accordance with the laws of
            Nigeria.
          </p>
        </section>

        <section>
          <h2 className='mb-3 text-xl font-semibold'>12. Contact Us</h2>
          <p className='text-[#ededed]'>
            If you have questions about these Terms, contact us at:
            <br />
            Email: snugsdating@gmail.com
            <br />
            App Name: Snugs
          </p>
        </section>
      </main>
    </div>
  );
}
