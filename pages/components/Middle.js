import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Middle = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
      </Head>
      <section className="heading">
        <div className="calltoaction-20  py-5 editContent">
          <div className="container py-md-3">
            <div className="calltoaction-20-content rows">
              <div className="row">
                <div className="col-sm">
                  <div className=" text-center" id="num">
                    <div className="card-body">
                      <h3 className="card-title">Welcome To the World of Ecommerce</h3>
                      <p className="card-text">
                        This WebSite is mainly developed to solve the problem of local vendors
                        who are not capable enough to sell their local vagetables and goods.
                        This website mainly deals with those local vendors and collects fresh and 
                        clean vagetables and sever to our customers and made their health better.
                      </p>
                      <p className="card-text">
                      Not only we buy from local vendors and preserve that vagetables in such manner
                      where no preservatives are used and hence customers shall get the fresh and healthy
                      vagetables through this website.
                      </p>
                      <Link href="#"><a  className="btn btn-primary" id="button-card">
                        Read More
                      </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <div className="card text-center" id="num">
                    <Image className="card-img-top" alt="Card Image cap" src="/cardss.jpg" width={651} height={448}></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Middle;