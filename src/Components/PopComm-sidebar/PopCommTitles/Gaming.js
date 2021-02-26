import {useState} from 'react';
import "./PopCommParts.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Gaming = (props) => {


  const mainGamingList = [ "StardewValley",
  "FortniteCompetitive",
  "Warframe",
  "totalwar",
  "Fallout",
  "RocketLeague",
  "fo76",
  "yugioh",
  "eu4",
  "smashbros",
  "thesims",
  "ClashRoyale"]

  const extraGamingList = [
    "boardgames",
    "thedivision",
    "elderscrollsonline",
    "runescape",
    "Blackops4",
    "grandorder",
    "fireemblem",
    "CrusaderKings",
    "Breath_of_the_Wild",
    "PUBGMobile",
    "Warhammer40k",
    "Stellaris",
    "DBZDokkanBattle",
    "Brawlstars",
    "EscapefromTarkov",
    "summonerswar",
    "MLBTheShow",
    "SWGalaxyOfHeroes",
    "BattlefieldV",
    "deadbydaylight",
    "MagicArena",
    "Smite",
    "PUBATTLEGROUNDS",
    "starcitizen",
    "Persona5",
    "MortalKombat",
    "tf2",
    "playrust",
    "PSVR",
    "Guildwars2",
    "RimWorld",
    "ClashOfClans",
    "DMAcademy",
    "MarvelStrikeForce",
    "FireEmblemHeroes",
    "EDH",
    "Terraria",
    "osugame",
    "NoMansSkyTheGame",
    "forhonor",
    "EliteDangerous",
    "Warthunder",
    "Seaofthieves",
    "Paladins",
    "StarWarsBattlefront",
    "dauntless",
    "FFBraveExvius",
    "TwoBestFriendsPlay",
    "Competitiveoverwatch",
    "DuelLinks",
    "Eve",
    "danganronpa"
  ]

  const [gamingItems, setGamingItems] = useState(mainGamingList);
  const [extraGamingItems, setExtraGamingItems] = useState(extraGamingList);
  const [seeBtn, setBtn] = useState(true);

  
    return(
      <div className="CommLinkArea gamingArea">
      <AccordionItem uuid={props.uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>{props.commTitle}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
       
      <div className="listArea"> {props.transformItems(gamingItems)} </div>
          {seeBtn ? (
            <button
              className="seeMoreBtn"
              onClick={(e) => {
                props.onClickHandler(
                  setGamingItems,
                  gamingItems,
                  extraGamingItems
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
                props.onClickHandler(setGamingItems, [...gamingItems], []);
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

export default Gaming;