import jsPDF from "jspdf"
import "jspdf-autotable";
import Head from "next/head";

const  GeneratePDF= (props)=>{
    const datas = props.data;
    // const {token,transaction_id,date,amount,charges,initiator} = data;
    function generate(){
        const doc = new jsPDF();
        doc.autoTable({
            head:[["Date/Time","Transaction-Id","Amount","Charges","Initiator","Product-Name"]],
            body:[[datas.token,datas.date,datas.transaction_id,datas.amount,datas.charges,datas.initiator,datas.product_name]]
        })
        doc.save("table.pdf");
    }

    return(<>
    <Head>
    <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
    </Head>
        <button type="btn btn-success" onClick={generate}>Download PDF</button>
    </>)
}

export default GeneratePDF;