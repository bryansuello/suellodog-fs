import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Nav';
import Banner from './components/Banner';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import BlogSection from './components/BlogSection';
import TestimonialSection from './components/TestimonialSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
// import ChatToTop from './components/ChatToTop';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import CartPage from './components/pages/Cart/CartPage';
import LikedPage from './components/pages/LikedPage/LikedPage';
import { Route, Routes } from 'react-router';

function App() {
  const [likedItems, setLikedItems] = useState(0);
  const addLikedItems = () => {
    setLikedItems(count => count + 1);
  };
  const removeLikedItems = () => {
    setLikedItems(count => count - 1);
  };

  const [cartItems, setCartItems] = useState(0);
  const addToCart = () => {
    setCartItems(count => count + 1);
  };

  return (
    <Fragment>
      <Header likedItems={likedItems} cartItems={cartItems} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Banner />
              <Categories />
              <ProductSection
                likedItems={likedItems}
                addLikedItems={addLikedItems}
                removeLikedItems={removeLikedItems}
                cartItems={cartItems}
                addToCart={addToCart}
              />
              <TestimonialSection />
              <BlogSection />
              <AboutUs />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/likeditems" element={<LikedPage />} />
      </Routes>
      <Footer />
      {/* <ChatToTop /> */}
    </Fragment>
  );
}

export default App;

// TODO:
//   * banners to Xmas Promo. Get your ps back
//   * full sass vars from css, remove all the var() in 3k+ lines of code
//   * implement the movie app's search functionality
