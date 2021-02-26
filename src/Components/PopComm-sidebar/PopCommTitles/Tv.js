import {useState} from 'react';
import "./PopCommParts.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";


const Tv = (props) => {

  const mainTvList =["Naruto",
  "BokuNoHeroAcademia",
  "marvelstudios",
  "rupaulsdragrace",
  "90DayFiance",
  "dbz",
  "Boruto",
  "rickandmorty",
  "howardstern",
  "cordcutters"]

  const extraTvList = [
    "TheLastAirbender",
    "IASIP",
    "Animesuggest",
    "stevenuniverse",
    "brooklynninenine",
    "thebachelor",
    "TheSimpsons",
    "ShingekiNoKyojin",
    "thewalkingdead",
    "MtvChallenge",
    "asoiaf",
    "StrangerThings",
    "survivor",
    "thesopranos",
    "batman",
    "BravoRealHousewives",
    "blackmirror",
    "NetflixBestOf",
    "Berserk",
    "BlackClover",
    "freefolk",
    "gameofthrones",
    "riverdale",
    "RWBY",
    "BoJackHorseman",
    "lucifer",
    "TheBlackList",
    "TeenMomOGandTeenMom2",
    "startrek",
    "Glitch_in_the_Matrix",
    "overlord"
  ]

  const [tvItems, setTvItems] = useState(mainTvList);
  const [extraTvItems, setExtraTvItems] = useState(extraTvList);
  const [seeBtn, setBtn] = useState(true);

    return(
        <div className="CommLinkArea tvArea">
        
        <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{props.commTitle}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            
          <div className="listArea"> {props.transformItems(tvItems)} </div>
          {seeBtn ? (
            <button
              className="seeMoreBtn"
              onClick={(e) => {
                props.onClickHandler(
                  setTvItems,
                  tvItems,
                  extraTvItems
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
                props.onClickHandler(setTvItems, [...tvItems], []);
                setBtn(!seeBtn);
              }}
            >
              Less
            </button>
          )}
            
          </AccordionItemPanel>
        </AccordionItem>

      </div>
    )
}

export default Tv;