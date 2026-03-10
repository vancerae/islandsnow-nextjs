import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import './style.css';
import Providers from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Island Snow',
  description: 'Island Snow mockup',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const classString = `${geistSans.variable} ${geistMono.variable}`;

  return (
    <html lang="en">
      <body className={classString}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
