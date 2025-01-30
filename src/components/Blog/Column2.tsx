"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Column2: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-120 bg-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card">
                <Link href="/blog/details">
                  <Image
                    src="/images/blog1.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </Link>

                <div className="post-tag">
                  <Link href="/blog/details">Technology</Link>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/details">
                      How To Setup Redux In React Next Application
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card">
                <Link href="/blog/details">
                  <Image
                    src="/images/blog2.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </Link>

                <div className="post-tag">
                  <Link href="/blog/details">Agency</Link>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/details">
                      How To Resubmit Rejected Item Into ThemeForest
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card">
                <Link href="/blog/details">
                  <Image
                    src="/images/blog3.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </Link>

                <div className="post-tag">
                  <Link href="/blog/details">Technology</Link>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/details">
                      How To The Active Menu Based On URL In Next.JS
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card">
                <Link href="/blog/details">
                  <Image
                    src="/images/blog4.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </Link>

                <div className="post-tag">
                  <Link href="/blog/details">Agency</Link>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/details">
                      Implementing Bootstrap Navwalker In WordPress
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card">
                <Link href="/blog/details">
                  <Image
                    src="/images/blog5.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </Link>

                <div className="post-tag">
                  <Link href="/blog/details">Technology</Link>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/details">
                      Top 10 Best CSS Frameworks For Front-End Develope
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card">
                <Link href="/blog/details">
                  <Image
                    src="/images/blog6.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </Link>

                <div className="post-tag">
                  <Link href="/blog/details">Agency</Link>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/details">
                      How To Add Scroll To Top In Pure Javascript & React.Js
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                  <Link href="/blog/details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <Link className="page-link" href="/blog/details">
                        <i className="icofont-double-left"></i>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" href="/blog/details">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="/blog/details">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="/blog/details">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="/blog/details">
                        <i className="icofont-double-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Column2;
