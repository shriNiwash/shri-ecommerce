import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const registration_result = await fetch("https://ecommercebackend-ydky.onrender.com/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (registration_result.statusText == "Bad Request") {
      if (
        window.confirm(
          "The User Already Exists ❗ Do you want to visit Login page?"
        ) == true
      ) {
        setRedirect(true);
      } else {
        return false;
      }
    } else {
      if (window.confirm("Thanks for Your Registration 😊") == true) {
        setRedirect(true);
      } else {
        return false;
      }
    }
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
          <form action="/login" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <i className="fa fa-user"></i>
              <input
                type="text"
                placeholder="UserName"
                required
                {...register("username", { minLength: 5 })}
                name="username"
                id="username"
              />
              <small>
                {" "}
                {errors.username && "Lenght should be more than 5 characters"}
              </small>
            </div>
            <br />
            <div className="row">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Create New Password"
                name="password"
                id="password"
                required
                {...register("password", { minLength: 8 })}
              />
              <small>
                {" "}
                {errors.password && "Password should be more than 8 characters"}
              </small>
            </div>
            <br />
            <div className="row">
              <i className="fa fa-book"></i>
              <input
                type="text"
                placeholder="Assign your role here"
                name="role"
                id="password"
                required
                {...register("role")}
              />
            </div>
            <br />
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
