import MrBond from '../assets/banners/mrbond.png';
import Quotes from '../assets/icons/quotes-gold.svg';
import AdoptBanner from '../assets/banners/adopt-banner.png';
import { IonIcon } from '@ionic/react';
import {
  arrowUndoOutline,
  boatOutline,
  callOutline,
  rocketOutline,
  ticketOutline,
} from 'ionicons/icons';

const TestimonialSection = () => {
  return (
    <div>
      <div class="container">
        <div class="testimonials-box">
          {/* TESTIMONIALS */}

          <div class="testimonial">
            <h2 class="title">testimonial</h2>

            <div class="testimonial-card">
              <img src={MrBond} alt="mr bond" class="testimonial-banner" />

              <p class="testimonial-name">Jimmy M. Bond</p>

              <p class="testimonial-title">CEO of Espionage Inc</p>

              <img
                src={Quotes}
                alt="quotation"
                class="quotation-img"
                width="26"
              />

              <p class="testimonial-desc">
                SuelloDog made my life easier. A one-stop shop for everything a
                dog-owner needs.
              </p>
            </div>
          </div>

          {/* CTA */}

          <div class="cta-container">
            <img src={AdoptBanner} alt="adopt a dog" class="cta-banner" />

            <a href="#" class="cta-content">
              <h2 class="cta-title">Adopt A Rescue Dog</h2>

              <p class="cta-text">Free Dog Adoption Assitance </p>

              <button class="cta-btn">Adopt now</button>
            </a>
          </div>

          {/* SERVICE */}

          <div class="service">
            <h2 class="title">Our Services</h2>

            <div class="service-container">
              <a href="#" class="service-item">
                <div class="service-icon">
                  <IonIcon icon={boatOutline} />
                </div>

                <div class="service-content">
                  <h3 class="service-title">Free Delivery</h3>
                  <p class="service-desc">For Orders Over ₱1000</p>
                </div>
              </a>

              <a href="#" class="service-item">
                <div class="service-icon">
                  <IonIcon icon={rocketOutline} />
                </div>

                <div class="service-content">
                  <h3 class="service-title">Same Day Delivery</h3>
                  <p class="service-desc">Within Cebu Only</p>
                </div>
              </a>

              <a href="#" class="service-item">
                <div class="service-icon">
                  <IonIcon icon={callOutline} />
                </div>

                <div class="service-content">
                  <h3 class="service-title">Online Support</h3>
                  <p class="service-desc">24/7 Chat Support</p>
                </div>
              </a>

              <a href="#" class="service-item">
                <div class="service-icon">
                  <IonIcon icon={arrowUndoOutline} />
                </div>

                <div class="service-content">
                  <h3 class="service-title">Return Policy</h3>
                  <p class="service-desc">Easy Return Process</p>
                </div>
              </a>

              <a href="#" class="service-item">
                <div class="service-icon">
                  <IonIcon icon={ticketOutline} />
                </div>

                <div class="service-content">
                  <h3 class="service-title">Loyalty Discounts</h3>
                  <p class="service-desc">Up To 50% Off</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
