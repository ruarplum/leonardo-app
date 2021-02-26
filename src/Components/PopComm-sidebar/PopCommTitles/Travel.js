import {useState} from 'react';
import "./PopCommParts.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Travel = (props) => {
  const travelList = [
    "vancouver",
    "brasil",
    "australia",
    "mexico",
    "argentina",]

    const extraTravelList =  [
      "melbourne",
      "ottawa",
      "korea",
      "ireland",
      "travel",
      "Calgary",
      "portugal",
      "india",
      "sweden",
      "italy",
      "AskNYC",
      "europe",
      "sydney",
      "france",
      "de",
      "dubai",
      "LearnJapanese",
      "China",
      "Edmonton",
      "germany",
      "houston",
      "CasualUK",
      "malaysia",
      "askTO",
      "JapanTravel",
      "solotravel",
      "newzealand",
      "bayarea",
      "Turkey",
      "Portland",
      "thenetherlands",
      "Atlanta",
      "brisbane",
      "Seattle",
      "halifax",
      "chile",
      "Winnipeg",
      "japanlife",
      "philadelphia",
      "hungary",
      "sandiego",
      "Denver",
      "Romania",
      "flightsim",
      "translator",
      "Dallas",
      "Columbus",
      "pittsburgh",
      "berkeley",
      "nashville",
      "phoenix",
      "VictoriaBC",
      "greece",
      "WaltDisneyWorld",
      "Austria",
      "norge",
      "Sacramento",
      "kansascity",
      "croatia",
      "sanfrancisco",
      "vzla",
      "Suomi",
      "Denmark",
      "orangecounty"
    ]

  const [travelItems, setTravelItems] = useState(travelList);
  const[extraTravelItems, setExtraTravelItems] = useState(extraTravelList);
  const [seeBtn, setBtn] = useState(true);

    return(
        <div className="CommLinkArea travelArea">
        
        <AccordionItem uuid={props.uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>{props.commTitle}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
           <div className="listArea"> {props.transformItems(travelItems)} </div>
            {seeBtn ? 
            <button className="seeMoreBtn" onClick={(e)=>{
              props.onClickHandler(setTravelItems, travelItems, extraTravelItems);
              setBtn(!seeBtn);
            }}
              >See More</button> 
            : 
            <button className="seeLessBtn" onClick={(e)=>{
              props.onClickHandler(setTravelItems, [], travelItems);
              setBtn(!seeBtn);
              }}>Less</button>}
            
          </AccordionItemPanel>
        </AccordionItem>
      </div>
    )
}

export default Travel;



/* vancouver
brasil
australia
mexico
argentina
melbourne
ottawa
korea
ireland
travel
Calgary
portugal
india
sweden
italy
AskNYC
europe
sydney
france
de
dubai
LearnJapanese
China
Edmonton
germany
houston
CasualUK
malaysia
askTO
JapanTravel
solotravel
newzealand
bayarea
Turkey
Portland
thenetherlands
Atlanta
brisbane
Seattle
halifax
chile
Winnipeg
japanlife
philadelphia
hungary
sandiego
Denver
Romania
flightsim
translator
Dallas
Columbus
pittsburgh
berkeley
nashville
phoenix
VictoriaBC
greece
WaltDisneyWorld
Austria
norge
Sacramento
kansascity
croatia
sanfrancisco
vzla
Suomi
Denmark
orangecounty
 */