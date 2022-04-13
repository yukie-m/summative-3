import React from "react";
import { useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import "../css/nav.scss";
import { IoCreateSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineHistory } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import Modal from "react-modal";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const onGoBack = (event) => {
    navigate(-1);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <header className="">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/">
            {" "}
            <img src="../images/Logo.png" alt="logo" />
          </Link>
        </div>
        {user ? (
          <div className="icons-right">
            <div
              onClick={() => {
                navigate("/create-event");
              }}
            >
              <IoCreateSharp size={30} className="icon" />
            </div>
            <div>
              <MdAccountCircle
                size={30}
                className="icon"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
              style={{
                overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(240, 240, 240, 0.75)",
                },
                content: {
                  position: "absolute",
                  top: "0",
                  left: "5rem",
                  right: "0",
                  bottom: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderLeft: "1px solid #d9d9d9",
                  background: "#fff",
                  overflow: "auto",
                  WebkitOverflowScrolling: "touch",
                  borderRadius: "4px",
                  outline: "none",
                  padding: "20px",
                },
              }}
            >
              <div className="modal-account">
                <div>
                  <div>
                    <IoCloseOutline
                      size={30}
                      className="icon"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    />
                  </div>
                  <div>
                    <MdAccountCircle size={60} className="account-icon" />
                    {console.log(user)}
                    <h5>{user.name}</h5>
                    <hr />
                  </div>
                </div>

                <div
                  className="row"
                  onClick={() => {
                    navigate("/create-event");
                  }}
                >
                  <IoCreateSharp size={30} className="icon" />
                  <h5>Create Event</h5>
                </div>

                <div
                  className="row"
                  onClick={() => {
                    navigate("/delete-event");
                  }}
                >
                  <AiOutlineUnorderedList size={30} className="icon" />
                  <h5>Your Events</h5>
                </div>

                <div className="row">
                  <IoBookmarkOutline size={30} className="icon" />
                  <h5>Bookmark</h5>
                </div>

                <div className="row">
                  <AiOutlineHistory size={30} className="icon" />
                  <h5>History</h5>
                </div>

                <div className="row">
                  <AiFillSetting size={30} className="icon" />
                  <h5>Settings</h5>
                </div>
                <ul>
                  <li>
                    <button className="btn" onClick={onLogout}>
                      <FaSignOutAlt /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </Modal>
          </div>
        ) : (
          <ul className="flex gap-10 items-center">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
