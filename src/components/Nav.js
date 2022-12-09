import HeaderLogo from '../assets/icons/nav-logo-g-2.png';
import DogAccessoriesBanner from '../assets/banners/dog-accessories.png';
import DogGroomingBanner from '../assets/banners/dog-grooming.png';
import DogTrainingBanner from '../assets/banners/dog-training.png';
import DogNutritionBanner from '../assets/banners/dog-nutrition.png';
import { IonIcon, IonicSafeString, IonMenu } from '@ionic/react';
import {
  logoInstagram,
  logoYoutube,
  logoTwitter,
  logoFacebook,
  rainyOutline,
  chevronDownOutline,
  partlySunnyOutline,
  closeCircleOutline,
  searchOutline,
  heartOutline,
  cartOutline,
  bagHandleOutline,
  homeOutline,
  gridOutline,
  closeOutline,
  addOutline,
  removeOutline,
  logoLinkedin,
  menuOutline,
} from 'ionicons/icons';

import { Link } from 'react-router-dom';

const Header = ({ likedItems, cartItems }) => {
  // let searchField = document.querySelector('.search-field');
  // let closeBtn = document.querySelector('.close-btn');
  // searchField.addEventListener('focus', () => {
  //   searchField.placeholder = '';
  //   searchField.style.color = '#114042';
  //   closeBtn.style.display = 'block';
  //   closeBtn.addEventListener('click', () => {
  //     searchField.value = '';
  //     if (searchField.value.length === 0) {
  //       closeBtn.style.display = 'none';
  //     }
  //   });
  //   searchField.addEventListener('blur', () => {
  //     searchField.placeholder = 'Search in SuelloDog';
  //   });
  // });

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="/#" className="social-link">
                <IonIcon icon={logoYoutube} />
              </a>
            </li>

            <li>
              <a href="/#" className="social-link">
                <IonIcon icon={logoInstagram} />
              </a>
            </li>

            <li>
              <a href="/#" className="social-link">
                <IonIcon icon={logoTwitter} />
              </a>
            </li>

            <li>
              <a href="/#" className="social-link">
                <IonIcon icon={logoFacebook} />
              </a>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>same day delivery</b> for orders within cebu
            </p>
          </div>

          <div className="header-weather">
            <div className="sunny-icon">
              <IonIcon icon={partlySunnyOutline} />
            </div>
            <p className="sunny-weather">
              {' '}
              A good day to walk your{' '}
              <span className="suellodog-color">suellodog</span>
            </p>
            <div className="rainy-icon">
              <IonIcon icon={rainyOutline} />
            </div>
            <p className="rainy-weather">Not a day to go out. Stay dry.</p>
          </div>
        </div>
      </div>
      <div id="top" className="header-main">
        <div className="container">
          <Link to="/" className="header-logo">
            <img src={HeaderLogo} alt="SuelloDog's Logo" />
          </Link>

          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Search in SuelloDog"
            />

            <button className="close-btn">
              <IonIcon icon={closeCircleOutline} />
            </button>

            <button className="search-btn">
              <IonIcon icon={searchOutline} />
            </button>
          </div>

          <div className="header-user-actions">
            <div className="my-account">
              {/* <a href="/#"> */}
              <Link to="/login">
                <p>login / sign up</p>
              </Link>
              {/* <p>login / sign up</p> */}
              {/* </a> */}
              <a href="/#">
                <span>
                  my account
                  <IonIcon
                    icon={chevronDownOutline}
                    className="accnt-chevron"
                  />
                </span>
              </a>
            </div>

            <button className="action-btn">
              <Link to="/likeditems" className="liked-items">
              <IonIcon icon={heartOutline} />
              <span className="count">{likedItems}</span>
              </Link>
            </button>

            <button className="action-btn">
              {/* <ion-icon name="bag-handle-outline"></ion-icon> */}
              <Link to="/cart" className="cart-icon">
                <IonIcon icon={cartOutline} />
                <span className="count">{cartItems}</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <Link to="/" className="menu-title">
                Home
              </Link>
            </li>

            <li className="menu-category">
              <a href="/#" className="menu-title">
                Categories
              </a>

              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="/#">Dog Accessories</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Collar</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Harness</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Leash</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Clothes</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Leads</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">
                      <img
                        src={DogAccessoriesBanner}
                        alt="dog accessories banner"
                      />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="/#">Grooming</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Shampoo & Conditioner</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Brush & Comb</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Ear Cleaner</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Dental Supplies</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Sunglasses</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">
                      <img src={DogGroomingBanner} alt="dog grooming banner" />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="/#">Training</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Clicker</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Portable Mat</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Poop Bag</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Treats</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Whistle</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">
                      <img src={DogTrainingBanner} alt="dog training banner" />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="/#">Nutrition</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Kibbles</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Wet Food</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Vitamins</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Medicines</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">Injections</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="/#">
                      <img
                        src={DogNutritionBanner}
                        alt="dog nutrition banner"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <a href="/#" className="menu-title">
                Brands
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="/#">SuelloDog</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Kong</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Alpo</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Royal canin</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Pedigree</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="/#" className="menu-title">
                Services
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="/#">Grooming</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Training</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Veterinary</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Boarding</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Tagging</a>
                </li>

                <li className="dropdown-item">
                  <a href="/#">Dog Adoption</a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="/#blog" className="menu-title">
                blog
              </a>
            </li>

            <li className="menu-category">
              <a href="/#contact" className="menu-title">
                contact
              </a>
            </li>

            <li className="menu-category">
              <a href="/#about-us" className="menu-title">
                about us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* MOBILE */}
      <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn>
          <IonIcon icon={menuOutline} />
        </button>

        <button className="action-btn">
          <IonIcon icon={bagHandleOutline} />

          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <a href="/#top" className="link-to-top">
            <IonIcon icon={homeOutline} classNameName="mobile-home-icon" />
          </a>
        </button>

        <button className="action-btn">
          <IonIcon icon={heartOutline} />

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          <IonIcon icon={gridOutline} />
        </button>
      </div>
      <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <IonIcon icon={closeOutline} />
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="/#" className="menu-title">
              Home
            </a>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Categories</p>

              <div>
                <IonIcon icon={addOutline} classNameName="add-icon" />
                <IonIcon icon={removeOutline} classNameName="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Grooming
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Training
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Nutrition
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Play
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Brands</p>

              <div>
                <IonIcon icon={addOutline} classNameName="add-icon" />
                <IonIcon icon={removeOutline} classNameName="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Suellodog
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Kong
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Alpo
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Royal Canin
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Services</p>

              <div>
                <IonIcon icon={addOutline} classNameName="add-icon" />
                <IonIcon icon={removeOutline} classNameName="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Grooming
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Training
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Veterinary
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Boarding
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Tagging
                </a>
              </li>

              <li className="submenu-category">
                <a href="/#" className="submenu-title">
                  Dog Adoption
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="/#blog" className="menu-title">
              Blog
            </a>
          </li>

          <li className="menu-category">
            <a href="/#contact" className="menu-title">
              Contact
            </a>
          </li>

          <li className="menu-category">
            <a href="/#about-us" className="menu-title">
              About Us
            </a>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            <ul className="menu-social-container">
              <li>
                <a href="/#" className="social-link">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>

              <li>
                <a href="/#" className="social-link">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>

              <li>
                <a href="/#" className="social-link">
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>

              <li>
                <a href="/#" className="social-link">
                  <IonIcon icon={logoLinkedin} />
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
