import Navbar from "../components/navibar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";


const Khalti = dynamic(
    () => {
      return import("../../config/khalti");
    },
    { ssr: false }
  );

export const getServerSideProps = async (context) => {
    const id = context.query;
    const ids = id.productList;
    console.log(ids);
    const res = await fetch(
      `https://ecommerce-payment.herokuapp.com/data/${ids}`
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  };

const ProductList = ({data})=>{
    const [Data,setData] = useState('');
    return(<div className="productListing">
    <Navbar />
        <div className="container" id="productlist">
        <h1>Product Details</h1>
        <Image src={`/${data.image}`} height={400} width={500}></Image>

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
                <input type="number" name="name" onChange={(e)=>setData(e.target.value)} className="productInput" />
            </div><br />
            <Khalti records={Data*data.price*100}/>

        </div><br />
        <Footer />
    </div>)
}

export default ProductList;