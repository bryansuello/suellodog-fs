import Dog7 from '../assets/icons/dog7.svg';
import Dog5 from '../assets/icons/dog5.svg';
import Dog1 from '../assets/icons/dog1.svg';
import Dog4 from '../assets/icons/dog4.svg';

const Categories = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img src={Dog7} alt="grooming" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Grooming</h3>

                <p className="category-item-amount">(12)</p>
              </div>

              <a href="/#" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={Dog5} alt="dog accessories" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">dog accessories</h3>

                <p className="category-item-amount">(19)</p>
              </div>

              <a href="/#" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={Dog4} alt="food" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Food</h3>

                <p className="category-item-amount">(16)</p>
              </div>

              <a href="/#" className="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={Dog1} alt="training" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Training</h3>

                <p className="category-item-amount">(23)</p>
              </div>

              <a href="/#" className="category-btn">
                Show all
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
