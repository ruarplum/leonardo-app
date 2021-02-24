import "./TrendCommArea.css";
import TrendComms from "./TrendCooms";

import commImg1 from "./assets/commImg1.png";

const TrendComm = () => {
  return (
    <div>
      <h2 className="TrendCommTitle">Trending Communities</h2>;
      <div className="TrendCommFeed">
        <TrendComms
          commImg={commImg1}
          trendCommName="BuyItForLife"
          trendCommNumMemb={Math.floor(Math.random() * 1000000)}
        />
      </div>
    </div>
  );
};

export default TrendComm;
