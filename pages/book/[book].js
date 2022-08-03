import Image from "next/image";
import Head from "next/head";
import Footer from "../components/footers";
import Khalti from "../../config/khalti";
import { setGlobalState } from "../../state";
import dynamic from 'next/dynamic';
const Navbar = dynamic(
  () => import('../components/navibar'),
  { ssr: false }
)


export const getServerSideProps = async (context) => {
  const url_Link = context.query.selfLink;

  const response = await fetch(url_Link);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

const Book = ({ data }) => {
  setGlobalState("productName", data.volumeInfo.title);
  return (
    <>
      <Head>
        <title>Buy Books</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Head>
      <Navbar />
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Image
                src={`${data.volumeInfo.imageLinks.medium}`}
                height={1000}
                width={636}
                alt="product-name"
              ></Image>
            </div>
            <div className="col-sm-6 offers-product">
              <p>{data.volumeInfo.publisher}</p>
              <h1>{data.volumeInfo.title}</h1>

              <div
                dangerouslySetInnerHTML={{
                  __html: data.volumeInfo.description,
                }}
              />
            </div>
          </div>
          <div className="khalti-button">
          <Khalti records={100 * 100}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Book;
