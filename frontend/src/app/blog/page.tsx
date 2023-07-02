// import React from 'react';
// import Link from 'next/link';
// import styles from '../blog/blog.module.css';
// import 'bootstrap/dist/css/bootstrap.css';

// const Blog = () => {
//   return (
//     <>
//       <section id="breadcrumbs" className={styles.breadcrumbs}>
//         <div className="container">
//           <ol>
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//           </ol>
//           <h2>Blog</h2>
//         </div>
//       </section>
      
//       <div className="d-flex justify-content-center">
//         <div className="row">
//           <div className="col-lg-6 entries">
//             <article className={`entry ${styles.entry}`}>
//               <div className={`entryimg ${styles.entryimg}`}>
//                 <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
//               </div>
//               <h2 className={`${styles.entryTitle}`}>
//                 <Link href="/blog-single">Blog Title</Link>
//               </h2>
//               <div className={`${styles.entryMeta}`}>
//                 <ul>
//                   <li className={`${styles.dFlex} align-items-center`}>
//                     <i className="bi bi-person"></i> <a href="/blog-single">John Doe</a>
//                   </li>
//                   <li className={`${styles.dFlex} align-items-center`}>
//                     <i className="bi bi-clock"></i> Date and Time
//                   </li>
//                   <li className={`${styles.dFlex} align-items-center`}>
//                     <i className="bi bi-chat-dots"></i> <a href="/blog-single">12 Comments</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className={`entry-content ${styles.entryContent}`}>
//                 <p>
//                   Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium.
//                   Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
//                   dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt.
//                   Voluptate porro consequatur assumenda perferendis dolore.
//                 </p>
//                 <div className={`read-more ${styles.readMore}`}>
//                   <Link href="/blog-single">Read More</Link>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;

import React from 'react';
import { blogData } from '../services/api';
import Link from 'next/link';
import styles from '../blog/blog.module.css';
import 'bootstrap/dist/css/bootstrap.css';


export default async function MyComponent() {
  const data = await blogData();
  console.log("Blog Dataaaa in typesr=cript", data);

  return (
    <>
      <section id="breadcrumbs" className={styles.breadcrumbs}>
        <div className="container">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ol>
          <h2>Blog</h2>
        </div>
      </section>
      <section id="blog" className={`blog ${styles.blog}`}>


      <div className="container" data-aos="fade-up">
    
        <div className="d-flex justify-content-center">
          <div className="row-lg-6">
            <div className="col-lg-8 entries">
              {data && data.data && data.data.length > 0 ? (
                data.data.map((blog: { id: React.Key | null | undefined; attributes: {
                  slug: any; url: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; publish_date: any; short_description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; 
}; }) => (
                  <article key={blog.id} className={`entry ${styles.entry}`}>
                    <div className={`entryimg ${styles.entryimg}`}>
                      {blog.attributes && blog.attributes.url && (
                        <img src={blog.attributes.url} alt="" className={`entry-img ${styles.entryimg}`} />
                      )}
                    </div>
                    {blog.attributes && blog.attributes.title && (
                      <h2 className={`${styles.entryTitle}`}>
                        <br />
                        <Link href={`/blog/${blog.attributes.slug}`}>{blog.attributes.title}</Link>
                      </h2>
                    )}
                    <div className={`${styles.entryMeta}`}>
                      <ul>
                        <li className={`${styles.dFlex} align-items-center`}>
                          <i className="bi bi-person"></i> {blog.attributes && blog.attributes.author && (
                            <a href="/blog-single">{blog.attributes.author}</a>
                          )}
                        </li>
                        <li className={`${styles.dFlex} align-items-center`}>
                          <i className="bi bi-clock"></i> {blog.attributes && blog.attributes.publish_date}
                        </li>
                        <li className={`${styles.dFlex} align-items-center`}>
                          <i className="bi bi-chat-dots"></i> <a href="/blog-single">12 Comments</a>
                        </li>
                      </ul>
                    </div>
                    <div className={`entry-content ${styles.entryContent}`}>
                      {blog.attributes && blog.attributes.short_description && (
                        <p>{blog.attributes.short_description}</p>
                      )}
                   <div className={`read-more ${styles.readMore}`}>
                <Link href={`/blog/${blog.attributes.slug}`}>Read More</Link>
                </div>
                      
                    </div>
                    
                  </article>
                  
                  
                ))
              ) : (
                <p>No blog data available.</p>
              )}
            </div>
          </div>
        </div>
        </div>
        <div className={`blogPagination ${styles.blogPagination}`}>
                      <ul  className={`justify-content-center `}>
                        <li><a href="#">1</a></li>
                        <li className="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                      </ul>
                    </div>
      </section>
    </>
  );
}
