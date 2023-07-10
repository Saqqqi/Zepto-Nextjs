import ReactMarkdown from 'react-markdown';
import styles from '../Style/introduction.module.css';
// import 'animate.css/animate.min.css';
import { introductionData } from '../../Api/api';
import { Key } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const fetchData = async () => {
  const data = await introductionData();
  console.log("HomePage Data" , data)
  return data;
};

export default async function MyComponent() {
  const data = await fetchData();
  if (data) {
    return (
      <section id="hero" className={`d-flex justify-content-center align-items-center ${styles.hero}`}>
        <div id="heroCarousel" data-bs-interval="5000" className={`container carousel carousel-fade ${styles.heroCarousel}`} data-bs-ride="carousel">
          {data.data.map((item: { attributes: { title: string; description: string; }; }, index: Key | null | undefined) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className={`carousel-container ${styles.carouselContainer}`}>
                <ReactMarkdown className={`animate__animated animate__fadeInDown ${styles.title}`}>
                  {item.attributes.title}
                </ReactMarkdown>
                <ReactMarkdown className={`animate__animated animate__fadeInUp ${styles.description}`}>
                  {item.attributes.description}
                </ReactMarkdown><br/>
                <a href="#about"  style={{ textDecoration: 'none' }} className={`btn-get-started animate__animated animate__fadeInUp scrollto ${styles.button}` }>
                  Read More
                </a>
              </div>
            </div>
          ))}
          <a className={`carousel-control-prev ${styles.carouselControl}`} href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className={`carousel-control-prev-icon bx bx-chevron-left ${styles.carouselIcon}`} aria-hidden="true"></span>
          </a>
          <a className={`carousel-control-next ${styles.carouselControl}`} href="#heroCarousel" role="button" data-bs-slide="next">
            <span className={`carousel-control-next-icon bx bx-chevron-right ${styles.carouselIcon}`} aria-hidden="true"></span>
          </a>
        </div>
      </section>
    );
  }
};