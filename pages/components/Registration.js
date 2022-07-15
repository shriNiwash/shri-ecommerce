import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const Registration = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    role:""
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

  if(redirect)
  {
    router.push("/");
  }
  

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div>
        <form action="/login" method="post" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
              onChange={(e) => onTextFiled(e)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => onTextFiled(e)}
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              id="password"
              placeholder="Asign Your Role Please"
              required
              onChange={(e) => onTextFiled(e)}
            />
          </div>
          <div>
            <input type="submit" value="SING-UP" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
