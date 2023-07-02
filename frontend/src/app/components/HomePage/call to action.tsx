import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Style/call to action.module.css';
// import 'animate.css/animate.min.css';

const CallAction = () => {
  return (
    <div>
      <section id="cta" className={`${styles.cta} cta`}>
        <div className={`container text-center`}>
          <div className={`row`} data-aos="zoom-in">
            <div className={`col ${styles['col-lg-9']} text-center text-lg-start`}>
              <h3>Call To Action</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className={`col ${styles['col-lg-3']} ${styles['cta-btn-container']} text-center`}>
              <a className={`btn ${styles['cta-btn']} align-middle`} href="#">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallAction;
