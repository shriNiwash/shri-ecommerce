import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';


const Navbar = (props) => {
  const username = Cookies.get("username");
  const router = useRouter();
  const logout = async (e) => {
    e.preventDefault();
    const resp = await fetch("https://ecommerce-payment.herokuapp.com/logout", {
      method: "POST",
      credentials: "include",
    });
    Cookies.remove("username");
    router.push("/");
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
      </Head>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Ecommerce World
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/home">
                    <a className="nav-link active" aria-current="page">
                      {" "}
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/product">
                    <a className="nav-link active">Books</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/components/list">
                    <a className="nav-link active">Products</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/components/transactions">
                    <a className="nav-link active">My Transactions</a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
              <h6 className="navbar-button-name">{username}</h6>
                <button
                  className="btn btn-outline-success"
                  id="logout"
                  type="submit"
                  onClick={(e) => logout(e)}
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
      </div>
    </>
  );
};

export default Navbar;
