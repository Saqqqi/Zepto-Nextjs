import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import ReactMarkdown from 'react-markdown';
import  styles  from './blog.module.css';

async function fetchBlog(slug: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?slug=${slug}&populate=*`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.data.find((article: { attributes: { slug: any; }; }) => article.attributes.slug === slug);
}

export default async function Page({ params }: { params: any }) {
  const blog = await fetchBlog(params.slug);

  if (!blog) {
    return null;
  }

  return (
    <>
      
       <section id="breadcrumbs" className={styles.breadcrumbs}>
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
          </ol>
          <h2>Blog Single</h2>
        </div>
      </section>
      <section id="blog" className={styles.blog}>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className={`entry entry-single ${styles.entry}`}>
              <div className={`entry-img ${styles.entryImg}`}>
  <Image src={blog.attributes.url} alt="" className="img-fluid" width={800} height={600} />
</div>

                <h2 className={`entry-title ${styles.entryTitle}`}>
                {blog.attributes.title}
                  {/* <a href="blog-single.html">{blog.title}</a> */}
                </h2>
                <div className={`entry-meta ${styles.entryMeta}`}>
                  <ul>
                    <li className={`d-flex align-items-center ${styles.entryMetaItem}`}>
                    {blog.attributes.author}
                      {/* <i className="bi bi-person"></i> <a href="blog-single.html">{blog.author}</a> */}
                    </li>
                    <li className={`d-flex align-items-center ${styles.entryMetaItem}`}>
                    {blog.attributes.publish_date}
                      {/* <i className="bi bi-clock"></i> <a href="blog-single.html"><time dateTime="2020-01-01">{blog.publish_date}</time></a> */}
                    </li>
                    <li className={`d-flex align-items-center ${styles.entryMetaItem}`}>
                      <i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a>
                    </li>
                  </ul>
                </div>
                <div className="entry-content">
                  <ReactMarkdown>{blog.attributes.long_description}</ReactMarkdown>
                </div>
                <div className={`entry-footer ${styles.entryFooter}`}>
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
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
