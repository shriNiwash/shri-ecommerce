import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
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

    userDetails = await fetch(
      "https://ecommerce-payment.herokuapp.com/admin-login",
      {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    if (userDetails.status == 201) {
      setUserName(user.username);
      setRedirect(true);
    } else {
      alert("Sorry You are Not an Admin");
    }
  };

  if (redirect) {
    router.push({
      pathname: "/admin-panel",
    });
  }

  return (
    <>
      <Head>
        <title>Admin-Panel</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="shri_login" id="shri_login">
        <div className="wrapper">
          <div className="tittle">
            <span>Admin Login</span>
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
              <Link href="/">
                <a>Back-to-Ecommerce-Login</a>
              </Link>
              <br />
              <h3>Authorized Login Only.. All right reserved</h3>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;

// return(<>
//    <Head>
//       <title>Admin-Panel</title>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
//       />
//     </Head>
//     <div className="shri_login" id="shri_login">
//       <div className="wrapper">
//         <div className="tittle">
//           <span>Login Form</span>
//         </div>
//         <form action="/login" method="post" onSubmit={(e) => onSubmit(e)}>
//           <div className="row">
//             <i className="fa fa-user"></i>
//             <input
//               type="text"
//               placeholder="Email or UserName"
//               required
//               onChange={(e) => onTextFiled(e)}
//               name="username"
//               id="username"
//             />
//           </div>
//           <div className="row">
//             <i className="fa fa-lock"></i>
//             <input
//               type="password"
//               placeholder="password"
//               name="password"
//               id="password"
//               required
//               onChange={(e) => onTextFiled(e)}
//             />
//           </div>
//           <div className="pass">
//             <a href="#">Forgot Password?</a>
//           </div>
//           <div className="row button">
//             <input type="submit" value="Login" />
//           </div>
//           <div className="signup-link">
//             <Link href="/">
//               <a>Back-to-Ecommerce-Login</a>
//             </Link><br />
//             <h3>Authorized Login Only.. All right reserved</h3>
//           </div>
//         </form>
//       </div>
//     </div>
// </>)
