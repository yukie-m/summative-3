import React from "react";
import "../css/signup.scss";

import { AiFillEye } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function SignUp() {
  return (
    <>
      <div className="wrapper">
        <h1>My Account</h1>
        <div className="signin-wrap">
          <form>
            <label>
              <input
                type="text"
                defaultValue={"TEST"}
                placeholder="Username"
                required
              />
            </label>
            <select name="acount-thumb" id="account-thumb">
              <option value="">Choose your avatar</option>
              <option value="pink.jpg">pink</option>
              <option value="green.jpg">green</option>
              <option value="blue.jpg">blue</option>
            </select>
            <label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </label>
            <div className="checkbox">
              <input type="checkbox" />
              <p>Keep me signed in</p>
            </div>
            <span className="btn">
              <button role="submit">Sign up</button>
            </span>
          </form>
        </div>
        <div className="line">
          <div className="line-left"></div>
          <p>or</p>
          <div className="line-right"></div>
        </div>
        <div className="icons">
          <AiFillFacebook size={35} color="#3b5998" className="sns-icon" />
          <AiFillLinkedin size={35} color="#0e76a8" className="sns-icon" />
          <AiOutlineTwitter size={35} color="#00acee" className="sns-icon" />
        </div>
        <div className="login-link">
          <p>Already have an account?</p>
          <h3>Log in</h3>
        </div>
      </div>
    </>
  );
}

export default SignUp;
