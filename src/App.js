import { Fragment } from 'react';
import './App.css';
import Header from './components/Nav';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <BlogSection />
      <Footer />
    </Fragment>
  );
}

export default App;

// TODO:
//   * banners to Xmas Promo. Get your ps back
//   * full sass vars from css, remove all the var() in 3k+ lines of code
//   * implement the movie app's search functionality
