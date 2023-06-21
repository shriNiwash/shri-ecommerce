import Footer from "../components/footers";
import { Image } from "cloudinary-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { setGlobalState } from "../../state";
const Navbar = dynamic(
  () => import('../components/navibar'),
  { ssr: false }
)

const Khalti = dynamic(
  () => {
    return import("../../config/khalti");
  },
  { ssr: false }
);

export const getServerSideProps = async (context) => {
  const id = context.query;
  const ids = id.productList;
  const res = await fetch(
    `https://ecommercebackend-ydky.onrender.com/data/${ids}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const ProductList = ({ data }) => {
  setGlobalState("productName", data.name);
  const router = useRouter();
  const [Data, setData] = useState("");
  return (
    <div className="productListing">
      <Navbar />
      <div className="container" id="productlist">
        <h1>Product Details</h1>
        <Image
        className="product_image_data"
          cloudName="deam2hdcg"
          publicId={`${data.image}`}
          height={400}
          width={500}
          alt="Product Photoes"
        ></Image>

        <div>
          <label id="productname">Name:</label>
          <label id="productDetails">{data.name}</label>
        </div>
        <div>
          <label id="productname">Title:</label>
          <label id="productDetails">{data.title}</label>
        </div>
        <div>
          <label id="productname">description:</label>
          <label id="productDetails">{data.description}</label>
        </div>
        <div>
          <label id="productname">Price:</label>
          <label id="productDetails">{data.price}</label>
        </div>
        <div>
          <h3>Enter the quantity</h3>
          <input
            type="number"
            name="name"
            onChange={(e) => setData(e.target.value)}
            className="productInput"
          />
        </div>
        <br />
        <Khalti records={Data * data.price * 100} />
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default ProductList;
