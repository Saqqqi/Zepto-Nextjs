"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><b><br /><br /><br /></b>
      <footer id="footer">


        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Career</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Case Studies</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Software Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Front-end Developers</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Mobile App Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>

                  Royal Crown Plaza, 3rd Floor,
                  Plot # 164 & 165, Business Square,
                  Gulberg Green, Islamabad, Pakistan <br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> zepto@example.com<br />
                </p>

              </div>

              <div className="col-lg-3 col-md-6 footer-info">
                <h3>About Zepto</h3>
                <p>Zepto Systems is an IT Consultancy and Services Provider agency. Since its inception in 2008, Zepto Systems has been providing 360 degree IT services to its clients; which include but are not limited to: software development.</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#" className="google-plus"><FontAwesomeIcon icon={faSkype} /></a>
                  <a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Zepto</span></strong>. All Rights Reserved
          </div>
          <div className="credits">

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
