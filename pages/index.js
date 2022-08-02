import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { setGlobalState, useGlobalState } from "../state";

const Home = () => {
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);

  function onTextFiled(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  var userDetails = {};

  const onSubmit = async (e) => {
    e.preventDefault();

    userDetails = await fetch("https://ecommerce-payment.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(user),
      credentials: "include",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (userDetails.status == 201) {
      setUserName(user.username);
      setGlobalState("username", user.username);
      // if (
      //   localStorage.getItem("username") !== null
      //   // JSON.parse(localStorage.getItem("username")).length === 0
      // ) {
      //   localStorage.setItem("username", user.username);
      // }
      // localStorage.setItem("username" ,user.username);
      setRedirect(true);
    } else {
      window.confirm("Invaid UserId or Password");
    }
  };

  if (redirect) {
    router.push({
      pathname: "/home",
      query: { name: userName },
    });
  }

  return (
    <>
      <Head>
        <title>Login Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="shri_login" id="shri_login">
        <div className="wrapper">
          <div className="tittle">
            <span>Login Form</span>
          </div>
          <form action="/login" method="post" onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="Email or UserName"
                required
                onChange={(e) => onTextFiled(e)}
                name="username"
                id="username"
              />
            </div>
            <div className="row">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                required
                onChange={(e) => onTextFiled(e)}
              />
            </div>
            <div className="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              <Link href="/components/Registration">
                <a>Signup now</a>
              </Link>
              <br />
              <Link href="/admin-panel/adminlogin">
                <a>Admin-Panel</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
