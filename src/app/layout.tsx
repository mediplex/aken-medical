import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Aken Medical's Website",
  description: "Aken Medical's Website description",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    // className="select-none"
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
