import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();
    const [user,setUser] = useState({
        username:"",
        password:""
    })
    const [redirect,setRedirect] = useState(false);

    function onTextFiled(e){
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
       await fetch('https://ecommerce-payment.herokuapp.com/login',{
          method:"POST",
          body: JSON.stringify(user),
          credentials: 'include',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
      });
      setRedirect(true);
      }

      if(redirect)
      {
        router.push("/home");
      }

  return (
    <>
    <Head>
        <title>Login Page</title>
    </Head>
      <div>
        <form action="/login" method="post" onSubmit={(e)=>onSubmit(e)}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
              onChange={(e)=>onTextFiled(e)}
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
              onChange={(e)=>onTextFiled(e)}
            />
          </div>
          <div>
            <input type="submit" value="Login"  />
            <Link href="/components/Registration"><a  className="anker"> Sign Up first</a></Link>
            <br />
            <br />
            <br />
            <Link href="/reset" ><a className="anker">Forgot Password</a></Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;