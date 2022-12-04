import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import registerImg from '../../assets/banners/banner-2.png';
import logo from '../../assets/icons/nav-logo-g.png';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords not the same');
    } else {
      console.log(password, confirmPassword);
    }
  };

  // const [data, setData] = useState({
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   password: '',
  // });

  // const handleChange = e => {
  //   setData({ ...data, [e.target.value]: e.target.value });
  //   console.log(data);
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
            <form onSubmit={handleChange}>
              <div className="input-group">
                <input
                  type="text"
                  name="first_name"
                  value={firstName}
                  onChange={e => {
                    setFirstName(e.target.value);
                  }}
                  id="fname"
                  placeholder="First Name"
                  // onChange={handleChange}
                  // value={data.first_name}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="last_name"
                  value={lastName}
                  onChange={e => {
                    setLastName(e.target.value);
                  }}
                  id="lname"
                  placeholder="Last Name"
                  // onChange={handleChange}
                  // value={data.last_name}
                />
              </div>
              <div className="input-group">
                <input
                  type="Email"
                  name="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  id="email1"
                  placeholder="Email"
                  // onChange={handleChange}
                  // value={data.email}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  id="pwd1"
                  placeholder="Password"
                  // onChange={handleChange}
                  // value={data.password}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={e => {
                    setConfirmPassword(e.target.value);
                  }}
                  name="password"
                  id="pwd2"
                  placeholder="Confirm Password"
                  // onChange={handleChange}
                  // value={data.password}
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
