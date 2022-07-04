import Navbar from "./components/navibar";
import Head from "next/head";
import Image from "next/image";
import Cards from "./components/Cards";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Ecommerce</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
      </Head>
      <div className="crousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image
                src="/veg.jpg"
                className="d-block w-100"
                alt="First Slide"
                layout="responsive"
                width={1000}
                height={400}
              ></Image>
            </div>
            <div className="carousel-item">
              <Image
                src="/product2.jpg"
                className="d-block w-100"
                alt="First Slide"
                layout="responsive"
                width={1000}
                height={400}
              ></Image>
            </div>
            <div className="carousel-item">
              <Image
                src="/product3.jpg"
                className="d-block w-100"
                alt="First Slide"
                layout="responsive"
                width={1000}
                height={400}
              ></Image>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
    <Cards />
    <Middle />
    <Footer />
    </div>
  );
}
