import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Style/contact.module.css';
// import 'animate.css/animate.min.css';

const Contact = () => {
  return (
    <>
      <section id="contact" className={`contact ${styles.contact}`}>
        <div className="container" data-aos="fade-up">
          <div  className={`sectiontitle ${styles.sectiontitle}`}>
            <h2>Contact Us</h2>
          </div>
          <div className={`row mt-1 d-flex justify-content-end ${styles.contactRow}`} data-aos="fade-right" data-aos-delay="100">
            <div className="col-lg-5">
              <div className={styles.info}>
                <div className={styles.address}>
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Royal Crown Plaza, 3rd Floor, 
Plot # 164 & 165, Business <br />Square, 
Gulberg Green</p>
                </div>
                <div className={styles.email}>
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>Zepto@example.com</p>
                </div>
                <div className={styles.phone}>
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>
            <div className={`col-lg-6 mt-5 mt-lg-0 ${styles.contactForm}`} data-aos="fade-left" data-aos-delay="100">
              <form action="forms/contact.php" method="post" role="form" className={`php-email-form ${styles.phpEmailForm}`}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className={`form-control ${styles.formControl}`} id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className={`form-control ${styles.formControl}`} name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className={`form-control ${styles.formControl}`} name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                <textarea
  className={`form-control ${styles.formControl}`}
  name="message"
  rows={5}
  placeholder="Message"
  required
></textarea>

                </div>
                <div className="my-3">
                  <div className={styles.loading}>Loading</div>
                  <div className={styles.errorMessage}></div>
                  <div className={styles.sentMessage}>Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
