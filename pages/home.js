import Navbar from "./components/navibar";
import Head from "next/head";
import Image from "next/image";
import Cards from "./components/Cards";
import Middle from "./components/Middle";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "./components/footers";
import BodyPart from "./components/body";

export default function Home(props) {
  const router = useRouter();
  const [users, setUser] = useState("");
  useEffect(() => {
    console.log(router.query.name);
    setUser(router.query.name);
  }, [router.query.name]);

  return (
    <div>
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

      <div className="header">
        <Navbar Username={users} />
        <div className="container" id="my-first">
          <div className="row first-row">
            <div className="col-sm-6 first-row-first">
              <h1>
                Give your workout <br /> A new style
              </h1>
              <p>
                success is not always about greatness.It is about consistency
                .consistency <br /> hard work gains success.Greatness will come.
              </p>
              <a href="" className="btn-firstpage">
                Explore Now &#8594;
              </a>
            </div>
            <div className="col-sm-6 second-row">
              {/* <img src="image1.png" alt="photo" id="body-image" /> */}
              <Image src="/image1.png" height={636} width={648} alt="photo"></Image>
            </div>
          </div>
        </div>
      </div>
      <BodyPart />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
      <Middle />
      <Footer />
    </div>
  );
}
