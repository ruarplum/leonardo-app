import React from "react";
import "./trendingToday.css";
import tankRussia from "./assets/tankrussia.jpg";
import birdFlu from "./assets/birdflu.jpg";
import daftPunk from "./assets/daftpunk.jpg";
import novakDjokovic from "./assets/novakdjokovic.jpg";

import subReddit from './assets/subredditIcon.png'
import cMemes from './assets/cMemes.jpeg'
import cTennis from './assets/cTennis.png'

import News from "./News";
import { ReactComponent } from "react";

const TrendingToday = () => {
  return (
    <div className="trendingToday">
      <h2 className="contTitle">Trending Today</h2>
      <div className="newsContainer">
        <News
          newsImg={tankRussia}
          newsTitle="Snow Tank"
          newsSubtitle="The world's record book Guinness officials are looking for the guy before climate change will be effected on the tank. "
          commPic={cMemes}
          commName="r/cMemes"
        />
        <News
          newsImg={birdFlu}
          newsTitle="Bird flu"
          newsSubtitle="Humans infected with H5N8 strain for first time in Russia"
          commPic={subReddit}
          commName="r/worldnews"
 />
        <News
          newsImg={daftPunk}
          newsTitle="R.I.P Daft Punk 1993-2021."
          newsSubtitle="Thanks Daft Punk"
          commPic={cMemes}
          commName="r/cMemes"
        />
        <News
          newsImg={novakDjokovic}
          newsTitle="Djokovic"
          newsSubtitle="'It hurts. I'm a human being': Australian Open champion Novak Djokovic responds to criticism"
          commPic={cTennis}
          commName="r/tennis"
        />
      </div>
    </div>
  );
};

export default TrendingToday;
