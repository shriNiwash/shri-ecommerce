import Head from "next/head";
import Image from "next/image";
import Admin from './admin-navbar';

export const getServerSideProps = async () => {
  const resp = await fetch("https://ecommerce-payment.herokuapp.com/list");
  const data = await resp.json();
  console.log("hello", data);

  return {
    props: {
      data,
    },
  };
};

const Listitem = ({ data }) => {
  return (
    <>
    <Admin />
      <Head>
        <title>Admin-Panel</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
      </Head>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
            <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Operations</th>

            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              return (
                <>
                  <tr>
                  <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td><Image src={`/${item.image}`} height={100} width={100}></Image></td>
                    <td><button className="btn btn-primary">Update</button>{" "}<button className="btn btn-primary">Delete</button></td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Listitem;