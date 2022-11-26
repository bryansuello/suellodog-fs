import KingDog from '../assets/banners/kingdog.png';
import PeeDog from '../assets/banners/peedog.png';
import HappyDog from '../assets/banners/happydog.png';
import TalkingDog from '../assets/banners/talkingdog.png';

const BlogSection = () => {
  return (
    <div class="blog">
      <div class="container">
        <div class="blog-container has-scrollbar">
          <div class="blog-card">
            <a href="#">
              <img
                id="blog"
                src={KingDog}
                alt="how to feed a dog like a king"
                width="300"
                class="blog-banner"
              />
            </a>

            <div class="blog-content">
              <a href="#" class="blog-category">
                Nutrition
              </a>

              <a href="#">
                <h3 class="blog-title">
                  How To Feed A Dog Like A King - Without Any Money
                </h3>
              </a>

              <p class="blog-meta">
                By <cite>Geralt Orivia</cite> /{' '}
                <time datetime="2022-04-06">Aug 26, 2022</time>
              </p>
            </div>
          </div>

          <div class="blog-card">
            <a href="#">
              <img
                src={PeeDog}
                alt="how to train your dog to pee in the toilet"
                class="blog-banner"
                width="300"
              />
            </a>

            <div class="blog-content">
              <a href="#" class="blog-category">
                Training
              </a>

              <h3>
                <a href="#" class="blog-title">
                  How To Train Your Dog To Pee In The Toilet
                </a>
              </h3>

              <p class="blog-meta">
                By <cite>John Snow</cite> /{' '}
                <time datetime="2022-02-26">Feb 26, 2022</time>
              </p>
            </div>
          </div>

          <div class="blog-card">
            <a href="#">
              <img
                src={HappyDog}
                alt="How Dogs Help Your Mental Health"
                class="blog-banner"
                width="300"
              />
            </a>

            <div class="blog-content">
              <a href="#" class="blog-category">
                Training
              </a>

              <h3>
                <a href="#" class="blog-title">
                  How Dogs Help Your Health
                </a>
              </h3>

              <p class="blog-meta">
                By <cite>Saturo Gogo</cite> /{' '}
                <time datetime="2022-11-10">Nov 10, 2021</time>
              </p>
            </div>
          </div>

          <div class="blog-card">
            <a href="#">
              <img
                src={TalkingDog}
                alt="Train Your Dog To Speak Like A Human"
                class="blog-banner"
                width="300"
              />
            </a>

            <div class="blog-content">
              <a href="#" class="blog-category">
                News
              </a>

              <h3>
                <a href="#" class="blog-title">
                  How To Train Your Dog To Speak Like A Human
                </a>
              </h3>

              <p class="blog-meta">
                By <cite>Suello, Bryan</cite> /{' '}
                <time datetime="2022-08-09">Aug 09, 2021</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
