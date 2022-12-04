import Dog2 from '../assets/icons/dog2.svg';
import Dog4 from '../assets/icons/dog4.svg';
import Dog5 from '../assets/icons/dog5.svg';
import Dog6 from '../assets/icons/dog6.svg';
import Dog7 from '../assets/icons/dog7.svg';
import Dog8 from '../assets/icons/dog8.svg';
import Dog9 from '../assets/icons/dog9.svg';
import Product1 from '../assets/products/product1.png';
import Product1r from '../assets/products/product1r.png';
import Product2 from '../assets/products/product2.png';
import Product2r from '../assets/products/product2r.png';
import Product3 from '../assets/products/product3.png';
import Product3r from '../assets/products/product3r.png';
import Product4 from '../assets/products/product4.png';
import Product4r from '../assets/products/product4r.png';
import Product5 from '../assets/products/product5.png';
import Product5r from '../assets/products/product5r.png';
import Product6 from '../assets/products/product6.png';
import Product6r from '../assets/products/product6r.png';
import Product7 from '../assets/products/product7.png';
import Product7r from '../assets/products/product7r.png';
import Product8 from '../assets/products/product8.png';
import Product8r from '../assets/products/product8r.png';
import Product9 from '../assets/products/product9.png';
import Product9r from '../assets/products/product9r.png';
import Product10 from '../assets/products/product10.png';
import Product10r from '../assets/products/product10r.png';
import Product11 from '../assets/products/product11.png';
import Product11r from '../assets/products/product11r.png';
import Product12 from '../assets/products/product12.png';
import Product12r from '../assets/products/product12r.png';
import Product13 from '../assets/products/product13.png';
import Product14 from '../assets/products/product14.png';
import Product15 from '../assets/products/product15.png';
import Product16 from '../assets/products/product16.png';
import Product17 from '../assets/products/product17.png';
import Product18 from '../assets/products/product18.png';
import Product19 from '../assets/products/product19.png';
import Product20 from '../assets/products/product20.png';
import Product21 from '../assets/products/product21.png';
import Product22 from '../assets/products/product22.png';
import Product24 from '../assets/products/product24.png';
import Product25 from '../assets/products/product25.png';
import SuelloKingDog from '../assets/products/suellokingdog.png';
import { IonIcon } from '@ionic/react';
import {
  addOutline,
  bagAddOutline,
  closeOutline,
  eyeOutline,
  heartOutline,
  removeOutline,
  repeatOutline,
  star,
  starOutline,
} from 'ionicons/icons';
import { useState } from 'react';

