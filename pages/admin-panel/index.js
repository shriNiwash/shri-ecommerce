import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Admin from './admin-navbar';

const Insert = () => {
    const router = useRouter();
    const [falseState,setFalseState] = useState(false);
  const [Image, SetImage] = useState("");
  const [item, setItems] = useState({
    name: "",
    title: "",
    price: "",
    description: "",
  });
  function setFile(files) {
    var formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "bb6yahep");

    axios
      .post("https://api.cloudinary.com/v1_1/deam2hdcg/image/upload", formData)
      .then((response) => SetImage(response.data.url));
  }

  function onTextFild(e) {
    setItems({
      ...item,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const {name,title,price,description} = item;
    const insertData = {
        name,
        title,
        price,
        description,
        image:Image,
    }
    axios.post("https://ecommerce-payment.herokuapp.com/insert",insertData)
    .then((response)=>{
        setFalseState(true);
    })
    .catch((error)=>console.log(error));
  };

  if(falseState == true)
  {
    router.push("/admin-panel/listitem")
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
            />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter The title"
              required
              onChange={(e) => onTextFild(e)}
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter The Price"
              required
              onChange={(e) => onTextFild(e)}
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input
              type="file"
              name="image"
              id="image"
              placeholder="Upload File Here"
              required
              onChange={(e) => setFile(e.target.files)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Describe About the Product"
              required
              onChange={(e) => onTextFild(e)}
            />
          </div>

          <div>
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Insert;
