import PaymentMethods from '../assets/icons/paymentmethods.png';

const Footer = () => {
  return (
    <footer>
      <div class="footer-nav">
        <div class="container">
          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Popular Categories</h2>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Dog Accessories
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Essentials
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Nutrition
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Grooming
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Training
              </a>
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Products</h2>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Leash
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Harness
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Dog Feeder
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Dog Bowls
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Treats
              </a>
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Our Company</h2>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Delivery
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Locations
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Terms and conditions
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                About us
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Secure payment
              </a>
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Services</h2>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Promotions
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                New products
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Best sales
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Contact us
              </a>
            </li>

            <li class="footer-nav-item">
              <a href="/#" class="footer-nav-link">
                Sitemap
              </a>
            </li>
          </ul>

          <ul id="contact" class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Contact</h2>
            </li>

            <li class="footer-nav-item flex">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <address class="content">
                69 SuelloDog Compound, Mactan, Lapu-lapu City, 6015, PH
              </address>
            </li>

            <li class="footer-nav-item flex">
              <div class="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <a href="tel:+607936-8058" class="footer-nav-link">
                (607) 936-8058
              </a>
            </li>

            <li class="footer-nav-item flex">
              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <a href="https://bryansuello.dev" class="footer-nav-link email">
                bryansuello@gmail.com
              </a>
            </li>
          </ul>

          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <h2 class="nav-title">Follow Us</h2>
            </li>

            <li>
              <ul class="social-link">
                <li class="footer-nav-item">
                  <a href="/#" class="footer-nav-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li class="footer-nav-item">
                  <a href="/#" class="footer-nav-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li class="footer-nav-item">
                  <a href="/#" class="footer-nav-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li class="footer-nav-item">
                  <a href="/#" class="footer-nav-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <img src={PaymentMethods} alt="payment methods" class="payment-img" />

          <p class="bottom-name">
            <a href="https://bryansuello.dev" target="_blank" rel="noreferrer">
              bryansuello.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
