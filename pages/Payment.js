import dynamic from "next/dynamic";
import Navbar from "./components/navibar";
import Footer from "./components/Footer";
import { useState } from "react";

const Khalti = dynamic(
  () => {
    return import("../config/khalti");
  },
  { ssr: false }
);

const Payment = ()=>{
  const data = 100;
    return(<div className="contai">
        <Navbar />
        <div className="container">
            <h1>Pay via Khalti</h1>
            <Khalti records={data * 100}/>
        </div>
    </div>)
}

export default Payment;