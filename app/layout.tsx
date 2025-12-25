import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const clashDisplay = localFont({
  variable: '--font-clash',
  src: [
    { path: '../public/fonts/ClashDisplay-Extralight.otf', weight: '200', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Light.otf', weight: '300', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Regular.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Medium.otf', weight: '500', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Semibold.otf', weight: '600', style: 'normal' },
    { path: '../public/fonts/ClashDisplay-Bold.otf', weight: '700', style: 'normal' },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Snugs',
  description: 'Snugs is a dating app that allows you to find your true love',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={clashDisplay.variable}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
