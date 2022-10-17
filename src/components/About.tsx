import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Tilt from "react-parallax-tilt";
import Marquee from "react-fast-marquee";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Navbar />
      <div className="container AboutBg">
        <div className="row">
          <div className="col order-lg-1 col-lg-6  col-md-12 order-sm-2 my-2">
            <h1>
              <span>Create digital business cards</span> and share them with
              anyone, near or far.
            </h1>

            <div className="my-4">
              <img
                src="/images/quickIcon.png"
                width="60"
                style={{ float: "left", marginRight: "20px" }}
              />
              <h4 className="mb-0 p-0 lh-1">Quick & Easy Access</h4>
              <p className="m-0 p-0 lh-0 text-muted aboutText">
                From your mobile, computer or even tablet!
                <br />
                BizCardz available wherever you choose
              </p>
            </div>

            <div className="my-4">
              <img
                src="/images/FirstImpressionIcon.png"
                width="60"
                style={{ float: "left", marginRight: "20px" }}
              />
              <h4 className="mb-0 p-0 lh-1">Professional First Impression</h4>
              <p className="m-0 p-0 lh-0 text-muted">
                Stand out from the crowd since not
                <br /> everyone is using digital business cards.
              </p>
            </div>

            <div className="my-4">
              <img
                src="/images/EnvironmentIcon.png"
                width="60"
                style={{ float: "left", marginRight: "20px" }}
              />
              <h4 className="mb-0 p-0 lh-1">Environment Friendly</h4>
              <p className="m-0 p-0 lh-0 text-muted">
                As you don’t print your business cards,
                <br /> you don’t have to use papers./watch
              </p>
            </div>

            <div className="my-4">
              <img
                src="/images/moreCardsIcon.png"
                width="60"
                style={{ float: "left", marginRight: "20px" }}
              />
              <h4 className="mb-0 p-0 lh-1">Ability To Create More Cards</h4>
              <p className="m-0 p-0 lh-0 text-muted">
                You have the ability to create more than one card for your
                business under a single account
              </p>
            </div>
          </div>
          <div className="col cardViewBg d-flex justify-content-center align-items-center order-lg-2 order-sm-1">
            <Tilt
              className="track-on-window"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.75}
              glarePosition="all"
              scale={1.02}
              trackOnWindow={true}
            >
              <img
                src="/images/cardView.png"
                width="350"
                className="imagecCardView"
              />
            </Tilt>
          </div>
        </div>
      </div>

      <div className="my-3 p-4" style={{ backgroundColor: "rgb(205,221,228)" }}>
        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={true}
          gradientColor={[205, 221, 228]}
        >
          <img className=" logos" src="images/NikeLogo.png" width="100" />
          <img className=" logos" src="images/TeslaLogo.png" width="180" />
          <img className=" logos" src="images/starbucks.png" width="70" />
          <img className=" logos" src="images/AppleLogo.png" width="70" />
          <img className=" logos" src="images/VolkswagenLogo.png" width="70" />
          <img className=" logos" src="images/AmazonLogo.png" width="120" />
          <img className=" logos" src="images/McDonalds.png" width="100" />
          <img className=" logos" src="images/VisaLogo.png" width="100" />
          <img className=" logos" src="images/GoogleLogo.png" width="100" />
          <img className=" logos" src="images/ebayLogo.png" width="100" />
          <img className=" logos" src="images/FedExLogo.png" width="100" />
        </Marquee>
      </div>

      <div className="container my-5">
        <h1 className="text-center my-3">
          <span>About this Project</span>
        </h1>
        <div className="row">
          <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center my-3">
            <img src="images/me.png" width="200" />
            <div>
              <button
                className="social"
                onClick={() => openInNewTab("https://github.com/ShahafRSeza")}
              >
                <i className="fa-brands fa-square-github"></i>
              </button>
              <button
                className="social"
                onClick={() =>
                  openInNewTab("https://www.linkedin.com/in/shahafseza/")
                }
              >
                <i className="fa-brands fa-linkedin"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-8 fs-5 text-muted">
            <p>
              Hi. My name is Shahaf Seza and this project is a summary project
              for React for my Web-Development course in HackerU college.
            </p>
            <p>
              The project includes a server side
              <span className="text-dark">(NodeJs with MongoDB)</span> and a
              client side based on
              <span className="text-dark">React (TypeScript).</span>
            </p>
            <p>
              <span className="text-dark">Additional features are:</span>
            </p>
            <ul>
              <li>CRUD Operations that can be performed on business Cards</li>
              <li>User Authentication with tokens</li>
              <li>Custom API Service</li>
            </ul>
            <p className="d-flex justify-content-between align-items-center flex-wrap">
              <img src="images/html5.png" width="70" />
              <img src="images/css3.png" width="70" />
              <img src="images/javascript.png" width="70" />
              <img src="images/bootstrap.png" width="70" />
              <img src="images/Mongo.png" width="70" />
              <img src="images/node.png" width="70" />
              <img src="images/react.png" width="70" />
              <img src="images/typescript.png" width="70" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
