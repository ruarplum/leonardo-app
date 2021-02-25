import "./TrendCommArea.css";
import TrendComms from "./TrendCooms";

import commImg1 from "./assets/commImg1.png";
import commImg2 from "./assets/commImg2.png";
import commImg3 from "./assets/commImg3.jpg";
import commImg4 from "./assets/commImg4.png";

const TrendComm = () => {
  return (
    <div className="trendCommCont">
      <div className="trendCommFeed">
      <h2 className="trendCommTitle">Trending Communities</h2>
        <TrendComms
          commImg={commImg1}
          trendCommName="BuyItForLife            "
          trendCommNumMemb={Math.floor(Math.random() * 1000000)}
        />
        <TrendComms
          commImg={commImg2}
          trendCommName="DisneyPlus"
          trendCommNumMemb={Math.floor(Math.random() * 1000000)}
        />
        <TrendComms
          commImg={commImg3}
          trendCommName="nevertellmetheodds"
          trendCommNumMemb={Math.floor(Math.random() * 1000000)}
        />
        <TrendComms
          commImg={commImg4}
          trendCommName="Zoomies"
          trendCommNumMemb={Math.floor(Math.random() * 1000000)}
        />
        <TrendComms
          commImg={commImg1}
          trendCommName="britishProblems"
          trendCommNumMemb={Math.floor(Math.random() * 1000000)}
        />
      </div>
    </div>
  );
};

export default TrendComm;
