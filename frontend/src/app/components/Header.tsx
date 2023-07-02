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
            <Link href="/">Zepto</Link>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="#team">Team</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li className="dropdown">
                <Link href="#">
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
                <Link href="#contact">Contact</Link>
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
