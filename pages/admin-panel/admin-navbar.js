import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
const Admin = () => {
    const logout = async (e) => {
        e.preventDefault();
        const resp = await fetch("https://ecommerce-payment.herokuapp.com/logout", {
          method: "POST",
        });
        router.push("/admin-panel/adminlogin");
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
              Admin-Panel
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
                  <Link href="/admin-panel">
                    <a className="nav-link active" aria-current="page">
                      {" "}
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/admin-panel">
                    <a className="nav-link active">Insert</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/admin-panel/listitem">
                    <a className="nav-link active">List</a>
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button
                  className="btn btn-outline-success"
                  id="logout"
                  type="submit"
                >
                  Search
                </button>
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

export default Admin;