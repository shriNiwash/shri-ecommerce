import Head from "next/head";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        ></link>
      </Head>
      <section className="footer">
        <div className="container" id="footer-last">
          <div className="row" id="niwash">
            <div className="col-sm-3">
              <div className="container" id="footer-last">
                <div id="shriniwash">
                  <div className="card-body">
                    <div className="name">
                      <ul>
                        <li>
                          <h5>Contact Us</h5>
                        </li>
                        <li>
                          <p>
                            <i className="fa fa-map-marker"></i> Estate Business,
                            #32841 block, #221DRS Real estate business building,
                            UK.
                          </p>
                        </li>
                        <li>
                          <p>
                            <i className="fas fa-phone-alt"></i> +977981920744
                          </p>
                        </li>
                        <li>
                          <p>
                            <i className="far fa-envelope-open"></i>
                            corporate-mail@support.com
                          </p>
                        </li>
                      </ul>
                      <div className="social-footer">
                       <Link href="/"><a><i className="fab fa-facebook" id="facebook"></i></a></Link>
                       <Link href="/"><a><i className="fab fa-twitter-square" id="twitter"></i></a></Link>
                       <Link href="/"><a><i className="fab fa-instagram" id="instagram"></i></a></Link>
                       <Link href="/"><a><i className="fab fa-google-plus" id="google"></i></a></Link>
                       <Link href="/"><a><i className="fab fa-linkedin" id="linkedin"></i></a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div >
                <div className="card-body">
                  <div className="name">
                    <ul>
                      <li>
                        <h5>Featured Links</h5>
                      </li>
                      <li>Graduation</li>
                      <li>Admissions</li>
                      <li>Book Store</li>
                      <li>International</li>
                      <li>Courses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div >
                <div className="card-body" id="nepali">
                  <ul>
                    <li>
                      <h5>Newsletter</h5>
                    </li>
                    <li>
                      <div className="footer-gmail">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                       <Link href="/"><a><i className="far fa-envelope"></i></a></Link>
                      </div>
                    </li>
                    <li>
                      <p className="card-text">
                        Subscribe and get our weekly newsletter We will never share your email address
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div >
                <div className="card-body">
                  <div className="name text-left">
                    <ul>
                      <li>
                        <h5>Quick Links</h5>
                      </li>
                      <li>
                        <Link href="#"><a>Home</a></Link>
                      </li>
                      <li>
                      <Link href="#"><a>About</a></Link>
                      </li>
                      <li>
                       <Link href="#"><a>Services</a></Link>
                      </li>
                      <li>
                       <Link href="#"><a>Blog</a></Link>
                      </li>
                      <li>
                       <Link href="/"><a >Contacts</a></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-last-menu color-white">
          <div className="row ml-5 my-2 text-center">
            <div className="col-sm-6 left_color">
              <p>
                All Right Reserved | Designed By Shriniwash
              </p>
            </div>
            <div className="col-sm-6 naming">
              <ul>
                <li>
                  <Link href="/"><a>Privacy</a></Link>
                </li>
                <li>
                 <Link href="/"><a >Terms And Condition</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Footer;