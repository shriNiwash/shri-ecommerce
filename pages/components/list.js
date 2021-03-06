import Link from "next/link";
import { Image } from "cloudinary-react";
import Head from "next/head";
import Navbar from "./navibar";
import Footer from "./Footer";
import { useGlobalState } from "../../state";

export const getServerSideProps = async (context) => {
  const datas = context.req.cookies["jwt-local"];
  console.log(context.req.cookies["jwt-local"]);
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${datas}`,
  });
  const resp = await fetch("https://ecommerce-payment.herokuapp.com/list", {
    method: "GET",
    credentials: "include",
    headers: myHeaders,
  });

  const data = await resp.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

const List = ({ data }) => {
  const [username] = useGlobalState("username");
  console.log(username);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
      </Head>
      <Navbar />

      <div className="d-flex align-content-start flex-wrap container">
        {data?.map((list) => {
          return (
            <>
              <div className="card" id="cardData" key={list._id}>
                <Image
                  cloudName="deam2hdcg"
                  publicId={`${list.image}`}
                  width="100"
                  height="300"
                  className="card-img-top"
                  alt="..."
                ></Image>

                <div className="card-body">
                  <h6 className="card-title">{list.name}</h6>
                  <p className="card-text">{list.description}</p>
                  <a className="btn btn-primary">Detail</a>
                  <Link href={`/product/${list._id}`}>
                    <a className="btn btn-primary" id="addtocard">
                      Add to Cart
                    </a>
                  </Link>
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

export default List;
