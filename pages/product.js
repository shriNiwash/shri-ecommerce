import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from './components/footers';
import dynamic from 'next/dynamic';
const Navbar = dynamic(
  () => import('./components/navibar'),
  { ssr: false }
)

export const getStaticProps = async () => {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyCBguij5N4XLeQ_RHE_pTGlLyTWfbVTcyU"
  );
  const items = await res.json();
  const data = items.items;
  console.log(items.items[0]);
  return {
    props: {
      data,
    },
  };
};
const Products = ({ data }) => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Ecommerce</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
      </Head>

      <div className="d-flex align-content-start flex-wrap container">
        {data.map((list) => {
          return (
            <>
              <div className="card" id="cardData" key={list.id}>
                <Image
                  src={list.volumeInfo.imageLinks.thumbnail}
                  width="100"
                  height="300"
                  className="card-img-top"
                  alt="..."
                ></Image>

                <div className="card-body">
                  <h6 className="card-title">{list.volumeInfo.subtitle}</h6>
                  <p className="card-text">{list.volumeInfo.publisher}</p>
                  <a className="btn btn-primary">Detail</a>
                  <Link href={`/book/${1}?selfLink=${list.selfLink}`}><a className="btn btn-primary" id="addtocard">Add to Cart</a></Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Products;
