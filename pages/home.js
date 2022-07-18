import Navbar from "./components/navibar";
import Head from "next/head";
import Image from "next/image";
import Cards from "./components/Cards";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Link from "next/link";
import Script from 'next/script';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home(props) {
  const router = useRouter();
  const [users,setUser] = useState('');
  useEffect(()=>{
    console.log(router.query.name);
    setUser(router.query.name);
  },[router.query.name]);

  return (
    <div>
      <Navbar Username ={users}/>
      <Head>
        <title>Ecommerce</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
                <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
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
          
        
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      <Cards />
      <Middle />
      <Footer />
    </div>
  );
}
