import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../interfaces/Card";
import { getCardById } from "../services/cardService";
import { getIsBiz, getUser } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [isBiz, setIsBiz] = useState<boolean>(false);
  const [cards, setCard] = useState<Card[]>([]);

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    biz: false,
  });

  useEffect(() => {
    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsBiz(getIsBiz());
    getCardById()
      .then((result) => {
        setCard(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addDefaultCardLogo = (ev: any) => {
    ev.target.src = "images/DefaultCardLogo.png";
  };

  return (
    <>
      <Navbar />
      <div className="container my-2">
        <h1>
          <span>User Profile</span>
        </h1>
        <div className="userCard my-4">
          <div className="row gap-4">
            <div className="col-lg-2 col-sm-12">
              <img
                src={`https://ui-avatars.com/api/name=${user.name}?background=ffcb41&color=fff`}
                className="rounded userImg"
              />
            </div>
            <div className="col mx-5">
              <div className="row mb-4">
                <label className="col-sm-2 d-flex align-items-center">
                  User Name
                </label>
                <div className="col-sm-10">
                  <div className="form-controlView">{user.name}</div>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-sm-2 d-flex align-items-center">
                  Email
                </label>
                <div className="col-sm-10">
                  <div className="form-controlView">{user.email}</div>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-sm-2 d-flex align-items-center">
                  User Type
                </label>
                <div className="col-sm-10">
                  <div className="form-controlView">
                    {user.biz ? "Business Owner" : "Regular User"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(205,221,228)",
          paddingTop: "1px",
          marginTop: "40px",
          paddingBottom: "50px",
        }}
      >
        <div className="container">
          <h3 className="mt-5">
            <span>Your Cradz</span>
          </h3>
          <div className="row">
            {cards.length ? (
              <>
                {cards.map((card) => (
                  <div className="col-lg-4 col-md-6 mb-4 pt-3" key={card._id}>
                    <div className="cards d-flex align-items-center">
                      <div className="littleSettings">
                        <Link to={`/edit/${card._id}`} className="settingLink">
                          <i className="fa-solid fa-gear"></i>
                        </Link>
                      </div>
                      <img
                        src={card.logo}
                        width="100"
                        onError={addDefaultCardLogo}
                        className="littleMyCardz"
                      />
                      <h3 className="mx-3">{card.name}</h3>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="d-flex justify-content-center align-items-center flex-column mb-5">
                <h1 className="mt-4">You Have no BizCards</h1>
                <img src="/images/empty2.png" width="200" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
