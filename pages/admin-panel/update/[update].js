import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Admin from "../admin-navbar";

export const getServerSideProps = async (context) => {
  const id = context.query.update;
  const ids = { id: id };

  return {
    props: {
      ids,
    },
  };
};
const Update = ({ ids }) => {
  const router = useRouter();
  const id = ids.id;

  useEffect(() => {
    getData();
  }, [id]);

  const [Image, setImage] = useState();
  const [State, setFalseState] = useState(false);
  const [item, setItems] = useState({
    name: "",
    title: "",
    price: "",
    description: "",
  });

  async function getData() {
    const response = await fetch(
      `https://ecommerce-payment.herokuapp.com/data/${id}`
    );
    const data = await response.json();
    setItems(data);
  }

  function setFile(files) {
    var formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "bb6yahep");

    axios
      .post("https://api.cloudinary.com/v1_1/deam2hdcg/image/upload", formData)
      .then((response) => setImage(response.data.url));
  }

  function onTextFild(e) {
    setItems({
      ...item,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, title, price, description, image } = item;
    const insertData = {
      name,
      title,
      price,
      description,
      image: Image ? Image : image,
    };
    axios
      .put(`https://ecommerce-payment.herokuapp.com/list/${id}`, insertData)
      .then((response) => {
        setFalseState(true);
      })
      .catch((error) => console.log(error));
  };

  if (State == true) {
    router.push("/admin-panel/listitem");
  }

  return (
    <div className="admin-panel">
      <Admin />
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="form-karan" id="admin-panel">
        <form
          action="/login"
          method="post"
          onSubmit={(e) => onSubmit(e)}
          className="form-style"
        >
          <div className="form-group">
            <label>Product-Name:</label>
            <input
              type="text"
              name="name"
              id="product-name"
              placeholder="Enter The Product-Name"
              required
              onChange={(e) => onTextFild(e)}
              value={item.name}
            />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              id="product-name"
              placeholder="Enter The title"
              required
              onChange={(e) => onTextFild(e)}
              value={item.title}
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              id="product-name"
              placeholder="Enter The Price"
              required
              onChange={(e) => onTextFild(e)}
              value={item.price}
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input
              type="file"
              name="image"
              id="product-name"
              placeholder="Upload File Here"
              onChange={(e) => setFile(e.target.files)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              id="product-name"
              placeholder="Describe About the Product"
              required
              onChange={(e) => onTextFild(e)}
              value={item.description}
            />
          </div>

          <div>
            <input type="submit" value="Save" id="admin-panel-button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
