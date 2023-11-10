import "./footer.css";

function Footer() {

  return (
    <div className="footer-container bg-dark" id="foot">
      <br />
      <i className="fa-solid fa-users fa-lg me-5" onClick={() => window.open('https://www.facebook.com', '_blank')}></i>
      <i className="fa-solid fa-camera fa-lg" onClick={() => window.open('https://www.instagram.com', '_blank')}></i>
      <br />
      <br />
      <h6>Creative Concrete</h6>
      <h6>1234 Sesame St.</h6>
      <h6>San Jacinto, Ca 92582</h6>
      <h6>951-330-6950</h6>
      <p className="footer-text">By. Anthony Looney</p>
      <div class="sdgku">

        <a href="https://sdgku.edu/" target="blank">
          <img src="https://sdgku.edu/wp-content/uploads/2014/10/sdgku-logo-small.png" alt="" />
        </a>
        <p>© 2022-2023 San Diego Global Knowledge University. All rights reserved.</p>

        <div className="social-media">

        </div>
      </div>
    </div>
  );
}

export default Footer;