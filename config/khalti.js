import KhaltiCheckout from "khalti-checkout-web";
import React from 'react';
import Config from "./khaltiConfig";

export default function Khalti({records}) {
    let checkout = new KhaltiCheckout(Config);
  return (
    <div>
        <button onClick={()=>checkout.show({amount:records})} className="khalti">Pay via Khalti</button>
    </div>
  )
}




