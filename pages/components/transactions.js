import Head from "next/head";
import Navbar from "./navibar";
import Footer from "./Footer";
import Link from "next/link";

export const getStaticProps = async () => {
  const resp = await fetch("https://apinextjs.herokuapp.com/getTransactions", {
    method: "GET",
    credentials: "include",
  });
  const data = await resp.json();

  return {
    props: {
      data,
    },
  };
};

const Transactions = ({ data }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
      </Head>
      <Navbar />
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Token</th>
              <th scope="col">Transaction Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Charges</th>
              <th scope="col">Date</th>
              <th scope="col">Initiator</th>
              <th scope="col">transaction_id</th>
            </tr>
          </thead>
          <tbody >
          
            {data?.map((items) => {
              return (
                <>
                
                  <tr key={items._id}>
                    <Link href={`/Bill/${items.token}`}><td className="tab-shri">{items.token}</td></Link>
                    <td>{items.transaction_status}</td>
                    <td>{items.amount}</td>
                    <td>{items.charges}</td>
                    <td>{items.date}</td>
                    <td>{items.initiator}</td>
                    <td>{items.transaction_id}</td>
                  </tr>
                </>
              );
            })}
            </tbody>
        </table>
        
      </div>
      <Footer />
    </>
  );
};

export default Transactions;