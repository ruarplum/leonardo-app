import "./PopCommParts.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Fashion = (props) => {
  return (
    <div className="CommLinkArea fashionArea">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{props.commTitle}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
              <a href="">MakeupAddiction</a>{" "}{" "}
              <a href="">Watches</a>{" "}
              <a href="">BeautyGuruChatter</a>{" "}
              <a href="">femalefashionadvice</a>{" "}
              <a href="">frugalmalefashion</a>{" "}
              <a href="">curlyhair</a>{" "}
              <a href="">poshmark</a>{" "}
              <a href="">tattoos</a>{" "}
              <a href="">beards</a>{" "}
              <a href="">goodyearwelt</a>{" "}
              <a href="">Repsneakers</a>{" "}
              <a href="">fragrance</a>{" "}
              <a href="">malehairadvice</a>{" "}
              <a href="">LushCosmetics</a>{" "}
              <a href="">malelivingspace</a>{" "}
              <a href="">BeautyBoxes</a>{" "}
              <a href="">beauty</a>{" "}
              <a href="">Makeup</a>{" "}
              <a href="">wicked_edge</a>{" "}
              <a href="">rawdenim</a>{" "}
              <a href="">RedditLaqueristas</a>{" "}
              <a href="">Hair</a>{" "}
              <a href="">Indiemakeupandmore</a>{" "}
              <a href="">MUAontheCheap</a>{" "}
              <a href="">Watchexchange</a>{" "}
              <a href="">yeezys</a>{" "}
              <a href="">malefashion</a>{" "}
              <a href="">streetwearstartup</a>{" "}
              <a href="">findfashion</a>{" "}
              <a href="">femalehairadvice</a>{" "}
              <a href="">PanPorn</a>{" "}
              <a href="">rolex</a>{" "}
              <a href="">acne</a>{" "}
              <a href="">japanesestreetwear</a>{" "}
              <a href="">Wetshaving</a>{" "}
              <a href="">Youniqueamua</a>{" "}
              <a href="">sneakermarket</a>{" "}
              <a href="">SarahSnark</a>{" "}
              <a href="">RepLadiesBST</a>{" "}
              <a href="">makeupexchange</a>{" "}
          </AccordionItemPanel>
        </AccordionItem>
        
    </div>
  );
};

export default Fashion;
