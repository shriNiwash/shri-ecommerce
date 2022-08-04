import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../state";
import Cookies from "js-cookie";

const Transactions = () => {
  // const [username] = useGlobalState("username");
  const username = Cookies.get("username");
  const [data, setData] = useState();

  useEffect(() => {
    getTransaction();
  }, [username]);

  const getTransaction = async () => {
    const resp = await fetch(
      `https://apinextjs.herokuapp.com/getTransactions/${username}`,
      {
        method: "GET",
      }
    );
    const datas = await resp.json();
    setData(datas);
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
      </Head>
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
              <th scope="col">User</th>
              <th scope="col">Product-Name</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((items) => {
              return (
                <>
                  <tr key={items._id}>
                    <Link href={`/Bill/${items.token}`}>
                      <td className="tab-shri">{items.token}</td>
                    </Link>
                    <td>{items.transaction_status}</td>
                    <td>{items.amount}</td>
                    <td>{items.charges}</td>
                    <td>{items.date}</td>
                    <td>{items.initiator}</td>
                    <td>{items.transaction_id}</td>
                    <td>{items.username}</td>
                    <td>{items.product_name}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="transaction">
          <Link href="/home">
            <button className="btn btn-success" id="transaction-button">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Transactions;
