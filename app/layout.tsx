import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  // icons: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     sizes: '32x32',
  //     url: '/favicon.ico',
  //   },
  // ]
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icons8-favicon-32.png" />
      </Head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
