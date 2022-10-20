import { FunctionComponent } from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import "../index.css";
import Register from "./Register";
import Login from "./Login";
import Navbar from "./Navbar";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className="container">
          <div className="welcomeMsg">
            <h1 className="my-1 fs-3">
              Join the <span>dozens of businesses</span> that benefit from a
              personal & virtually business card
            </h1>
            <p className="text-muted">
              Make your own digital business card for a professional first
              impression, and let other businesses all the ways to reach you -
              <br />
              <strong>from anywhere, at any time and always updated.</strong>
            </p>
          </div>
          <MouseParallaxContainer
            className="d-flex align-items-end float-end justify-content-between parallax"
            containerStyles={{
              height: "449px",
              width: "100%",
              backgroundSize: "1180px",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url("images/sky.png")`,
              backgroundPosition: "right",
            }}
          >
            <div className="d-flex align-items-start flex-column h-100">
              <div className="mb-auto fullWidth">
                <h1 className="my-5">
                  Join the <span>dozens of businesses</span> that benefit from a
                  personal & virtually business card
                </h1>
                <p className="my-3 text-muted fs-5">
                  Make your own digital business card for a professional first
                  impression, and
                  <br /> let other businesses all the ways to reach you - <br />
                  <strong>
                    from anywhere, at any time and always updated.
                  </strong>
                </p>
              </div>
              {!sessionStorage.getItem("token") && (
                <div>
                  <ul className="nav nav-tabs fullWidth" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active registerAsOwerBtn"
                        data-bs-toggle="tab"
                        href="#BusinessOwer"
                        aria-selected="false"
                        role="tab"
                      >
                        Register Now
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link logInBtn"
                        data-bs-toggle="tab"
                        href="#logIn"
                        aria-selected="true"
                        role="tab"
                      >
                        Log in
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <MouseParallaxChild factorX={-0.2} factorY={0}>
              <img src="images/tree.png" width="70" className="parallaxPic" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.05} factorY={0}>
              <img
                src="images/Building4.png"
                width="135"
                className="parallaxPic"
              />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.08} factorY={0}>
              <img
                src="images/Building3.png"
                width="135"
                className="parallaxPic"
              />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.05} factorY={0}>
              <img
                src="images/Building2.png"
                width="135"
                className="parallaxPic"
              />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={-0.02} factorY={0}>
              <img
                src="images/Building1.png"
                width="135"
                className="parallaxPic"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>

        {!sessionStorage.getItem("token") && (
          <div className="container">
            <div className="blockhome p-0">
              <ul className="welcomeMsg nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active registerAsOwerBtn"
                    data-bs-toggle="tab"
                    href="#BusinessOwer"
                    aria-selected="false"
                    role="tab"
                  >
                    Register Now
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link logInBtn"
                    data-bs-toggle="tab"
                    href="#logIn"
                    aria-selected="true"
                    role="tab"
                  >
                    Log in
                  </a>
                </li>
              </ul>
              <div id="myTabContent" className="tab-content p-2">
                <div
                  className="tab-pane fade active show"
                  id="BusinessOwer"
                  role="tabpanel"
                >
                  <Register />
                </div>
                <div className="tab-pane fade show" id="logIn" role="tabpanel">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        )}

        {sessionStorage.getItem("token") && (
          <>
            <div className="container">
              <div className="blockhome d-flex justify-content-center align-items-center text-warning">
                <h2>
                  You are logged In
                  <i className="fa-regular fa-thumbs-up mx-3"></i>
                </h2>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
