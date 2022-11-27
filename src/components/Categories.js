import Dog7 from '../assets/icons/dog7.svg';
import Dog5 from '../assets/icons/dog5.svg';
import Dog1 from '../assets/icons/dog1.svg';
import Dog4 from '../assets/icons/dog4.svg';

const Categories = () => {
  return (
    <div class="category">
      <div class="container">
        <div class="category-item-container has-scrollbar">
          <div class="category-item">
            <div class="category-img-box">
              <img src={Dog7} alt="grooming" width="30" />
            </div>

            <div class="category-content-box">
              <div class="category-content-flex">
                <h3 class="category-item-title">Grooming</h3>

                <p class="category-item-amount">(12)</p>
              </div>

              <a href="/#" class="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div class="category-item">
            <div class="category-img-box">
              <img src={Dog5} alt="dog accessories" width="30" />
            </div>

            <div class="category-content-box">
              <div class="category-content-flex">
                <h3 class="category-item-title">dog accessories</h3>

                <p class="category-item-amount">(19)</p>
              </div>

              <a href="/#" class="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div class="category-item">
            <div class="category-img-box">
              <img src={Dog4} alt="food" width="30" />
            </div>

            <div class="category-content-box">
              <div class="category-content-flex">
                <h3 class="category-item-title">Food</h3>

                <p class="category-item-amount">(16)</p>
              </div>

              <a href="/#" class="category-btn">
                Show all
              </a>
            </div>
          </div>

          <div class="category-item">
            <div class="category-img-box">
              <img src={Dog1} alt="training" width="30" />
            </div>

            <div class="category-content-box">
              <div class="category-content-flex">
                <h3 class="category-item-title">Training</h3>

                <p class="category-item-amount">(23)</p>
              </div>

              <a href="/#" class="category-btn">
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
