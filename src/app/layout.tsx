import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const getJost = Jost({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Feedback',
  description: 'Embeddable feedback app. Comments, posts blogs...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getJost.className} antialiased`}>
        <main className="w-[1200px] mx-auto min-h-screen my-8">{children}</main>
      </body>
    </html>
  );
}
