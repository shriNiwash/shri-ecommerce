import Link from "next/link";
import { Image } from "cloudinary-react";
import Head from "next/head";
import Footer from "./footers";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const Navbar = dynamic(() => import("../components/navibar"), { ssr: false });

export const getServerSideProps = async (context) => {
  const datas = context.req.cookies["jwt-local"];
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
  return {
    props: {
      data,
    },
  };
};

const List = ({ data }) => {
  const router = useRouter();
  const getMe = (id)=>{
    const usernam = Cookies.get("username");
    if(!usernam)
    {
      if(window.confirm("Please Login First") == true)
      {
        router.push("/");
      }
      else{
        return false;
      }    
    }
    else{
      router.push(`/product/${id}`)
    }
  }
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
              <div className="card" id="cardData" key={list.name}>
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
                  <Link href={`/list/${list._id}`}>
                    <a className="btn btn-primary">Detail</a>
                  </Link>

                <a className="btn btn-primary" id="addtocard" onClick={()=>getMe(list._id)}>
                    Add to Cart
                  </a>
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
