import Header from '@/components/Header';

export const metadata = {
  title: 'Privacy Policy | Snugs',
  description: 'Snugs Privacy Policy - how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Header />
      <main className='mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16'>
        <h1 className='mb-8 text-center text-3xl font-bold md:text-4xl'>Privacy Policy</h1>
        <p className='mb-10 text-[#ededed]'>
          At Snugs, we value your privacy. This Privacy Policy explains how we collect, use, share,
          and protect your information when you use the Snugs mobile application and related
          services (the &quot;App&quot;). By using Snugs, you agree to this policy.
        </p>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>1. Information We Collect</h2>
          <div className='space-y-4 text-[#ededed]'>
            <div>
              <p className='mb-1 font-medium'>a. Personal Information</p>
              <ul className='list-inside list-disc space-y-1 pl-2'>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Profile information (such as photos or preferences, if provided)</li>
              </ul>
            </div>
            <div>
              <p className='mb-1 font-medium'>b. Usage Information</p>
              <ul className='list-inside list-disc space-y-1 pl-2'>
                <li>Device type and operating system</li>
                <li>App interactions and features used</li>
                <li>Log data and timestamps</li>
              </ul>
            </div>
            <div>
              <p className='mb-1 font-medium'>c. Location Information</p>
              <p>
                We may collect approximate location data if you enable it. You can control location
                access in your device settings.
              </p>
            </div>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>2. How We Use Your Information</h2>
          <ul className='list-inside list-disc space-y-1 pl-2 text-[#ededed]'>
            <li>Provide and maintain the Snugs App</li>
            <li>Create and manage user accounts</li>
            <li>Improve user experience and app performance</li>
            <li>Communicate updates, support messages, or important notices</li>
            <li>Ensure safety, security, and prevent fraud</li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>3. How We Share Your Information</h2>
          <p className='mb-3 text-[#ededed]'>We do not sell your personal information.</p>
          <ul className='list-inside list-disc space-y-1 pl-2 text-[#ededed]'>
            <li>With trusted service providers who help operate the App</li>
            <li>To comply with legal obligations or law enforcement requests</li>
            <li>To protect the rights, safety, and property of Snugs and its users</li>
          </ul>
          <p className='mt-3 text-[#ededed]'>
            All third parties are required to keep your data secure and confidential.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>4. Data Security</h2>
          <p className='text-[#ededed]'>
            We use industry-standard security practices to protect your data. However, no method of
            transmission over the internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>5. Your Privacy Choices</h2>
          <ul className='list-inside list-disc space-y-1 pl-2 text-[#ededed]'>
            <li>Update or correct your account information</li>
            <li>Disable location access via device settings</li>
            <li>Request deletion of your account and personal data</li>
          </ul>
          <p className='mt-3 text-[#ededed]'>
            Contact us using the details below for any privacy-related requests.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>6. Children&apos;s Privacy</h2>
          <p className='text-[#ededed]'>
            Snugs is not intended for use by children under the age of 13. If we learn that we have
            collected data from a child under 13, we will delete it promptly.
          </p>
        </section>

        <section className='mb-8'>
          <h2 className='mb-3 text-xl font-semibold'>7. Changes to This Privacy Policy</h2>
          <p className='text-[#ededed]'>
            We may update this policy from time to time. Changes will be posted within the App, and
            the updated date will be revised accordingly.
          </p>
        </section>

        <section>
          <h2 className='mb-3 text-xl font-semibold'>8. Contact Us</h2>
          <p className='text-[#ededed]'>
            Email: snugsdating@gmail.com
            <br />
            App Name: Snugs
          </p>
        </section>
      </main>
    </div>
  );
}
