import dynamic from "next/dynamic";

const Khalti = dynamic(
  () => {
    return import("../config/khalti");
  },
  { ssr: false }
);

const Payment = ()=>{
    return(<>
        <h1>Pay via following payment methods</h1>
        <div><Khalti /></div>
    </>)
}

export default Payment;