import {useState} from 'react';

import "./PopCommParts.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const PopCommGen = (props) => {

const mainPopCommList = ["AskReddit",
"NoStupidQuestions",
"DestinyTheGame",
"explainlikeimfive",
"AskMen",
"leagueoflegends",
"Minecraft",
"anime",
"IAmA",
"AskWomen",
"OutOfTheLoop"]

const extraPopCommList = [
  "Fitness",
  "destiny2",
  "classicwow",
  "PS4",
  "discordapp",
  "DnD",
  "FIFA",
  "Instagram",
  "apple",
  "Twitch",
  "videos",
  "FortNiteBR",
  "NintendoSwitch",
  "NBA2k",
  "gtaonline",
  "wow",
  "dndnext",
  "Tinder",
  "xboxone",
  "relationship_advice",
  "Amd",
  "buildapc",
  "todayilearned",
  "sysadmin",
  "OnePiece",
  "malefashionadvice",
  "techsupport",
  "iphone",
  "nba",
  "GlobalOffensive",
  "reddeadredemption",
  "jailbreak",
  "ffxiv",
  "askscience",
  "Cooking",
  "2007scape",
  "LivestreamFail",
  "nfl",
  "cars",
  "pics",
  "MonsterHunterWorld",
  "legaladvice",
  "Showerthoughts",
  "pcmasterrace",
  "GooglePixel",
  "cscareerquestions",
  "LifeProTips",
  "Music",
  "pokemon"
]

const [popCommItems, setPopCommItems] = useState(mainPopCommList);
const [extraPopCommItems, setExtraPopCommItems] = useState(extraPopCommList);
const [seeBtn, setBtn] = useState(true);


    return(
        <div className="CommLinkArea popGenArea">
       <AccordionItem uuid={props.uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>{props.commTitle}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            
          <div className="listArea"> {props.transformItems(popCommItems)} </div>
          {seeBtn ? (
            <button
              className="seeMoreBtn"
              onClick={(e) => {
                props.onClickHandler(
                  setPopCommItems,
                  popCommItems,
                  extraPopCommItems
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
                props.onClickHandler(setPopCommItems, [...popCommItems], []);
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

export default PopCommGen;