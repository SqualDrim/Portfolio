import React, { useState } from "react";
import "./App.css";
import FrontPage from "./projets/first";
import Avalam from "./projets/avalam";
import Web1 from "./projets/web1";
import Pinf from "./projets/pinf";
import Pind from "./projets/pind";
import Web2 from "./projets/web2-1";
import BackAvalam from "./projets/avalam2";
import BackPind from "./projets/pind2";
import BackPinf from "./projets/pinf2";
import BackWeb1 from "./projets/web2";
import BackWeb2 from "./projets/web2-2";
import Portfolio from "./projets/portfolio";
import BackPortfolio from "./projets/portfolio2";
import BackPage from "./projets/quatuor";

type PageProps = {
  number: number;
  contentFront: React.ReactNode;
  contentBack: React.ReactNode;
  isFlipped: boolean;
  isLeftSide: boolean;
  currentPage: number;
};



const Page: React.FC<PageProps> = ({
  number,
  contentFront,
  contentBack,
  isFlipped,
  isLeftSide,
  currentPage
}) => {
  const isVisible =
    isFlipped || isLeftSide || number === currentPage || number === currentPage - 1;

  return (
    <div
      className={`page ${isFlipped ? "flipped" : ""} ${isVisible ? "visible" : "hidden"}`}
      style={{
        zIndex: isLeftSide ? number : 100 - number,
        transformOrigin: isLeftSide ? "left" : "right",
        left: isLeftSide ? "615px" : "500px" // 👈 ceci positionne la page
      }}
      
    >
<div className="front front-background">
  <div className={`content ${!isFlipped ? "show-front" : "hide-front"}`}>
    {contentFront}
  </div>
</div>
<div className="back back-background">
  <div className={`content ${isFlipped ? "show-back" : "hide-back"}`}>
    {contentBack}
  </div>
</div>

    </div>
  );
};




const Flipbook: React.FC = () => {
  const pages = [
    { front: < FrontPage />, back: < Avalam /> },
    { front: < BackAvalam />, back: < Web1 /> },
    { front: < BackWeb1 />, back: < Web2 /> },
    { front: < BackWeb2 />, back: < Pind /> },
    { front: < BackPind />, back: < Pinf /> },
    { front: < BackPinf />, back: < Portfolio /> },
    { front: < BackPortfolio />, back: < BackPage /> }

  ];

  type PageState = { isFlipped: boolean; isLeftSide: boolean };
  const [currentPage, setCurrentPage] = useState(0);
  const [pagesState, setPagesState] = useState<PageState[]>(
    pages.map(() => ({ isFlipped: false, isLeftSide: false }))
  );

  const nextPage = () => {
    if (currentPage < pages.length) {
      const newState = [...pagesState];
      newState[currentPage] = { isFlipped: true, isLeftSide: true };
      setPagesState(newState);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      const newState = [...pagesState];
      newState[currentPage - 1] = {
        isFlipped: false,
        isLeftSide: false
      };
      setPagesState(newState);
      setCurrentPage(currentPage - 1);
    }
  };
  


  return (
    <div className="book-container">
      <button className="nav left" onClick={prevPage}>
        ←
      </button>
      <div className="book">
        {pages.map((p, i) => (
          <Page
            key={i}
            number={i}
            contentFront={p.front}
            contentBack={p.back}
            isFlipped={pagesState[i].isFlipped}
            isLeftSide={pagesState[i].isLeftSide}
            currentPage={currentPage}
          />
        ))}

      </div>
      <button className="nav right" onClick={nextPage}>
        →
      </button>
    </div>
  );
};

export default Flipbook;
