import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import ReactMarkdown from 'react-markdown';
import styles from './service.module.css';

async function fetchService(slug: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/services?slug=${slug}&populate=*`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.data.find((article: { attributes: { slug: any } }) => article.attributes.slug === slug);
}

export default async function Page({ params }: { params: any }) {
  const Service = await fetchService(params.slug);
  console.log("Service-detail Data", Service);

  if (!Service) {
    return null;
  }

  return (
    <>
      <div className={`breadcrumbs d-flex align-items-center ${styles.breadcrumbs}`} style={{ backgroundImage: "url('../../../../asserts/hero-bg.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
          <h2>{Service.attributes.slug}</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Service</li>
          </ol>
        </div>
      </div>
      <section id="blog" className={styles.blog}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 entries">
              <article className={`entry entry-single ${styles.entry}`}>
                <h2 className={`entry-title ${styles.entryTitle}`}>
                <ReactMarkdown>{Service.attributes.title}</ReactMarkdown>
                </h2>
                <div className="entry-content">
                  <ReactMarkdown>{Service.attributes.long_description}</ReactMarkdown>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
