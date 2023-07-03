"use client"
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link href="/" style={{ textDecoration: 'none' }}>Zepto</Link>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link href="/" style={{ textDecoration: 'none' }}>Home</Link>
              </li>
              <li>
                <Link href="/about" style={{ textDecoration: 'none' }}>About</Link>
              </li>
              <li>
                <Link href="#services" style={{ textDecoration: 'none' }}>Services</Link>
              </li>
              <li>
                <Link href="#portfolio" style={{ textDecoration: 'none' }}>Portfolio</Link>
              </li>
              <li>
                <Link href="#team" style={{ textDecoration: 'none' }}>Team</Link>
              </li>
              <li>
                <Link href="#pricing" style={{ textDecoration: 'none' }}>Pricing</Link>
              </li>
              <li>
                <Link href="/blog" style={{ textDecoration: 'none' }}>Blog</Link>
              </li>
              <li className="dropdown">
                <Link href="#" style={{ textDecoration: 'none' }}>
                  Drop Down <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="#">Drop Down 1</Link>
                  </li>
                  <li>
                    <Link href="#">Drop Down 2</Link>
                  </li>
                  <li>
                    <Link href="#">Drop Down 3</Link>
                  </li>
                  <li>
                    <Link href="#">Drop Down 4</Link>
                  </li>
                  <li>
                    <Link href="#">Drop Down 5</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#contact" style={{ textDecoration: 'none' }}>Contact</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
