import HeaderLogo from '../assets/icons/nav-logo-g-2.png';
import DogAccessoriesBanner from '../assets/banners/dog-accessories.png';
import DogGroomingBanner from '../assets/banners/dog-grooming.png';
import DogTrainingBanner from '../assets/banners/dog-training.png';
import DogNutritionBanner from '../assets/banners/dog-nutrition.png';

const Header = () => {
  return (
    <header>
      <div class="header-top">
        <div class="container">
          <ul class="header-social-container">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
          </ul>

          <div class="header-alert-news">
            <p>
              <b>same day delivery</b> for orders within cebu
            </p>
          </div>

          <div class="header-weather">
            <div class="sunny-icon">
              <ion-icon name="partly-sunny-outline"></ion-icon>
            </div>
            <p class="sunny-weather">
              {' '}
              A good day to walk your{' '}
              <span class="suellodog-color">suellodog</span>
            </p>
            <div class="rainy-icon">
              <ion-icon name="rainy-outline"></ion-icon>
            </div>
            <p class="rainy-weather">Not a day to go out. Stay dry.</p>
          </div>
        </div>
      </div>

      <div id="top" class="header-main">
        <div class="container">
          <a href="https://bryansuello.dev" class="header-logo" target="_blank">
            <img src={HeaderLogo} alt="SuelloDog's Logo" />
          </a>

          <div class="header-search-container">
            <input
              type="search"
              name="search"
              class="search-field"
              placeholder="Search in SuelloDog"
            />

            <button class="close-btn">
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>

            <button class="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

          <div class="header-user-actions">
            <div class="my-account">
              <a href="#">
                <p>login / sign up</p>
              </a>
              <a href="#">
                <span>
                  my account
                  <ion-icon
                    class="accnt-chevron"
                    name="chevron-down-outline"
                  ></ion-icon>
                </span>
              </a>
            </div>

            <button class="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span class="count">0</span>
            </button>

            <button class="action-btn">
              {/* <ion-icon name="bag-handle-outline"></ion-icon> */}
              <ion-icon name="cart-outline"></ion-icon>
              <span class="count">0</span>
            </button>
          </div>
        </div>
      </div>

      <nav class="desktop-navigation-menu">
        <div class="container">
          <ul class="desktop-menu-category-list">
            <li class="menu-category">
              <a href="#" class="menu-title">
                Home
              </a>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Categories
              </a>

              <div class="dropdown-panel">
                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Dog Accessories</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Collar</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Harness</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Leash</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Clothes</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Leads</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src={DogAccessoriesBanner}
                        alt="dog accessories banner"
                      />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Grooming</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Shampoo & Conditioner</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Brush & Comb</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Ear Cleaner</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Dental Supplies</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img src={DogGroomingBanner} alt="dog grooming banner" />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Training</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Clicker</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Portable Mat</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Poop Bag</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Treats</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Whistle</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img src={DogTrainingBanner} alt="dog training banner" />
                    </a>
                  </li>
                </ul>

                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Nutrition</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Kibbles</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Wet Food</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Vitamins</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Medicines</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">Injections</a>
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img
                        src={DogNutritionBanner}
                        alt="dog nutrition banner"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Brands
              </a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">SuelloDog</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Kong</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Alpo</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Royal canin</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Pedigree</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Services
              </a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">Grooming</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Training</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Veterinary</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Boarding</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Tagging</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Dog Adoption</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#blog" class="menu-title">
                blog
              </a>
            </li>

            <li class="menu-category">
              <a href="#contact" class="menu-title">
                contact
              </a>
            </li>

            <li class="menu-category">
              <a href="#about-us" class="menu-title">
                about us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE */}
      <div class="mobile-bottom-navigation">
        <button class="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button class="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span class="count">0</span>
        </button>

        <button class="action-btn">
          <a href="#top" class="link-to-top">
            <ion-icon class="mobile-home-icon" name="home-outline"></ion-icon>
          </a>
        </button>

        <button class="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span class="count">0</span>
        </button>

        <button class="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
        <div class="menu-top">
          <h2 class="menu-title">Menu</h2>

          <button class="menu-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="mobile-menu-category-list">
          <li class="menu-category">
            <a href="#" class="menu-title">
              Home
            </a>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Categories</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Grooming
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Training
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Nutrition
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Play
                </a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Brands</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Suellodog
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Kong
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Alpo
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Royal Canin
                </a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Services</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Grooming
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Training
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Veterinary
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Boarding
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Tagging
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Dog Adoption
                </a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <a href="#blog" class="menu-title">
              Blog
            </a>
          </li>

          <li class="menu-category">
            <a href="#contact" class="menu-title">
              Contact
            </a>
          </li>

          <li class="menu-category">
            <a href="#about-us" class="menu-title">
              About Us
            </a>
          </li>
        </ul>

        <div class="menu-bottom">
          <ul class="menu-category-list">
            <ul class="menu-social-container">
              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
