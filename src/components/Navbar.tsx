import { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { successMsg } from "../services/ feedbackService";
import { getUser } from "../services/userService";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    biz: "",
  });

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/home");
    successMsg("you've logged out");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid container">
        <Link to="/">
          <h1 className="logoNav">BizCardz</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/about"
                style={{ padding: "8px 20px" }}
              >
                About
              </Link>
            </li>
            {user && sessionStorage.getItem("token") && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/bizCardz"
                  style={{ padding: "8px 20px" }}
                >
                  All BizCardz
                </Link>
              </li>
            )}
            {user && user.biz ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/myCardz"
                    style={{ padding: "8px 20px" }}
                  >
                    My BizCardz
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link addCardBtn"
                    aria-current="page"
                    to="/newCard"
                    style={{ padding: "8px 20px" }}
                  >
                    <i className="fa-solid fa-plus mx-1"></i>Add BizCard
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          {user && sessionStorage.getItem("token") && (
            <div className="d-flex gap-3">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle moreProfileNavbar"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={`https://ui-avatars.com/api/name=${user.name}?background=ffcb41&color=fff`}
                      width="35px"
                      className="mx-2 rounded"
                    />

                    {user.name}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={handleLogout}>
                        logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
