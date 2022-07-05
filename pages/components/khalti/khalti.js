import KhaltiCheckout from "khalti-checkout-web";
import React from 'react';
import Config from "./khaltiConfig";

export default function Khalti() {
    let checkout = new KhaltiCheckout(Config);
  return (
    <div>
        <button onClick={()=>checkout.show({amount:3000})}>Pay via Khalti</button>
    </div>
  )
}




