import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const BodyPart = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bootstrap demo</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Head>
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-sm shri-cate">
              <Image
                src="/image/category-1.jpg"
                height={360.1}
                width={327}
                alt="product-name"
              ></Image>
            </div>
            <div className="col-sm shri-cate">
              <Image
                src="/image/category-1.jpg"
                height={360.1}
                width={327}
                alt="product-name"
              ></Image>
            </div>
            <div className="col-sm shri-cate">
              <Image
                src="/image/category-1.jpg"
                height={360.1}
                width={327}
                alt="product-name"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h1 className="product-title">Featured Products</h1>
        <div className="row">
          <div className="col-4" id="product-col">
            <Image src="/image/product-1.jpg" height={449} width={337}  alt="product-name"></Image>
            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-2.jpg" height={449} width={337}  alt="product-name"></Image>
            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-3.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-4.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
        </div>
        <h1 className="product-title">Latest Products</h1>
        <div className="row">
          <div className="col-4" id="product-col">
            <Image src="/image/product-5.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-6.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-7.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-8.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4" id="product-col">
            <Image src="/image/product-9.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-10.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-11.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
          <div className="col-4" id="product-col">
            <Image src="/image/product-12.jpg" height={449} width={337}  alt="product-name"></Image>

            <h4>Red Printed T-Shirt</h4>
            <div className="raing">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </div>
            <p>Rs.250</p>
          </div>
        </div>
      </div>

      <div className="offer">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Image src="/image/exclusive.png" height={556} width={636}  alt="product-name"></Image>
        </div>
        <div className="col-sm-6 offer-product">
          <p>Exclusive Available on RedStore</p>
          <h1>Smart Band 4</h1>
          <small>The Mi Smart Band 4 features a 39.9% larger
            (then Mi Band 3) AMOLED color full-touch display width
            adjustable brightness, so everything is clear as can be.
          </small>
          <a href="" className="btn-firstpage">Buy Now &#8594;</a>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default BodyPart;
