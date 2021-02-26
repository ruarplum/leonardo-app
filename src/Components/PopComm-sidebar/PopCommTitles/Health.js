import {useState} from 'react';
import "./PopCommParts.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";


const Health = (props) => {

  const mainHealthList = [
    "orangetheory",
    "bodybuilding",
    "bodyweightfitness",
    "vegan",
    "crossfit",
    "nattyorjuice",
    "EatCheapAndHealthy",
    "loseit",
    "xxfitness",
  ]

  const extraHealthList =[ 
    "nutrition",
    "powerlifting",
    "1200isplenty",
    "GetMotivated",
    "intermittentfasting",
    "CampingGear",
    "gainit",
    "Rowing",
    "yoga",
    "skiing",
    "weightroom",
    "fasting",
    "leangains",
    "progresspics",
    "amateur_boxing",
    "CampingandHiking",
    "zerocarb",
    "diabetes",
    "Supplements",
    "boostedboards",
    "backpacking",
    "camping",
    "flexibility",
    "Stronglifts5x5",
    "hiking",
    "Brogress",
    "migraine",
    "C25K",
    "HealthyFood",
    "CrohnsDisease",
    "ehlersdanlos",
    "swoleacceptance",
    "EOOD",
    "EDanonymemes",
    "diabetes_t1",
    "medical_advice",
  ]

  const [healthItems, setHealthItems] = useState(mainHealthList);
  const [extraHealthItems, setExtraHealthItems] = useState(extraHealthList);
  const [seeBtn, setBtn] = useState(true);

  return (
    <div className="CommLinkArea healthArea">
      <AccordionItem uuid={props.uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>{props.commTitle}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <div className="listArea"> {props.transformItems(healthItems)} </div>
          {seeBtn ? (
            <button
              className="seeMoreBtn"
              onClick={(e) => {
                props.onClickHandler(
                  setHealthItems,
                  healthItems,
                  extraHealthItems
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
                props.onClickHandler(setHealthItems, [...healthItems], []);
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

export default Health;


