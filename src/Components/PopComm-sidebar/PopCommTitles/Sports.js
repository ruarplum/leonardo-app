import "./PopCommParts.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Sports = (props) => {
    return(
        <div className="CommLinkArea sportsArea">
               <AccordionItem uuid={props.uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>{props.commTitle}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
              <a href="">running</a>{" "}
              <a href="">soccer</a>{" "}
              <a href="">bjj</a>{" "}
              <a href="">MMA</a>{" "}
              <a href="">hockey</a>{" "}
              <a href="">formula1</a>{" "}
              <a href="">CFB</a>{" "}
              <a href="">barstoolsports</a>{" "}
              <a href="">airsoft</a>{" "}
              <a href="">rugbyunion</a>{" "}
              <a href="">golf</a>{" "}
              <a href="">MTB</a>{" "}
              <a href="">cycling</a>{" "}
              <a href="">climbing</a>{" "}
              <a href="">Boxing</a>{" "}
              <a href="">bicycling</a>{" "}
              <a href="">sportsbook</a>{" "}
              <a href="">hockeyplayers</a>{" "}
              <a href="">NewSkaters</a>{" "}
              <a href="">Astros</a>{" "}
              <a href="">footballmanagergames</a>{" "}
              <a href="">WWEGames</a>{" "}
              <a href="">Nationals</a>{" "}
              <a href="">GreenBayPackers</a>{" "}
              <a href="">Patriots</a>{" "}
              <a href="">sports</a>{" "}
              <a href="">lakers</a>{" "}
              <a href="">reddevils</a>{" "}
              <a href="">torontoraptors</a>{" "}
              <a href="">LiverpoolFC</a>{" "}
              <a href="">NYYankees</a>{" "}
              <a href="">tennis</a>{" "}
              <a href="">FantasyPL</a>{" "}
              <a href="">49ers</a>{" "}
              <a href="">WWE</a>{" "}
              <a href="">Dodgers</a>{" "}
              <a href="">NFA</a>{" "}
              <a href="">eagles</a>{" "}
              <a href="">sixers</a>{" "}
              <a href="">Browns</a>{" "}
              <a href="">detroitlions</a>{" "}
              <a href="">discgolf</a>{" "}
              <a href="">Cricket</a>{" "}
              <a href="">MLS</a>{" "}
              <a href="">canucks</a>{" "}
              <a href="">bikewrench</a>{" "}
              <a href="">Nerf</a>{" "}
              <a href="">leafs</a>{" "}
              <a href="">DynastyFF</a>{" "}
              <a href="">minnesotavikings</a>{" "}
              <a href="">cowboys</a>{" "}
              <a href="">warriors</a>{" "}
              <a href="">snowboarding</a>{" "}
              <a href="">nrl</a>{" "}
              <a href="">Braves</a>{" "}
          </AccordionItemPanel>
        </AccordionItem>
      </div>
    )
}

export default Sports;