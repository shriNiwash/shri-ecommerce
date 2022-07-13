
const Bill = () => {
    return (
      <div className="mainserve">
      <h1>Payemnt Receipt</h1>
        <div className="Container" id="table_content">
          <table className="tab">
            <thead>
              <tr>
                <td>Reference Code</td>
                <td>Reference Code</td>
              </tr>
              <tr>
                <td>Date/Time</td>
                <td>Date/Time</td>
              </tr>
              <tr>
                <td>Channel</td>
                <td>Channel</td>
              </tr>
              <tr>
                <td>Payment Attribute</td>
                <td>Payment Attribute</td>
              </tr>
              <tr>
                <td>Service Name</td>
                <td>Service Name</td>
              </tr>
              <tr>
                <td>Amount(NPR)</td>
                <td>Amount(NPR)</td>
              </tr>
              <tr>
                <td>Txn Amount(NPR)</td>
                <td>Txn Amount(NPR)</td>
              </tr>{" "}
              <tr>
                <td>Charges(NPR)</td>
                <td>Charges(NPR)</td>
              </tr>{" "}
              <tr>
                <td>Initiator</td>
                <td>Initiator</td>
              </tr>{" "}
              <tr>
                <td>To Account</td>
                <td>To Account</td>
              </tr>
              <tr>
                <td>Remarks</td>
                <td>Remarks</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  };
  
  export default Bill;
  