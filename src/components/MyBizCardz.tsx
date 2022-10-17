import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../interfaces/Card";
import { getCardById } from "../services/cardService";
import { getIsBiz } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface MyBizCardzProps {}

const MyBizCardz: FunctionComponent<MyBizCardzProps> = () => {
  const [isBiz, setIsBiz] = useState<boolean>(false);
  const [cards, setCard] = useState<Card[]>([]);

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

  const addDefaultCardHeader = (ev: any) => {
    ev.target.src = "images/DefaultCardHeader.png";
  };

  const addDefaultCardLogo = (ev: any) => {
    ev.target.src = "images/DefaultCardLogo.png";
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h1 className="d-inline">
              <span>My BizCardz</span>
            </h1>
            <p>Total {cards.length} BizCardz</p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        {cards.length ? (
          <>
            <div className="row mb-5">
              {cards.map((card: Card) => (
                <div className="col-lg-4 col-md-6 mb-4 pt-3" key={card._id}>
                  <div className="cards w-100 h-100 d-flex flex-column align-content-between flex-wrap">
                    {getIsBiz() ? (
                      <>
                        <div className="settings">
                          <Link
                            to={`/edit/${card._id}`}
                            className="settingLink"
                          >
                            <i className="fa-solid fa-gear"></i>
                          </Link>
                        </div>
                      </>
                    ) : null}
                    <img
                      src={card.backgroundImg}
                      className="cardHeader card-img"
                      onError={addDefaultCardHeader}
                    />
                    <img
                      src={card.logo}
                      alt="Logo"
                      className="cardLogo"
                      onError={addDefaultCardLogo}
                    />
                    <div className="d-flex flex-column align-items-strech align-content-between flex-wrap">
                      <h2 className="cardBrandName text-capitalize">
                        {card.name}
                      </h2>
                      <p className="text-muted px-3 my-2 text-capitalize">
                        {card.description}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between px-3 mt-auto sticky-bottom text-capitalize">
                      <p>
                        <i className="fa-solid fa-location-dot littleTitleCard"></i>
                        {card.address}
                      </p>

                      <p>
                        <i className="fa-solid fa-phone littleTitleCard"></i>
                        {card.phone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img src="/images/empty.png" width="200" />
            <h1>No BizCardz In Here</h1>
            <Link to="/newCard" className="btn btn-warning mb-5">
              <i className="fa-solid fa-plus mx-1"></i> Add BizCard
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBizCardz;
function addDefaultSrc(ev: any) {
  throw new Error("Function not implemented.");
}
