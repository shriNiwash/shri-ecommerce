import MyKey from "./khaltikey";
import axios from "axios";



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
      console.log(data.token, data.amount);

      axios
        .post(
          `https://apinextjs.herokuapp.com/payment-verification?token=${payload.token}&amount=${payload.amount}&key=${MyKey.secretKey}`
        )
        .then((response) => {
          console.log(response);
          alert("Congrats Your Transaction Has be Completed.For Details Please visit My Transactions on Navbar")
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

export default Config;
