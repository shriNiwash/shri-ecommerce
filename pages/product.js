import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navibar";
import Link from "next/link";

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
        <input
          type="text"
          name="search-items"
          id="search-items"
          className="form-control"
        />
        <input
          type="submit"
          name="submit"
          id="submit_button"
          className="btn btn-success my-2"
        />
      </div>

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
                  <Link href="/Payment"><a className="btn btn-primary" id="addtocard">Add to Cart</a></Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
