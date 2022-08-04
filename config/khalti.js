import KhaltiCheckout from "khalti-checkout-web";
import React from "react";
import { useGlobalState } from "../state";
import MyKey from "./khaltikey";
import axios from "axios";
import Cookies from "js-cookie";

export default function Khalti({ records }) {
  const username = Cookies.get("username");
  const [productName] = useGlobalState("productName");
  let Config = {
    // replace this key with yours
    publicKey: MyKey.publicTestKey,
    productIdentity: "78",
    productName: "My E-commerce Store",
    productUrl: "http://localhost:3000",
    eventHandler: {
      onSuccess(payload) {
        console.log(payload);
        console.log(payload.mobile);
        let data = {
          token: payload.token,
          amount: payload.amount,
        };

        axios
          .post(
            `https://apinextjs.herokuapp.com/payment-verification?token=${payload.token}&amount=${payload.amount}&key=${MyKey.secretKey}&username=${username}&product_name=${productName}`
          )
          .then((response) => {
            alert(
              "Congrats Your Transaction Has be Completed.For Details Please visit My Transactions on Navbar"
            );
          })
          .catch((error) => {
            console.log(error.response);
          });
        // console.log(payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  let checkout = new KhaltiCheckout(Config);
  return (
    <div>
      <button
        onClick={() => checkout.show({ amount: records })}
        className="khalti"
      >
        Pay via Khalti
      </button>
    </div>
  );
}
