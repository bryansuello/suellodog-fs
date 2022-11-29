import Banner1 from '../assets/banners/banner-1.png';
import Banner2 from '../assets/banners/banner-2.png';
import Banner3 from '../assets/banners/banner-3.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <img
              src={Banner3}
              alt="suellodog immortal dog food"
              className="banner-img"
            />
            <div className="banner-content">
              <p className="banner-subtitle">new arrival</p>
              <h2 className="banner-title">
                <span className="suellodog-color">SuelloDog</span> Immortal Dog
              </h2>
              <p className="banner-text">
                <b>20% off</b> on your first order
              </p>
              <a href="#shop-start" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <img src={Banner2} alt="dog costumes" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">Trending items</p>
              <h2 className="banner-title">
                <span className="suellodog-color">suellodog</span> halloween
                costumes
              </h2>
              <p className="banner-text">
                starting at <b>&#8369;500</b>. Now available
              </p>
              <a href="#shop-start" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div className="slider-item">
            <img src={Banner1} alt="halloween sale" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">Today's Deal</p>
              <h2 className="banner-title">
                <span className="suellodog-color">SuelloDog</span> Halloween
                Promo
              </h2>
              <p className="banner-text">
                free shipping on all orders above <b>&#8369;800</b>
              </p>
              <a href="#shop-start" className="banner-btn">
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
