import "./PopCommParts.css"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";


const Tv = (props) => {
    return(
        <div className="CommLinkArea tvArea">
        
        <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{props.commTitle}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <a href="">Naruto</a>{" "}
            <a href="">BokuNoHeroAcademia</a>{" "}
            <a href="">marvelstudios</a>{" "}
            <a href="">rupaulsdragrace</a>{" "}
            <a href="">90DayFiance</a>{" "}
            <a href="">dbz</a>{" "}
            <a href="">Boruto</a>{" "}
            <a href="">rickandmorty</a>{" "}
            <a href="">howardstern</a>{" "}
            <a href="">cordcutters</a>{" "}
            <a href="">TheLastAirbender</a>{" "}
            <a href="">IASIP</a>{" "}
            <a href="">Animesuggest</a>{" "}
            <a href="">stevenuniverse</a>{" "}
            <a href="">brooklynninenine</a>{" "}
            <a href="">thebachelor</a>{" "}
            <a href="">TheSimpsons</a>{" "}
            <a href="">ShingekiNoKyojin</a>{" "}
            <a href="">thewalkingdead</a>{" "}
            <a href="">MtvChallenge</a>{" "}
            <a href="">asoiaf</a>{" "}
            <a href="">StrangerThings</a>{" "}
            <a href="">survivor</a>{" "}
            <a href="">thesopranos</a>{" "}
            <a href="">batman</a>{" "}
            <a href="">BravoRealHousewives</a>{" "}
            <a href="">blackmirror</a>{" "}
            <a href="">NetflixBestOf</a>{" "}
            <a href="">Berserk</a>{" "}
            <a href="">BlackClover</a>{" "}
            <a href="">freefolk</a>{" "}
            <a href="">gameofthrones</a>{" "}
            <a href="">riverdale</a>{" "}
            <a href="">RWBY</a>{" "}
            <a href="">BoJackHorseman</a>{" "}
            <a href="">lucifer</a>{" "}
            <a href="">TheBlackList</a>{" "}
            <a href="">TeenMomOGandTeenMom2</a>{" "}
            <a href="">startrek</a>{" "}
            <a href="">Glitch_in_the_Matrix</a>{" "}
            <a href="">overlord</a>{" "}
          </AccordionItemPanel>
        </AccordionItem>

      </div>
    )
}

export default Tv;