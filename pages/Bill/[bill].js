import GeneratePDF from "../components/Pdfgenerator";
import Navbar from "../components/navibar";
import Footer from "../components/Footer";

export const getServerSideProps=async(context)=>{
  const token = context.query.bill;
  console.log(context.query.bill);
  const resp = await fetch(`https://apinextjs.herokuapp.com/transaction-data/${token}`, {
    method: "GET",
    credentials: "include",
  });
  const data =await resp.json();
  return{
    props:{
      data
    }
  }

}
const Bill = ({data}) => {
    return (
      <>
      <Navbar />
      <div className="mainserve">
      <h1>Payemnt Receipt</h1>
        <div className="Container" id="table_content">
          <table className="tab">
            <thead>
              <tr>
                <td>Reference Code</td>
                <td>{data._id}</td>
              </tr>
              <tr>
                <td>Date/Time</td>
                <td>{data.date}</td>
              </tr>
              <tr>
                <td>Channel</td>
                <td>KHALTI</td>
              </tr>
              <tr>
                <td>Payment Attribute</td>
                <td>{data.transaction_id}</td>
              </tr>
              <tr>
                <td>Service Name</td>
                <td>{data.service_name}</td>
              </tr>
              <tr>
                <td>Amount(NPR)</td>
                <td>{data.amount}</td>
              </tr>
              <tr>
                <td>Txn Amount(NPR)</td>
                <td>No Tax</td>
              </tr>{" "}
              <tr>
                <td>Charges(NPR)</td>
                <td>{data.charges}</td>
              </tr>{" "}
              <tr>
                <td>Initiator</td>
                <td>{data.initiator}</td>
              </tr>{" "}
              <tr>
                <td>To Account</td>
                <td>{data.to_account}</td>
              </tr>
              <tr>
                <td>Product-Name</td>
                <td>{data.product_name}</td>
              </tr>
            </thead>
          </table>
        </div><br />
        <GeneratePDF data={data}/><br />
        <h1>Thanks For Doing Business with us.</h1>
      </div>
      <Footer />
      </>
    );
  };
  
  export default Bill;
  