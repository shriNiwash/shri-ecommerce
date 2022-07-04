import Head from "next/head";

const Cards = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        ></link>
      </Head>
      <section className="Card-Design">
        <div className="container" id="cant">
          <div className="row">
            <div className="col-lg-4">
              <div className="card text-center cards">
                <div className="card-body">
                  <a href="/">
                    <i className="fa fa-laptop icones" id="awesome"></i>
                  </a>
                  <h3 className="card-title">Organic vagetables</h3>
                  <p className="card-text">
                  We should care about the food we are having on the daily
                  basis.The product we are using should be examined first and 
                  then it should be used.
                  </p>
                  <a href="#" className="btn btn-primary" id="button-card">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center cards">
                <div className="card-body">
                  <a href="">
                    <i className="fa fa-users icones"></i>
                  </a>
                  <h4 className="card-title">Highly Qualified Teachers</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary" id="button-card">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center cards">
                <div className="card-body">
                  <a href="">
                    <i className="fa fa-book icones"></i>
                  </a>
                  <h3 className="card-title">Book Library & Stores</h3>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary" id="button-card">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
