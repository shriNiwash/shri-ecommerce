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
       await fetch('http://localhost:3001/login',{
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
      <div className="form-karan">
        <form action="/login" method="post" onSubmit={(e)=>onSubmit(e)} className="form-style">
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
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;