


import React from 'react';
import 'animate.css/animate.min.css';
import styles from './service.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ServiceData } from '../Api/api';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';

export default async function MyComponent() {
  const { data } = await ServiceData();
  console.log("Service data" ,data)

  const renderServiceItems = (data: any[]) => {
    return data.map((item) => (
      
      <div key={item.id} className={`col-lg-4 col-md-8`} data-aos="fade-up" data-aos-delay="300">
        <div className={`serviceitem ${styles.serviceitem} animate__animated animate__fadeInUp`}>
        <div className={`icon ${styles.icon}`}>
      <FontAwesomeIcon icon={faCompassDrafting} />
    </div>
          <Link href={`/service/${item.attributes.slug}`} style={{ textDecoration: 'none' }} className={`h3 ${styles.h3}`}>{item.attributes.title}</Link>
          <p className={`p ${styles.p}`}>{item.attributes.description}</p>
          <Link href={`/service/${item.attributes.slug}`} className= {`readmore stretched-link ${styles.readmore}`} style={{ textDecoration: 'none' }}>
  Learn more <i className="bi bi-arrow-right"></i>
</Link>

        </div>
      </div>
    ));
  };

  return (
    <>
      <main id="main">
      <div className={`breadcrumbs d-flex align-items-center ${styles.breadcrumbs}`} style={{ backgroundImage: "url('../../../../asserts/services-1.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">           
         <h2>Services</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Services</li>
            </ol>
          </div>
        </div>
        <br /><br /><br />
        {/* ======= Services Section ======= */}
        <section id="services" className={`services section-bg ${styles.sectionbg}`}>
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              {renderServiceItems(data)}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


// <br /><b><br /></b>
// <section id="services"  className= {`services section-bg ${styles.sectionbg}`}>
//   <div className="container" data-aos="fade-up">

//     <div className="row gy-4">

  

//       <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
//       <div className={`serviceitem ${styles.serviceitem} animate__animated animate__fadeInUp`}>
//           <div className="icon">
//             <i className="fa-solid fa-compass-drafting"></i>
//           </div>
//           <h3 className= {`h3 ${styles.h3}`}>Ledo Markt</h3>
//           <p className= {`p ${styles.p}`}>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
//           <a href="service-details.html" className= {`readmore stretched-link ${styles.readmore}`}>Learn more <i className="bi bi-arrow-right"></i></a>
//         </div>
//       </div>
    