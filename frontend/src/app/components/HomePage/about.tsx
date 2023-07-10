// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from '../../components/Style/about.module.css';
// import 'animate.css/animate.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Link from 'next/link';
// const About = () => {
//   return (
//     <div>
//       <section id="about" className={styles.about}>
//         <div className={`container ${styles.container}`} data-aos="fade-up">
//           <div className={styles.sectionTitle}>
//             <h2>About Us</h2>
//             <p>
//               Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
//               consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
//               sit in iste officiis commodi quidem hic quas.
//             </p>
//           </div>

//           <div className={`row ${styles.content}`}>
//             <div className={`col-lg-6 ${styles.column}`}>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                 dolore magna aliqua.
//               </p>
//               <ul>
//                 <li>
//                   <i className={`ri-check-double-line ${styles.icon}`}></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat
//                 </li>
//                 <li>
//                   <i className={`ri-check-double-line ${styles.icon}`}></i> Duis aute irure dolor in reprehenderit in voluptate velit
//                 </li>
//                 <li>
//                   <i className={`ri-check-double-line ${styles.icon}`}></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat
//                 </li>
//               </ul>
//             </div>
//             <div className={`col-lg-6 pt-4 pt-lg-0 ${styles.column}`}>
//               <p>
//                 Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//                 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//               </p>
//               <Link href="/about" className={`btn-learn-more ${styles.button}`}>
//                Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../components/Style/about.module.css';
// import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutData } from '../../Api/api';

export default async function MyComponent() {
  const data = await fetchData();

  return (
    <div>
      <section id="about" className={styles.about}>
        <div className={`container ${styles.container}`} data-aos="fade-up">
          <div className={styles.sectionTitle}>
            <h2>About</h2>
            <ReactMarkdown>{data.attributes.long_description}</ReactMarkdown>
          </div>

          <div className={`row ${styles.content}`}>
            <div className={`col-lg-6 ${styles.column}`}>
              <ReactMarkdown>{data.attributes.short_description}</ReactMarkdown>
              <ReactMarkdown>{data.attributes.list}</ReactMarkdown>
      
            </div>
            <div className={`col-lg-6 pt-4 pt-lg-0 ${styles.column}`}>
              <ReactMarkdown>{data.attributes.extra_description}</ReactMarkdown>
              <Link href="/about" className={`btn-learn-more ${styles.button}`}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const fetchData = async () => {
  try {
    const { data } = await AboutData();
    return data;
  } catch (error) {
    console.error(error);
  }
};

