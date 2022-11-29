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

const ProductSection = () => {
  return (
    <div class="product-container">
      <div class="container">
        {/* SIDEBAR */}

        <div class="sidebar  has-scrollbar" data-mobile-menu>
          <div class="sidebar-category">
            <div class="sidebar-top">
              <h2 class="sidebar-title">Category</h2>

              <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                <IonIcon icon={closeOutline} />
              </button>
            </div>

            <ul class="sidebar-menu-category-list">
              <li class="sidebar-menu-category">
                <button class="sidebar-accordion-menu" data-accordion-btn>
                  <div class="menu-title-flex">
                    <img
                      src={Dog6}
                      alt="dog care"
                      width="20"
                      height="20"
                      class="menu-title-img"
                    />

                    <p class="menu-title">Dog Care</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} className="add-icon" />
                    <IonIcon icon={removeOutline} className="remove-icon" />
                  </div>
                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>
                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Shampoo</p>
                      <data value="300" class="stock" title="Available Stock">
                        9
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Powder</p>
                      <data value="60" class="stock" title="Available Stock">
                        5
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Brush</p>
                      <data value="50" class="stock" title="Available Stock">
                        3
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Dog Nail Clippers</p>
                      <data value="87" class="stock" title="Available Stock">
                        2
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="sidebar-menu-category">
                <button class="sidebar-accordion-menu" data-accordion-btn>
                  <div class="menu-title-flex">
                    <img
                      src={Dog2}
                      alt="treats"
                      class="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p class="menu-title">Treats</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} className="add-icon" />
                    <IonIcon icon={removeOutline} className="remove-icon" />
                  </div>
                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>
                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">SuelloDog KingDog</p>
                      <data value="45" class="stock" title="Available Stock">
                        12
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Pedigree</p>
                      <data value="75" class="stock" title="Available Stock">
                        5
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Royal Canin</p>
                      <data value="35" class="stock" title="Available Stock">
                        9
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Alpo</p>
                      <data value="26" class="stock" title="Available Stock">
                        4
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="sidebar-menu-category">
                <button class="sidebar-accordion-menu" data-accordion-btn>
                  <div class="menu-title-flex">
                    <img
                      src={Dog4}
                      alt="food"
                      class="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p class="menu-title">Food</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} className="add-icon" />
                    <IonIcon icon={removeOutline} className="remove-icon" />
                  </div>
                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>
                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">SuelloDog KingDog Food</p>
                      <data value="46" class="stock" title="Available Stock">
                        20
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Wet Food</p>
                      <data value="73" class="stock" title="Available Stock">
                        7
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Dry Food</p>
                      <data value="61" class="stock" title="Available Stock">
                        9
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="sidebar-menu-category">
                <button class="sidebar-accordion-menu" data-accordion-btn>
                  <div class="menu-title-flex">
                    <img
                      src={Dog5}
                      alt="dog accessories"
                      class="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p class="menu-title">Dog Accessories</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} className="add-icon" />
                    <IonIcon icon={removeOutline} className="remove-icon" />
                  </div>
                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>
                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Collar</p>
                      <data value="12" class="stock" title="Available Stock">
                        22
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Leash</p>
                      <data value="60" class="stock" title="Available Stock">
                        30
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Harness</p>
                      <data value="50" class="stock" title="Available Stock">
                        9
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Dog Clothes</p>
                      <data value="87" class="stock" title="Available Stock">
                        21
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="sidebar-menu-category">
                <button class="sidebar-accordion-menu" data-accordion-btn>
                  <div class="menu-title-flex">
                    <img
                      src={Dog7}
                      alt="grooming"
                      class="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p class="menu-title">Grooming</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} className="add-icon" />
                    <IonIcon icon={removeOutline} className="remove-icon" />
                  </div>
                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>
                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Shampoo</p>
                      <data value="68" class="stock" title="Available Stock">
                        21
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Dog Comb</p>
                      <data value="46" class="stock" title="Available Stock">
                        9
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Tick & Flea Remedy</p>
                      <data value="79" class="stock" title="Available Stock">
                        8
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Dog Eardrops</p>
                      <data value="23" class="stock" title="Available Stock">
                        4
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="sidebar-menu-category">
                <button class="sidebar-accordion-menu" data-accordion-btn>
                  <div class="menu-title-flex">
                    <img
                      src={Dog9}
                      alt="dog health"
                      class="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p class="menu-title">Health</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} className="add-icon" />
                    <IonIcon icon={removeOutline} className="remove-icon" />
                  </div>
                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>
                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Dewormer</p>
                      <data value="50" class="stock" title="Available Stock">
                        9
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Vaccination</p>
                      <data value="48" class="stock" title="Available Stock">
                        4
                      </data>
                    </a>
                  </li>
                </ul>
              </li>

              <li class="sidebar-menu-category">
                <button class="sidebar-accordion-menu" data-accordion-btn>
                  <div class="menu-title-flex">
                    <img
                      src={Dog8}
                      alt="dog walks"
                      class="menu-title-img"
                      width="20"
                      height="20"
                    />

                    <p class="menu-title">Dog Walks</p>
                  </div>

                  <div>
                    <IonIcon icon={addOutline} className="add-icon" />
                    <IonIcon icon={removeOutline} className="remove-icon" />
                  </div>
                </button>

                <ul class="sidebar-submenu-category-list" data-accordion>
                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Leash</p>
                      <data value="62" class="stock" title="Available Stock">
                        19
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Harness</p>
                      <data value="35" class="stock" title="Available Stock">
                        18
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Poop Bag</p>
                      <data value="80" class="stock" title="Available Stock">
                        6
                      </data>
                    </a>
                  </li>

                  <li class="sidebar-submenu-category">
                    <a href="/#" class="sidebar-submenu-title">
                      <p class="product-name">Dog Lead</p>
                      <data value="75" class="stock" title="Available Stock">
                        9
                      </data>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="product-showcase">
            <h3 class="showcase-heading">best sellers</h3>

            <div class="showcase-wrapper">
              <div class="showcase-container">
                <div class="showcase">
                  <a href="/#" class="showcase-img-box">
                    <img
                      src={Product3}
                      alt="dog leash"
                      width="75"
                      height="75"
                      class="showcase-img"
                    />
                  </a>

                  <div class="showcase-content">
                    <a href="/#">
                      <h4 class="showcase-title">suello dog unleash</h4>
                    </a>

                    <div class="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <div class="price-box">
                      <del>₱1300</del>
                      <p class="price">₱1100</p>
                    </div>
                  </div>
                </div>

                <div class="showcase">
                  <a href="/#" class="showcase-img-box">
                    <img
                      src={Product11}
                      alt="dog harness"
                      class="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div class="showcase-content">
                    <a href="/#">
                      <h4 class="showcase-title">
                        suellodog harness the power of air
                      </h4>
                    </a>
                    <div class="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <div class="price-box">
                      <del>₱2400</del>
                      <p class="price">₱2300</p>
                    </div>
                  </div>
                </div>

                <div class="showcase">
                  <a href="/#" class="showcase-img-box">
                    <img
                      src={Product2}
                      alt="dog bowl"
                      class="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div class="showcase-content">
                    <a href="/#">
                      <h4 class="showcase-title">orange food bowl</h4>
                    </a>
                    <div class="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <div class="price-box">
                      <del>₱230.00</del>
                      <p class="price">₱200.00</p>
                    </div>
                  </div>
                </div>

                <div class="showcase">
                  <a href="/#" class="showcase-img-box">
                    <img
                      src={Product8}
                      alt="harness"
                      class="showcase-img"
                      width="75"
                      height="75"
                    />
                  </a>

                  <div class="showcase-content">
                    <a href="/#">
                      <h4 class="showcase-title">
                        suelldog harness the power of darkness
                      </h4>
                    </a>
                    <div class="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <div class="price-box">
                      <del>₱2630</del>
                      <p class="price">₱2500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-box">
          {/* PRODUCT MINIMAL */}

          <div class="product-minimal">
            <div class="product-showcase">
              <h2 id="shop-start" class="title">
                New Arrivals
              </h2>

              <div class="showcase-wrapper has-scrollbar">
                <div class="showcase-container">
                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product13}
                        alt="suellodog medium dog harness"
                        width="70"
                        class="showcase-img"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">
                          suellodog harness the power of rock harness
                        </h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        dog accessories
                      </a>

                      <div class="price-box">
                        <p class="price">₱2100</p>
                        <del>₱2200</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product14}
                        alt="suellodog puppy harness"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">
                          suellodog puppy harness - red
                        </h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        dog accessories
                      </a>

                      <div class="price-box">
                        <p class="price">₱1000</p>
                        <del>₱1100</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product15}
                        alt="automatic dog feeder"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">
                          suellodog automatic feeder medium
                        </h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        essentials
                      </a>

                      <div class="price-box">
                        <p class="price">₱3000</p>
                        <del>₱4000</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product16}
                        alt="suellodog ladydog harness"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">
                          suellodog harness the power of ladies dog harness
                        </h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        dog accessories
                      </a>

                      <div class="price-box">
                        <p class="price">₱3000</p>
                        <del>₱3100</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="product-showcase">
              <h2 class="title">Trending</h2>

              <div class="showcase-wrapper  has-scrollbar">
                <div class="showcase-container">
                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product17}
                        alt="dog shampoo"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">super dog shampoo</h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        grooming
                      </a>

                      <div class="price-box">
                        <p class="price">₱120</p>
                        <del>₱150</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product18}
                        alt="dog shampoo"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">ultimate dog shampoo</h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        grooming
                      </a>

                      <div class="price-box">
                        <p class="price">₱150</p>
                        <del>₱160</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product19}
                        alt="water bowl"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">portable water bowl</h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        essentials
                      </a>

                      <div class="price-box">
                        <p class="price">₱94.00</p>
                        <del>₱120.00</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product20}
                        alt="portable water bottle"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">
                          dog water bottle portable
                        </h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        essentials
                      </a>

                      <div class="price-box">
                        <p class="price">₱300</p>
                        <del>₱450</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="product-showcase">
              <h2 class="title">Top Rated</h2>

              <div class="showcase-wrapper  has-scrollbar">
                <div class="showcase-container">
                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product21}
                        alt="long dog leash - premium"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">long dog leash - premium</h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        dog accessories
                      </a>

                      <div class="price-box">
                        <p class="price">₱300</p>
                        <del>₱350</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product22}
                        alt="dog collar"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">suelldog green collar</h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        dog accessories
                      </a>

                      <div class="price-box">
                        <p class="price">₱100</p>
                        <del>₱120</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product24}
                        alt="spiky dog collar"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">dog collar with spikes</h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        dog accessories
                      </a>

                      <div class="price-box">
                        <p class="price">₱300</p>
                        <del>₱500</del>
                      </div>
                    </div>
                  </div>

                  <div class="showcase">
                    <a href="/#" class="showcase-img-box">
                      <img
                        src={Product25}
                        alt="dog toy rope"
                        class="showcase-img"
                        width="70"
                      />
                    </a>

                    <div class="showcase-content">
                      <a href="/#">
                        <h4 class="showcase-title">rope toy</h4>
                      </a>

                      <a href="/#" class="showcase-category">
                        toys
                      </a>

                      <div class="price-box">
                        <p class="price">₱50</p>
                        <del>₱100</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- featured product --> */}

          <div class="product-featured">
            <h2 class="title">featured product</h2>

            <div class="showcase-wrapper has-scrollbar">
              <div class="showcase-container">
                <div class="showcase">
                  <div class="showcase-banner">
                    <img
                      src={SuelloKingDog}
                      alt="suellodog kingdog treats"
                      class="showcase-img"
                    />
                  </div>

                  <div class="showcase-content">
                    <div class="showcase-rating">
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                      <IonIcon icon={star} />
                    </div>

                    <a href="#">
                      <h3 class="showcase-title">
                        suellodog kingdog premium treats - 100g
                      </h3>
                    </a>

                    <p class="showcase-desc">dog treats fit for a kingdog</p>

                    <div class="price-box">
                      <p class="price">₱900.00</p>

                      <del>₱1000.00</del>
                    </div>

                    <button class="add-cart-btn">add to cart</button>

                    <div class="showcase-status">
                      <div class="wrapper">
                        <p>
                          already sold: <b>30</b>
                        </p>

                        <p>
                          available: <b>40</b>
                        </p>
                      </div>

                      <div class="showcase-status-bar"></div>
                    </div>

                    <div class="countdown-box">
                      <p class="countdown-desc">Hurry Up! Offer ends in:</p>

                      <div class="countdown">
                        <div class="countdown-content">
                          <p class="display-number">5</p>

                          <p class="display-text">Days</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">24</p>
                          <p class="display-text">Hours</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">59</p>
                          <p class="display-text">Min</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">00</p>
                          <p class="display-text">Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT GRID */}

          <div class="product-main">
            <h2 class="title">New Products</h2>

            <div class="product-grid">
              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product1}
                    alt="balls"
                    width="300"
                    class="product-img default"
                  />
                  <img
                    src={Product1r}
                    alt="balls"
                    width="300"
                    class="product-img hover"
                  />

                  <p class="showcase-badge">15%</p>

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    toys
                  </a>

                  <a href="/#">
                    <h3 class="showcase-title">assorted toy balls - 4 pcs</h3>
                  </a>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={starOutline} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱50.00</p>
                    <del>₱75.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product2}
                    alt="special food bowl"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product2r}
                    alt="special food bowl"
                    class="product-img hover"
                    width="300"
                  />

                  <p class="showcase-badge angle black">sale</p>

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    essentials
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      orange food bowl - large
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱200.00</p>
                    <del>₱230.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product7}
                    alt="dog toothbrush"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product7r}
                    alt="dog toothbrush"
                    class="product-img hover"
                    width="300"
                  />

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    grooming
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      premium dog tooth brush - 2pcs
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={starOutline} />
                    <IonIcon icon={starOutline} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱300.00</p>
                    <del>₱320.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product3}
                    alt="SuelloDog leash"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product3r}
                    alt="SuelloDog leash"
                    class="product-img hover"
                    width="300"
                  />

                  <p class="showcase-badge angle pink">new</p>

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    dog accessories
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      suellodog unleash the dog leash
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱1100.00</p>
                    <del>₱1300.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product4}
                    alt="Nutrients Emperor kibbles"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product4r}
                    alt="Nutrients Emperor kibbles"
                    class="product-img hover"
                    width="300"
                  />

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    food
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      suellodog protein-king kibbles - 2kl
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱500.00</p>
                    <del>₱600.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product5}
                    alt="hair brush"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product5r}
                    alt="hair brush"
                    class="product-img hover"
                    width="300"
                  />

                  <p class="showcase-badge angle black">sale</p>

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    grooming
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      mythril dog brush - large
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱150.00</p>
                    <del>₱170.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product6}
                    alt="assorted bowls"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product6r}
                    alt="assorted bowls"
                    class="product-img hover"
                    width="300"
                  />

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    essentials
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      assorted food bowls - 3pcs
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={starOutline} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱300.00</p>
                    <del>₱320.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product8}
                    alt="large dog harness"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product8r}
                    alt="large dog harness"
                    class="product-img hover"
                    width="300"
                  />

                  <p class="showcase-badge angle black">sale</p>

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    dog accessories
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      suellodog harness the power of darkness harness
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱2500.00</p>
                    <del>₱2630.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product9}
                    alt="automatic feeder"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product9r}
                    alt="automatic feeder"
                    class="product-img hover"
                    width="300"
                  />

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    essentials
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      auto feeder - wifi and text capable
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱5000.00</p>
                    <del>₱6000.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product10}
                    alt="adjustable leash"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product10r}
                    alt="adjustable leash"
                    class="product-img hover"
                    width="300"
                  />

                  <p class="showcase-badge angle black">sale</p>

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    dog accessories
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      suellodog retractable leash with toothpick
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱1080.00</p>
                    <del>₱1200.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product11}
                    alt="medium dog harness"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product11r}
                    alt="medium dog harness"
                    class="product-img hover"
                    width="300"
                  />

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    dog accessories
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      suellodog harness the power of air harness
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱2300.00</p>
                    <del>₱2400.00</del>
                  </div>
                </div>
              </div>

              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={Product12}
                    alt="finger brush"
                    class="product-img default"
                    width="300"
                  />
                  <img
                    src={Product12r}
                    alt="finger brush"
                    class="product-img hover"
                    width="300"
                  />

                  <p class="showcase-badge angle black">sale</p>

                  <div class="showcase-actions">
                    <button class="btn-action">
                      <IonIcon icon={heartOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={eyeOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={repeatOutline} />
                    </button>

                    <button class="btn-action">
                      <IonIcon icon={bagAddOutline} />
                    </button>
                  </div>
                </div>

                <div class="showcase-content">
                  <a href="/#" class="showcase-category">
                    grooming
                  </a>

                  <h3>
                    <a href="/#" class="showcase-title">
                      Rubber Finger Brush - 1pc blue
                    </a>
                  </h3>

                  <div class="showcase-rating">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={starOutline} />
                  </div>

                  <div class="price-box">
                    <p class="price">₱90.00</p>
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
