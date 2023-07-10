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
//                   <Link href="/blog-single">Read More</Link>Api
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
import { blogData } from '../Api/api';
import Link from 'next/link';
import styles from '../blog/blog.module.css';
import 'bootstrap/dist/css/bootstrap.css';


export default async function MyComponent() {
  const data = await blogData();
  console.log("Blog Dataaaa", data);

  return (
<div>
<div className={`breadcrumbs d-flex align-items-center ${styles.breadcrumbs}`} style={{ backgroundImage: "url('../../../../asserts/hero-bg.jpg')" }}>
        <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">           
         <h2>Blog</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Blog</li>
            </ol>
          </div>
        </div>
      <section id="blog" className={`blog ${styles.blog}`}>


      <div className="container" data-aos="fade-up">
    
        <div className="d-flex justify-content-center">
          <div className="row-lg-8">
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
                    </div>meta
      </section>
      </div>
  );
}

// import React from 'react';
// import { blogData } from '../services/api';
// import Link from 'next/link';
// import styles from '../blog/blog.module.css';
// import 'bootstrap/dist/css/bootstrap.css';

// interface BlogPost {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   date: string;
//   author: string;
//   category: string;
// }

// export default async function MyComponent() {
//   const { data } = await blogData();
//   console.log("Blog Data:", data);

//   const BlogSection = () => {
//     return (
//       <>
//         <div className={`breadcrumbs d-flex align-items-center ${styles.breadcrumbs}`} style={{ backgroundImage: "url('../../../../asserts/hero-bg.jpg')" }}>
//           <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
//             <h2>Blog</h2>
//             <ol>
//               <li><a href="index.html">Home</a></li>
//               <li>Blog</li>
//             </ol>
//           </div>
//         </div>
//         <section id="blog" className={styles.blog}>
//           <div className="container" data-aos="fade-up" data-aos-delay="100">
//             <div className={`row gy-6 ${styles['postslist']}`}>
//               {data.map((post: BlogPost) => (
//                 <div key={post.id} className={`col-xl-4 col-md-6 ${styles['postitem']} position-relative h-100`}>
//                   <div className={`post-img position-relative overflow-hidden ${styles['postimg']}`}>
//                     <img src={post.imageUrl} className={`imgfluid ${styles['imgfluid']}`} alt="" />
//                     <span className={styles['postdate']}>{post.date}</span>
//                   </div>
//                   <div className={`post-content d-flex flex-column ${styles['postcontent']}`}>
//                     <h3 className={`post-title ${styles['posttitle']}`}>{post.title}</h3>
//                     <div className={`meta d-flex align-items-center ${styles['meta']}`}>
//                       <div className="d-flex align-items-center">
//                         <i className="bi bi-person"></i> <span className={`ps-2 ${styles['ps-2']}`}>{post.author}</span>
//                       </div>
//                       <span className={`px-3 text-black-50 ${styles['px-3']}`}>/</span>
//                       <div className="d-flex align-items-center">
//                         <i className="bi bi-folder2"></i> <span className={`ps-2 ${styles['ps-2']}`}>{post.category}</span>
//                       </div>
//                     </div>
//                     <p className={`p ${styles['p']}`}>{post.description}</p>
//                     <hr />
//                     <Link href={`/blog/${post.id}`}>
//                       <a className={`readmore stretched-link ${styles['readmore']}`}>
//                         <span>Read More</span>
//                         <i className="bi bi-arrow-right"></i>
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className={`blogPagination ${styles.blogPagination}`}>
//             <ul className={`justify-content-center `}>
//               <li><a href="#">1</a></li>
//               <li className="active"><a href="#">2</a></li>
//               <li><a href="#">3</a></li>
//             </ul>
//           </div>
//         </section>
//       </>
//     );
//   }

//   ;
// }


// import React from 'react';

// interface BlogData {
//   // Define the structure of your blog data here
// }

// const MyComponent: React.FC = () => {
//   const fetchBlogData = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:1337/api/blogs'); // Replace with the actual API endpoint
//       const blogData: BlogData[] = await response.json();
//       console.log("Blog Data:", blogData);
//       // Process the blog data as needed
//     } catch (error) {
//       console.error('Error fetching blog data:', error);
//     }
//   };

//   fetchBlogData();

//   return (
//     <>
//       {/* Render your component JSX */}
//     </>
//   );
// };

// export default MyComponent;


