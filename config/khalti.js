import KhaltiCheckout from "khalti-checkout-web";
import React from "react";
import Config from "./khaltiConfig";

export default function Khalti({ records }) {
  const khal = {
    eventHandler: {
      onSuccess(payload) {
        console.log(payload);
        let data = {
          token: payload.token,
          amount: payload.amount,
        };
        console.log(data.token, data.amount);

        axios
          .post(
            `http://localhost:3002/payment-verification?token=${payload.token}&amount=${payload.amount}&key=${MyKey.secretKey}`
          )
          .then((response) => {
            console.log(response);
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
  };
  let checkout = new KhaltiCheckout({...Config,...khal});
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
