
// import styles from '../Style/service.module.css';
// import { ServiceData } from '@/app/services/api';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const fetchData = async () => {
//   const data = await ServiceData();
//   return data;
// };
// export default async function MyComponent() {
//   const {data} = await fetchData();

//   if (data) {
//     return (

//     <section id="services" className={`${styles.services} services`} data-aos="fade-up">
//       <br /><br /><br /><b><br /><br /><br /></b>
//       <div className="container">

//         <div className={`section-title ${styles['section-title']}`}>
//           <h2>Services</h2>
//           <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
//         </div>

//         <div className="row">
//         <div className={`col-md-6 d-flex align-items-stretch ${styles['=']}`} data-aos="fade-up" data-aos-delay="100">
//               <div className={`icon-box ${styles['icon-box']}`}>
//                 <i className="bi bi-card-checklist"></i>
//                 <h4><a href="#">Lorem Ipsum</a></h4>
//                 <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
//               </div>
//             </div>
//             <div className={`col-md-6 d-flex align-items-stretch ${styles['=']}`} data-aos="fade-up" data-aos-delay="100">
//               <div className={`icon-box ${styles['icon-box']}`}>
//                 <i className="bi bi-card-checklist"></i>
//                 <h4><a href="#">Lorem Ipsum</a></h4>
//                 <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
//               </div>
//             </div>
//             <div className={`col-md-6 d-flex align-items-stretch ${styles['=']}`} data-aos="fade-up" data-aos-delay="100">
//               <div className={`icon-box ${styles['icon-box']}`}>
//                 <i className="bi bi-card-checklist"></i>
//                 <h4><a href="#">Lorem Ipsum</a></h4>
//                 <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
//               </div>
//             </div>
//             <div className={`col-md-6 d-flex align-items-stretch ${styles['=']}`} data-aos="fade-up" data-aos-delay="100">
//               <div className={`icon-box ${styles['icon-box']}`}>
//                 <i className="bi bi-card-checklist"></i>
//                 <h4><a href="#">Lorem Ipsum</a></h4>
//                 <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
//               </div>
//             </div>
//             <div className={`col-md-6 d-flex align-items-stretch ${styles['=']}`} data-aos="fade-up" data-aos-delay="100">
//               <div className={`icon-box ${styles['icon-box']}`}>
//                 <i className="bi bi-card-checklist"></i>
//                 <h4><a href="#">Lorem Ipsum</a></h4>
//                 <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
//               </div>
//             </div>
//                <div className={`col-md-6 d-flex align-items-stretch ${styles['=']}`} data-aos="fade-up" data-aos-delay="100">
//               <div className={`icon-box ${styles['icon-box']}`}>
//                 <i className="bi bi-card-checklist"></i>
//                 <h4><a href="#">Lorem Ipsum</a></h4>
//                 <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
//               </div>
//             </div>
        
        
//         </div>

//       </div>
//     </section>
//   );



//     }}
import React from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import styles from '../Style/service.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ServiceData } from '../../Api/api';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default async function MyComponent() {
  const { data } = await ServiceData();

  if (data) {
    return (
      <section id="services" className={`${styles.services} services`} data-aos="fade-up">
        <br /><br /><br /><b><br /><br /><br /></b>
        <div className="container">
          <div className={`section-title animate__animated animate__fadeInUp  ${styles['sectiontitle']}`} >
            <h2>Services</h2>
            <p>Since 2009, Zepto System is delivering technology solutions and tailored IT services to customers around the world. We build, deploy, manage, support, secure, and automate software</p>
          </div>
          <br /><br />
          <div className="row">
            {data.map((item: any) => (
              <div key={item.id} className={`col-md-6 d-flex align-items-stretch animate__animated animate__fadeInUp ${styles['=']}`} data-aos="fade-up" data-aos-delay="100">
                <div className={`icon-box ${styles['iconbox']}`}>
                <i className="bi bi-card-checklist"></i>
                  <Link href={`/service/${item.attributes.slug}`}  style={{ textDecoration: 'none' }}>
                    <div>
                      <h4 >{item.attributes.title}</h4>
                    </div>
                  </Link>
                  <ReactMarkdown>{item.attributes.description}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}

