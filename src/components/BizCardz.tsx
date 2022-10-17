import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { getCards } from "../services/cardService";
import Navbar from "./Navbar";

interface BizCardzProps {}

const BizCardz: FunctionComponent<BizCardzProps> = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getCards()
      .then((res) => setCards(res.data))
      .catch((err) => console.log(err));
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
              <span>All BizCardz</span>
            </h1>
            <p>Total {cards.length} BizCardz</p>
          </div>
          <div className="form-floating mb-3 searchInput">
            <input
              type="text"
              className="form-control allCardsInput"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              placeholder=" "
            />
            <label htmlFor="email">Search by Name</label>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        {cards.length ? (
          <>
            <div className="row mb-5">
              {cards
                .filter((card) =>
                  search.toLowerCase() == ""
                    ? card
                    : card.name?.toLowerCase().includes(search)
                )
                .map((card) => (
                  <div className="col-lg-4 col-md-6 mb-4 pt-3" key={card._id}>
                    <div className="cards w-100 h-100 d-flex flex-column align-content-between flex-wrap">
                      <img
                        src={card.backgroundImg}
                        className="cardHeader"
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
          </div>
        )}
      </div>
    </>
  );
};

export default BizCardz;
