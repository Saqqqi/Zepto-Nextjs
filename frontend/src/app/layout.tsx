import React, { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zepto Website',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}



// import React, { ReactNode } from 'react';
// import './globals.css';
// import { Inter } from 'next/font/google';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { Inter as CustomFont } from 'next/font/google';


// const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

// export interface LayoutProps {
//   children: React.ReactNode;
// }

//  export const metadata = {
//    title: 'Zepto Website',
//    description: 'Generated by create next app',
// };

// export default function RootLayout({ children }: LayoutProps) {
//   return (
//     <html lang="en">
//     <body >
//     <>
//       <Header />
//       {children}
// //       <Footer />
//      </>
//     </body>
//   </html>
//   );
// }