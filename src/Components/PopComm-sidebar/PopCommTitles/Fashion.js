import {useState} from 'react';
import "./PopCommParts.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Fashion = (props) => {

const mainFashionList = [
  "MakeupAddiction",
  "Watches",
  "BeautyGuruChatter",
  "femalefashionadvice",
  "frugalmalefashion",
  "curlyhair",
  "poshmark",
  "tattoos",
  "beards",
];

const extraFashionList = [
  "goodyearwelt",
  "Repsneakers",
  "fragrance",
  "malehairadvice",
  "LushCosmetics",
  "malelivingspace",
  "BeautyBoxes",
  "beauty",
  "Makeup",
  "wicked_edge",
  "rawdenim",
  "RedditLaqueristas",
  "Hair",
  "Indiemakeupandmore",
  "MUAontheCheap",
  "Watchexchange",
  "yeezys",
  "malefashion",
  "streetwearstartup",
  "findfashion",
  "femalehairadvice",
  "PanPorn",
  "rolex",
  "acne",
  "japanesestreetwear",
  "Wetshaving",
  "Youniqueamua",
  "sneakermarket",
  "SarahSnark",
  "RepLadiesBST",
  "makeupexchange",
];


const [fashionItems, setFashionItems] = useState(mainFashionList);
  const[extraFashionItems, setExtraFashionItems] = useState(extraFashionList);
  const [seeBtn, setBtn] = useState(true);

  return (
    <div className="CommLinkArea fashionArea">
      <AccordionItem uuid={props.uuid}>

        <AccordionItemHeading>
          <AccordionItemButton>{props.commTitle}</AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
        <div className="listArea"> {props.transformItems(fashionItems)} </div>
            {seeBtn ? 
            <button className="seeMoreBtn" onClick={(e)=>{
              props.onClickHandler(setFashionItems, fashionItems, extraFashionItems);
              setBtn(!seeBtn);
            }}
              >See More</button> 
            : 
            <button className="seeLessBtn" onClick={(e)=>{
              props.onClickHandler(setFashionItems, [...fashionItems], []);
              setBtn(!seeBtn);
              }}>Less</button>}
        </AccordionItemPanel>

      </AccordionItem>
    </div>
  );
};

export default Fashion;
