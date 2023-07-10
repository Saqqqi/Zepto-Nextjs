
import React from 'react';
import Introduction from './components/HomePage/introduction';
import Service from './components/HomePage/service';
import About from './components/HomePage/about';
import RootLayout from './layout';
import CallAction from './components/HomePage/call to action';
import Contact from './components/HomePage/contact';

export default function Page() {
  return (
    <RootLayout>
 <>
        <Introduction/>
        <Service/>
        <About/>
        <CallAction/>
        <Contact/>
      </>
    </RootLayout>
  );
}





