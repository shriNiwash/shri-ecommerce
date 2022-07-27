import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Registration = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "",
  });
  const [redirect, setRedirect] = useState(false);

  function onTextFiled(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://ecommerce-payment.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setRedirect(true);
  };

  if (redirect) {
    router.push("/");
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
            <span>Signup Form</span>
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
                placeholder="Create New Password"
                name="password"
                id="password"
                required
                onChange={(e) => onTextFiled(e)}
              />
            </div>
            <div className="row">
              <i className="fa fa-book"></i>
              <input
                type="text"
                placeholder="Assign your role here"
                name="role"
                id="password"
                required
                onChange={(e) => onTextFiled(e)}
              />
            </div>
            <div className="row button">
              <input type="submit" value="Sign-Up" />
            </div>
            <div className="signup-link">
            <Link href="/">
              <a>Back-to-Login</a>
            </Link>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
