import {useState} from 'react';
import "./PopCommParts.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Sports = (props) => {
  const mainSportsList = [
    "running",
    "soccer",
    "bjj",
    "MMA",
    "hockey",
    "formula1",
    "CFB",
    "barstoolsports",
    "airsoft",
    "rugbyunion",
  ];

  const extraSportsList = [
    "golf",
    "MTB",
    "cycling",
    "climbing",
    "Boxing",
    "bicycling",
    "sportsbook",
    "hockeyplayers",
    "NewSkaters",
    "Astros",
    "footballmanagergames",
    "WWEGames",
    "Nationals",
    "GreenBayPackers",
    "Patriots",
    "sports",
    "lakers",
    "reddevils",
    "torontoraptors",
    "LiverpoolFC",
    "NYYankees",
    "tennis",
    "FantasyPL",
    "49ers",
    "WWE",
    "Dodgers",
    "NFA",
    "eagles",
    "sixers",
    "Browns",
    "detroitlions",
    "discgolf",
    "Cricket",
    "MLS",
    "canucks",
    "bikewrench",
    "Nerf",
    "leafs",
    "DynastyFF",
    "minnesotavikings",
    "cowboys",
    "warriors",
    "snowboarding",
    "nrl",
    "Braves",
  ];

  const [sportsItems, setSportsItems] = useState(mainSportsList);
  const [extraSportsItems, setExtraSportsItems] = useState(extraSportsList);
  const [seeBtn, setBtn] = useState(true);

  return (
    <div className="CommLinkArea sportsArea">
      <AccordionItem uuid={props.uuid}>
        <AccordionItemHeading>
          <AccordionItemButton>{props.commTitle}</AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <div className="listArea"> {props.transformItems(sportsItems)} </div>
          {seeBtn ? (
            <button
              className="seeMoreBtn"
              onClick={(e) => {
                props.onClickHandler(
                  setSportsItems,
                  sportsItems,
                  extraSportsItems
                );
                setBtn(!seeBtn);
              }}
            >
              See More
            </button>
          ) : (
            <button
              className="seeLessBtn"
              onClick={(e) => {
                props.onClickHandler(setSportsItems, [...sportsItems], []);
                setBtn(!seeBtn);
              }}
            >
              Less
            </button>
          )}
        </AccordionItemPanel>
      </AccordionItem>
    </div>
  );
};

export default Sports;
