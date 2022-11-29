import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import registerImg from '../../assets/banners/banner-2.png';
import logo from '../../assets/icons/nav-logo-g.png';

const Signup = () => {
  // const [email, setemail] = useState('');
  // const [Fusername, setFusername] = useState('');
  // const [Susername, setSusername] = useState('');
  // const [pwd1, setpwd1] = useState('');
  // const [pwd2, setpwd2] = useState('');

  // const handelsubmit = e => {
  //   e.preventDefault();
  // };

  return (
    <div className="main-Register">
      <div className="left-side">
        <div className="header">
          <img src={logo} id="logo-img" alt="" srcset="" />
        </div>
        <div className="body">
          <img src={registerImg} id="reg-img" alt="" srcset="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          tempore ipsam enim, aliquid perspiciatis dignissimos repudiandae.
          Ipsum, eius. Architecto itaque, aspernatur assumenda, tenetur, numquam
          adipisci sint repudiandae et quas cumque voluptatum voluptates earum
          lorem.
        </p>
      </div>
      <div className="right-side">
        <div className="top-right">
          <p>
            Already have an Account?
            <Link id="Links-signin" to="/login">
              Sign In
            </Link>
          </p>
        </div>
        <div className="body-right">
          <div className="container">
            <h1>Sign Up</h1>
            {/* <form onSubmit={handelsubmit}> */}
            <form>
              <div className="input-group">
                <h5> First Name</h5>
                <input
                  type="text"
                  name="Fname"
                  // value={Fusername}
                  // onChange={e => {
                  //   setFusername(e.target.value);
                  // }}
                  id="fname"
                />
              </div>
              <div className="input-group">
                <h5> Last Name</h5>
                <input
                  type="text"
                  name="lname"
                  // value={Susername}
                  // onChange={e => {
                  //   setSusername(e.target.value);
                  // }}
                  id="lname"
                />
              </div>
              <div className="input-group">
                <h5> Email</h5>
                <input
                  type="Email"
                  name="email"
                  // value={email}
                  // onChange={e => {
                  //   setemail(e.target.value);
                  // }}
                  id="email1"
                />
              </div>
              <div className="input-group">
                <h5> Password</h5>
                <input
                  type="password"
                  // value={pwd1}
                  // onChange={e => {
                  //   setpwd1(e.target.value);
                  // }}
                  name="pwd"
                  id="pwd1"
                />
              </div>
              <div className="input-group">
                <h5> Confirm Password</h5>
                <input
                  type="password"
                  // value={pwd2}
                  // onChange={e => {
                  //   setpwd2(e.target.value);
                  // }}
                  name="pwd"
                  id="pwd2"
                />
              </div>
              <input type="submit" id="sbtn" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
