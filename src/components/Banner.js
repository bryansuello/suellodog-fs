import Banner1 from '../assets/banners/banner-1.png';
import Banner2 from '../assets/banners/banner-2.png';
import Banner3 from '../assets/banners/banner-3.png';

const Banner = () => {
  return (
    <div class="banner">
      <div class="container">
        <div class="slider-container has-scrollbar">
          <div class="slider-item">
            <img
              src={Banner3}
              alt="suellodog immortal dog food"
              class="banner-img"
            />
            <div class="banner-content">
              <p class="banner-subtitle">new arrival</p>
              <h2 class="banner-title">
                <span class="suellodog-color">SuelloDog</span> Immortal Dog
              </h2>
              <p class="banner-text">
                <b>20% off</b> on your first order
              </p>
              <a href="#shop-start" class="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div class="slider-item">
            <img src={Banner2} alt="dog costumes" class="banner-img" />
            <div class="banner-content">
              <p class="banner-subtitle">Trending items</p>
              <h2 class="banner-title">
                <span class="suellodog-color">suellodog</span> halloween
                costumes
              </h2>
              <p class="banner-text">
                starting at <b>&#8369;500</b>. Now available
              </p>
              <a href="#shop-start" class="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div class="slider-item">
            <img src={Banner1} alt="halloween sale" class="banner-img" />
            <div class="banner-content">
              <p class="banner-subtitle">Today's Deal</p>
              <h2 class="banner-title">
                <span class="suellodog-color">SuelloDog</span> Halloween Promo
              </h2>
              <p class="banner-text">
                free shipping on all orders above <b>&#8369;800</b>
              </p>
              <a href="#shop-start" class="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
