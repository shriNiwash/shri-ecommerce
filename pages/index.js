import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'
import { setGlobalState,useGlobalState } from "../state";




const Home = () => {
  const router = useRouter();
  const [userName,setUserName] = useState("")
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
    var userDetails = {};

    const onSubmit = async (e)=>{
        e.preventDefault();
        
     userDetails =  await fetch('https://ecommerce-payment.herokuapp.com/login',{
          method:"POST",
          body: JSON.stringify(user),
          credentials: 'include',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
      });
  
      if(userDetails.status == 201)
      {
        setUserName(user.username);
        setGlobalState("username",user.username);
        setRedirect(true);
      }
      
      }

      if(redirect)
      {
        router.push({
          pathname:'/home',
          query:{name:userName}

        });
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
            <input type="submit" value="Login"  /><br /><br />
            <Link href="/components/Registration"><input type="submit" value="SignUp" /></Link><br />
            <Link href="/admin-panel/adminlogin"><input type="submit" value="Admin-Panel" /></Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;