const ProductSection = ({ addLikedItems, removeLikedItems, addToCart }) => {
  return (
    <div className="product-container">
      <div className="container">
        {/* SIDEBAR */}

        <div className="sidebar  has-scrollbar" data-mobile-menu>
          <div className="sidebar-category">
            <div className="sidebar-top">
              <h2 className="sidebar-title">Category</h2>

              <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                <IonIcon icon={closeOutline} />
              </button>
            </div>

            <ul className="sidebar-menu-category-list">
              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn>
                  <div className="menu-title-flex">
                    <img
                      src={Dog6}
                      alt="dog care"
                      width="20"
                      height="20"
                      className="menu-title-img"
                    />

                    <p className="menu-title">Dog Care</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} classNameName="add-icon" />
                    <IonIcon icon={removeOutline} classNameName="remove-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Shampoo</p>
                      <data
                        value="300"
                        className="stock"
                        title="Available Stock"
                      >
                        9
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Powder</p>
                      <data
                        value="60"
                        className="stock"
                        title="Available Stock"
                      >
                        5
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Brush</p>
                      <data
                        value="50"
                        className="stock"
                        title="Available Stock"
                      >
                        3
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Dog Nail Clippers</p>
                      <data
                        value="87"
                        className="stock"
                        title="Available Stock"
                      >
                        2
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn>
                  <div className="menu-title-flex">
                    <img
                      src={Dog2}
                      alt="treats"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Treats</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} classNameName="add-icon" />
                    <IonIcon icon={removeOutline} classNameName="remove-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">SuelloDog KingDog</p>
                      <data
                        value="45"
                        className="stock"
                        title="Available Stock"
                      >
                        12
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Pedigree</p>
                      <data
                        value="75"
                        className="stock"
                        title="Available Stock"
                      >
                        5
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Royal Canin</p>
                      <data
                        value="35"
                        className="stock"
                        title="Available Stock"
                      >
                        9
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Alpo</p>
                      <data
                        value="26"
                        className="stock"
                        title="Available Stock"
                      >
                        4
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn>
                  <div className="menu-title-flex">
                    <img
                      src={Dog4}
                      alt="food"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Food</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} classNameName="add-icon" />
                    <IonIcon icon={removeOutline} classNameName="remove-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">SuelloDog KingDog Food</p>
                      <data
                        value="46"
                        className="stock"
                        title="Available Stock"
                      >
                        20
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Wet Food</p>
                      <data
                        value="73"
                        className="stock"
                        title="Available Stock"
                      >
                        7
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Dry Food</p>
                      <data
                        value="61"
                        className="stock"
                        title="Available Stock"
                      >
                        9
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn>
                  <div className="menu-title-flex">
                    <img
                      src={Dog5}
                      alt="dog accessories"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Dog Accessories</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} classNameName="add-icon" />
                    <IonIcon icon={removeOutline} classNameName="remove-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Collar</p>
                      <data
                        value="12"
                        className="stock"
                        title="Available Stock"
                      >
                        22
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Leash</p>
                      <data
                        value="60"
                        className="stock"
                        title="Available Stock"
                      >
                        30
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Harness</p>
                      <data
                        value="50"
                        className="stock"
                        title="Available Stock"
                      >
                        9
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Dog Clothes</p>
                      <data
                        value="87"
                        className="stock"
                        title="Available Stock"
                      >
                        21
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn>
                  <div className="menu-title-flex">
                    <img
                      src={Dog7}
                      alt="grooming"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Grooming</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} classNameName="add-icon" />
                    <IonIcon icon={removeOutline} classNameName="remove-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Shampoo</p>
                      <data
                        value="68"
                        className="stock"
                        title="Available Stock"
                      >
                        21
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Dog Comb</p>
                      <data
                        value="46"
                        className="stock"
                        title="Available Stock"
                      >
                        9
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Tick & Flea Remedy</p>
                      <data
                        value="79"
                        className="stock"
                        title="Available Stock"
                      >
                        8
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Dog Eardrops</p>
                      <data
                        value="23"
                        className="stock"
                        title="Available Stock"
                      >
                        4
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn>
                  <div className="menu-title-flex">
                    <img
                      src={Dog9}
                      alt="dog health"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Health</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} classNameName="add-icon" />
                    <IonIcon icon={removeOutline} classNameName="remove-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Dewormer</p>
                      <data
                        value="50"
                        className="stock"
                        title="Available Stock"
                      >
                        9
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Vaccination</p>
                      <data
                        value="48"
                        className="stock"
                        title="Available Stock"
                      >
                        4
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-menu-category">
                <button className="sidebar-accordion-menu" data-accordion-btn>
                  <div className="menu-title-flex">
                    <img
                      src={Dog8}
                      alt="dog walks"
                      className="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p className="menu-title">Dog Walks</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} classNameName="add-icon" />
                    <IonIcon icon={removeOutline} classNameName="remove-icon" />
                  </div>
                </button>

                <ul className="sidebar-submenu-category-list" data-accordion>
                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Leash</p>
                      <data
                        value="62"
                        className="stock"
                        title="Available Stock"
                      >
                        19
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Harness</p>
                      <data
                        value="35"
                        className="stock"
                        title="Available Stock"
                      >
                        18
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Poop Bag</p>
                      <data
                        value="80"
                        className="stock"
                        title="Available Stock"
                      >
                        6
                      </data>
                    </a>
                  </li>

                  <li className="sidebar-submenu-category">
                    <a href="/#" className="sidebar-submenu-title">
                      <p className="product-name">Dog Lead</p>
                      <data
                        value="75"
                        className="stock"
                        title="Available Stock"
                      >
                        9
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="product-showcase">
            <h3 className="showcase-heading">best sellers</h3>

            <div className="showcase-wrapper">
              <div className="showcase-container">
                <div className="showcase">
                  <a href="/#" className="showcase-img-box">
                    <img
                      src={Product3}
                      alt="dog leash"
                      width="75"
                      height="75"
                      className="showcase-img"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="/#">
                      <h4 className="showcase-title">suello dog unleash</h4>
                    </a>

                    <div className="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <div className="price-box">
                      <del>₱1300</del>
                      <p className="price">₱1100</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="/#" className="showcase-img-box">
                    <img
                      src={Product11}
                      alt="dog harness"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="/#">
                      <h4 className="showcase-title">
                        suellodog harness the power of air
                      </h4>
                    </a>
                    <div className="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <div className="price-box">
                      <del>₱2400</del>
                      <p className="price">₱2300</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="/#" className="showcase-img-box">
                    <img
                      src={Product2}
                      alt="dog bowl"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="/#">
                      <h4 className="showcase-title">orange food bowl</h4>
                    </a>
                    <div className="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <div className="price-box">
                      <del>₱230.00</del>
                      <p className="price">₱200.00</p>
                    </div>
                  </div>
                </div>

                <div className="showcase">
                  <a href="/#" className="showcase-img-box">
                    <img
                      src={Product8}
                      alt="harness"
                      className="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div className="showcase-content">
                    <a href="/#">
                      <h4 className="showcase-title">
                        suelldog harness the power of darkness
                      </h4>
                    </a>
                    <div className="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <div className="price-box">
                      <del>₱2630</del>
                      <p className="price">₱2500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-box">
          {/* PRODUCT MINIMAL */}

          <div className="product-minimal">
            <div className="product-showcase">
              <h2 id="shop-start" className="title">
                New Arrivals
              </h2>

              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product13}
                        alt="suellodog medium dog harness"
                        width="70"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">
                          suellodog harness the power of rock harness
                        </h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        dog accessories
                      </a>

                      <div className="price-box">
                        <p className="price">₱2100</p>
                        <del>₱2200</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product14}
                        alt="suellodog puppy harness"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">
                          suellodog puppy harness - red
                        </h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        dog accessories
                      </a>

                      <div className="price-box">
                        <p className="price">₱1000</p>
                        <del>₱1100</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product15}
                        alt="automatic dog feeder"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">
                          suellodog automatic feeder medium
                        </h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        essentials
                      </a>

                      <div className="price-box">
                        <p className="price">₱3000</p>
                        <del>₱4000</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product16}
                        alt="suellodog ladydog harness"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">
                          suellodog harness the power of ladies dog harness
                        </h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        dog accessories
                      </a>

                      <div className="price-box">
                        <p className="price">₱3000</p>
                        <del>₱3100</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-showcase">
              <h2 className="title">Trending</h2>

              <div className="showcase-wrapper  has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product17}
                        alt="dog shampoo"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">super dog shampoo</h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        grooming
                      </a>

                      <div className="price-box">
                        <p className="price">₱120</p>
                        <del>₱150</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product18}
                        alt="dog shampoo"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">ultimate dog shampoo</h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        grooming
                      </a>

                      <div className="price-box">
                        <p className="price">₱150</p>
                        <del>₱160</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product19}
                        alt="water bowl"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">portable water bowl</h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        essentials
                      </a>

                      <div className="price-box">
                        <p className="price">₱94.00</p>
                        <del>₱120.00</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product20}
                        alt="portable water bottle"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">
                          dog water bottle portable
                        </h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        essentials
                      </a>

                      <div className="price-box">
                        <p className="price">₱300</p>
                        <del>₱450</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-showcase">
              <h2 className="title">Top Rated</h2>

              <div className="showcase-wrapper  has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product21}
                        alt="long dog leash - premium"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">
                          long dog leash - premium
                        </h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        dog accessories
                      </a>

                      <div className="price-box">
                        <p className="price">₱300</p>
                        <del>₱350</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product22}
                        alt="dog collar"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">
                          suelldog green collar
                        </h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        dog accessories
                      </a>

                      <div className="price-box">
                        <p className="price">₱100</p>
                        <del>₱120</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product24}
                        alt="spiky dog collar"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">
                          dog collar with spikes
                        </h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        dog accessories
                      </a>

                      <div className="price-box">
                        <p className="price">₱300</p>
                        <del>₱500</del>
                      </div>
                    </div>
                  </div>

                  <div className="showcase">
                    <a href="/#" className="showcase-img-box">
                      <img
                        src={Product25}
                        alt="dog toy rope"
                        className="showcase-img"
                        width="70"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="/#">
                        <h4 className="showcase-title">rope toy</h4>
                      </a>

                      <a href="/#" className="showcase-category">
                        toys
                      </a>

                      <div className="price-box">
                        <p className="price">₱50</p>
                        <del>₱100</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- featured product --> */}

          <div className="product-featured">
            <h2 className="title">featured product</h2>

            <div className="showcase-wrapper has-scrollbar">
              <div className="showcase-container">
                <div className="showcase">
                  <div className="showcase-banner">
                    <img
                      src={SuelloKingDog}
                      alt="suellodog kingdog treats"
                      className="showcase-img"
                    />
                  </div>

                  <div className="showcase-content">
                    <div className="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <a href="#">
                      <h3 className="showcase-title">
                        suellodog kingdog premium treats - 100g
                      </h3>
                    </a>

                    <p className="showcase-desc">
                      dog treats fit for a kingdog
                    </p>

                    <div className="price-box">
                      <p className="price">₱900.00</p>

                      <del>₱1000.00</del>
                    </div>

                    <button className="add-cart-btn" onClick={addToCart}>
                      add to cart
                    </button>

                    <div className="showcase-status">
                      <div className="wrapper">
                        <p>
                          already sold: <b>30</b>
                        </p>

                        <p>
                          available: <b>40</b>
                        </p>
                      </div>

                      <div className="showcase-status-bar"></div>
                    </div>

                    <div className="countdown-box">
                      <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                      <div className="countdown">
                        <div className="countdown-content">
                          <p className="display-number">5</p>

                          <p className="display-text">Days</p>
                        </div>

                        <div className="countdown-content">
                          <p className="display-number">24</p>
                          <p className="display-text">Hours</p>
                        </div>

                        <div className="countdown-content">
                          <p className="display-number">59</p>
                          <p className="display-text">Min</p>
                        </div>

                        <div className="countdown-content">
                          <p className="display-number">00</p>
                          <p className="display-text">Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT GRID */}

          <div className="product-main">
            <h2 className="title">New Products</h2>

            <div className="product-grid">
              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product1}
                    alt="balls"
                    width="300"
                    className="product-img default"
                  />
                  <img
                    src={Product1r}
                    alt="balls"
                    width="300"
                    className="product-img hover"
                  />

                  <p className="showcase-badge">15%</p>

                  <div className="showcase-actions">
                    <button className="btn-action" onClick={addLikedItems}>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action" onClick={addToCart}>
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    toys
                  </a>

                  <a href="/#">
                    <h3 className="showcase-title">
                      assorted toy balls - 4 pcs
                    </h3>
                  </a>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={starOutline} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱50.00</p>
                    <del>₱75.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product2}
                    alt="special food bowl"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product2r}
                    alt="special food bowl"
                    className="product-img hover"
                    width="300"
                  />

                  <p className="showcase-badge angle black">sale</p>

                  <div className="showcase-actions">
                    <button className="btn-action" onClick={addLikedItems}>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action" onClick={addToCart}>
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    essentials
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      orange food bowl - large
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱200.00</p>
                    <del>₱230.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product7}
                    alt="dog toothbrush"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product7r}
                    alt="dog toothbrush"
                    className="product-img hover"
                    width="300"
                  />

                  <div className="showcase-actions">
                    <button className="btn-action" onClick={addLikedItems}>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action" onClick={addToCart}>
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    grooming
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      premium dog tooth brush - 2pcs
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={starOutline} />
                    <IonIcon icon={starOutline} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱300.00</p>
                    <del>₱320.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product3}
                    alt="SuelloDog leash"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product3r}
                    alt="SuelloDog leash"
                    className="product-img hover"
                    width="300"
                  />

                  <p className="showcase-badge angle pink">new</p>

                  <div className="showcase-actions">
                    <button className="btn-action" onClick={addLikedItems}>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action" onClick={addToCart}>
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    dog accessories
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      suellodog unleash the dog leash
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱1100.00</p>
                    <del>₱1300.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product4}
                    alt="Nutrients Emperor kibbles"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product4r}
                    alt="Nutrients Emperor kibbles"
                    className="product-img hover"
                    width="300"
                  />

                  <div className="showcase-actions">
                    <button className="btn-action" onClick={addLikedItems}>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action" onClick={addToCart}>
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    food
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      suellodog protein-king kibbles - 2kl
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱500.00</p>
                    <del>₱600.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product5}
                    alt="hair brush"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product5r}
                    alt="hair brush"
                    className="product-img hover"
                    width="300"
                  />

                  <p className="showcase-badge angle black">sale</p>

                  <div className="showcase-actions">
                    <button className="btn-action" onClick={addLikedItems}>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    grooming
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      mythril dog brush - large
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱150.00</p>
                    <del>₱170.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product6}
                    alt="assorted bowls"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product6r}
                    alt="assorted bowls"
                    className="product-img hover"
                    width="300"
                  />

                  <div className="showcase-actions">
                    <button classNameName="btn-action" onClick={addLikedItems}>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    essentials
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      assorted food bowls - 3pcs
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={starOutline} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱300.00</p>
                    <del>₱320.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product8}
                    alt="large dog harness"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product8r}
                    alt="large dog harness"
                    className="product-img hover"
                    width="300"
                  />

                  <p className="showcase-badge angle black">sale</p>

                  <div className="showcase-actions">
                    <button className="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    dog accessories
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      suellodog harness the power of darkness harness
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱2500.00</p>
                    <del>₱2630.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product9}
                    alt="automatic feeder"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product9r}
                    alt="automatic feeder"
                    className="product-img hover"
                    width="300"
                  />

                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    essentials
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      auto feeder - wifi and text capable
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱5000.00</p>
                    <del>₱6000.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product10}
                    alt="adjustable leash"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product10r}
                    alt="adjustable leash"
                    className="product-img hover"
                    width="300"
                  />

                  <p className="showcase-badge angle black">sale</p>

                  <div className="showcase-actions">
                    <button className="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    dog accessories
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      suellodog retractable leash with toothpick
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱1080.00</p>
                    <del>₱1200.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product11}
                    alt="medium dog harness"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product11r}
                    alt="medium dog harness"
                    className="product-img hover"
                    width="300"
                  />

                  <div className="showcase-actions">
                    <button className="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    dog accessories
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      suellodog harness the power of air harness
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱2300.00</p>
                    <del>₱2400.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <div className="showcase-banner">
                  <img
                    src={Product12}
                    alt="finger brush"
                    className="product-img default"
                    width="300"
                  />
                  <img
                    src={Product12r}
                    alt="finger brush"
                    className="product-img hover"
                    width="300"
                  />

                  <p className="showcase-badge angle black">sale</p>

                  <div className="showcase-actions">
                    <button className="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button className="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <a href="/#" className="showcase-category">
                    grooming
                  </a>

                  <h3>
                    <a href="/#" className="showcase-title">
                      Rubber Finger Brush - 1pc blue
                    </a>
                  </h3>

                  <div className="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={starOutline} />
                  </div>

                  <div className="price-box">
                    <p className="price">₱90.00</p>
                    <del>₱100.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
