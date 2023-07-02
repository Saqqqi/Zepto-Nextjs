

import Introduction from './components/HomePage/introduction';
import Service from './components/HomePage/service';
import About from './components/HomePage/about';
import RootLayout from './layout';
import CallAction from './components/HomePage/call to action';
import Contact from './components/HomePage/contact';

export default function Page() {
  return (
    <RootLayout> 
      <main>
        <Introduction/>
        <Service/>
        <About/>
        <CallAction/>
        <Contact/>
      </main>
    </RootLayout>
  );
}


// import Introduction from './components/HomePage/introduction';
// import Service from './components/HomePage/service';
// import About from './components/HomePage/about';
// import RootLayout from '../app/layout';
// import CallAction from '../../components/HomePage/call to action';
// import Contact from './components/HomePage/contact';


// const apiUrl = 'http://127.0.0.1:1337/api/';

// async function getData(endpoint, params = {}) {
//   const url = new URL(iUrl + endpoint);
//   Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
//   url.searchParams.append('cacheBuster', Date.now());
//   const res = await fetch(url.toString());

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   const data = await res.json();

//   return data;
// }

// export default async function Page() {
//   try {
//     const homeData = await getData('homes');
//     const aboutData = await getData('about');
//     const serviceData = await getData('services');
//     const blogData = await getData('blogs', { tag: 'example' });
//     console.log("Blog data", blogData);

    // const contactData = await getData('contact');

    // return (
    //   <main>
    //     <Introduction />
    //     <About/>
    //     <Service  />
    //     <Contact />
    //   </main>
    // );
  // } catch (error) {
  //   console.error(error.message.toString());
  // }


