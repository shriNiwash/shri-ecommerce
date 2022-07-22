import Head from "next/head";
import { Image } from "cloudinary-react";
import Admin from "./admin-navbar";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
export const getServerSideProps = async () => {
  const resp = await fetch("https://ecommerce-payment.herokuapp.com/list");
  const data = await resp.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

const Listitem = ({ data }) => {
  const router = useRouter();

  async function handleDelete(id) {
    if(window.confirm(`Are you sure want to Delete ${id}`) == true){
      const deleted = await axios.delete(
        `https://ecommerce-payment.herokuapp.com/list/${id}`
      );
      console.log(deleted);
      router.push("/admin-panel/listitem");

    }
    else{
      return false;
    }

  }

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
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                      <Image
                        cloudName="deam2hdcg"
                        publicId={`${item.image}`}
                        height={100}
                        width={100}
                      ></Image>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>{" "}
                      <Link href={`/admin-panel/update/${item._id}`}>
                        <button className="btn btn-primary">Update</button>
                      </Link>
                    </td>
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
