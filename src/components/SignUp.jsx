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
          <form onSubmit={onSubmit}>
            <label>
              <input
                type="text"
                defaultValue={"TEST"}
                placeholder="Username"
                // ref={usernameInputRef}
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
                // ref={passwordInputRef}
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
          <span></span>
          or
          <span></span>
        </div>
        <div className="icons">
          <AiFillFacebook size={30} color="#3b5998" />
          <AiFillLinkedin size={30} color="#0e76a8" />
          <AiOutlineTwitter size={30} color="#00acee" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
