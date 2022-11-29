import { Fragment } from 'react';
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
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Banner />
              <Categories />
              <ProductSection />
              <TestimonialSection />
              <BlogSection />
              <AboutUs />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
