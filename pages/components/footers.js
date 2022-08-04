import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer-shri">
        <div className="container">
          <div className="" id="footer-row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and ios Mobile phone.</p>
              <div className="app-logo">
                <Image src="/image/play-store.png" height={41} width={140} alt="footer-image" className="footer-image-size"></Image><br />
                <Image src="/image/app-store.png" height={41} width={140} alt="footer-image" className="footer-image-size"></Image>
              </div>
            </div>
            <div className="footer-col-2">
              <Image src="/image/logo-white.png" height={54} width={180} alt="footer-image"></Image>
              <p>
                Our Purpose Is to Sustainably Make the Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>
            <div className="footer-col-3">
              <ul className="footer-ul">
              <h3>UseFull Links</h3>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affliate</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <ul className="footer-ul">
              <h3>Follow Us</h3>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2020 - Ecommerce Store</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
