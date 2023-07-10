import React from 'react';
import Link from 'next/link';
import { AboutData } from '../Api/api';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import styles from './about.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyComponent() {
  const fetchData = async () => {
    const data = await AboutData();
    console.log("Blog Dataaaa", data);
    return data;
  };

  const renderBlog = async () => {
    const data = await fetchData();

    if (!data) {
      return <div>Loading...</div>;
    }

    const blog = data.data.attributes;

    return (
      <>
      <div className={`breadcrumbs d-flex align-items-center ${styles.breadcrumbs}`} style={{ backgroundImage: "url('../../../../asserts/hero-bg.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">           
         <h1>About</h1>
            <ol >
              <li><a href="index.html">Home</a></li>
              <li>About</li>
            </ol>
          </div>
        </div>
        <section id="blog" className={styles.blog}>
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-12 entries">
                <article className={`entry entry-single ${styles.entry}`}>
                  {/* <div className={`entry-img ${styles.entryImg}`}>
                    <Image
                      src={blog.url}
                      alt=""
                      className="img-fluid"
                      width={800}
                      height={600}
                    />
                  </div> */}
                  <h2 className={`entry-title ${styles.entryTitle}`}>
                    {blog.title}
                  </h2>
                  {/* <div className={`entry-meta ${styles.entryMeta}`}>
                    <ul>
                      <li className={`d-flex align-items-center ${styles.entryMetaItem}`}>
                        {blog.author}
                      </li>
                      <li className={`d-flex align-items-center ${styles.entryMetaItem}`}>
                        {blog.publish_date}
                      </li>
                      <li className={`d-flex align-items-center ${styles.entryMetaItem}`}>
                        <i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a>
                      </li>
                    </ul>
                  </div> */}
                  <div className="entry-content">
                    <ReactMarkdown>{blog.long_description}</ReactMarkdown>
                  </div>
                  {/* <div className={`entry-footer ${styles.entryFooter}`}>
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li>
                        <a href="#">Business</a>
                      </li>
                    </ul>
                    <i className="bi bi-tags"></i>
                    <ul className={`tags ${styles.tags}`}>
                      <li>
                        <a href="#">Creative</a>
                      </li>
                      <li>
                        <a href="#">Tips</a>
                      </li>
                      <li>
                        <a href="#">Marketing</a>
                      </li>
                    </ul>
                  </div> */}
                </article>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return renderBlog();
}
