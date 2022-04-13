import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import "../css/signup.scss";

import { AiFillEye } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Register() {
  const thumb = chooseThumb();
  console.log(thumb);
  function chooseThumb() {
    const images = ["blue", "green", "pink"];
    const randInt = Math.floor(Math.random() * 3);
    return images[randInt];
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    thumb: thumb,
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
        thumb,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="wrapper">
      <section className="heading">
        <h1>Register</h1>
      </section>
      <div className="login-link">
        <p>Already have an account?</p>
        <h3>Log in</h3>
      </div>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
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
      </section>
    </div>
  );
}

export default Register;
