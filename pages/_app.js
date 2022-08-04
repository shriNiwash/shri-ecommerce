import '../styles/globals.css'
import Router from 'next/router'
import Head from 'next/head';
import NProgress from 'nprogress';


function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart",(url)=>{
    console.log("Router is changing");
    NProgress.start();

  })
  Router.events.on("routeChangeComplete",(url)=>{
    console.log("Router is completed");
    NProgress.done();
  })
  return (<>
  <Head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"  />
  </Head>
  <Component {...pageProps} />
  </>)
}

export default MyApp
