import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../about/about.module.css';
import 'animate.css/animate.min.css';

const About = () => {
  return (
    <div>
      <section id="clients" className={styles.clients}>
        <div className={`container ${styles.container}`} data-aos="zoom-in">
          <div className={`clients-slider ${styles.clientsSlider}`}>
            <div className={`swiper-wrapper align-items-center ${styles.swiperWrapper}`}>
              <div className="swiper-slide">
                <img src="#" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="#" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="#" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="#" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="#" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="#" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="#" className="img-fluid" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="#" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
