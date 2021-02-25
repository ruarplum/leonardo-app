import "./PopComm.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import Health from "./PopCommTitles/Health";
import Tv from "./PopCommTitles/Tv";
import Travel from "./PopCommTitles/Travel";
import Sports from "./PopCommTitles/Sports";
import PopCommGen from "./PopCommTitles/PopCommGen";
import Gaming from "./PopCommTitles/Gaming";
import Fashion from "./PopCommTitles/Fashion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const PopComm = () => {
  return (
    <div className="popCommAreas">
      <Accordion preExpanded={['a']}>
        <PopCommGen commTitle="popcommGen" uuid="a" />
        <Gaming commTitle="gaming" uuid="b"/>
        <Sports commTitle="sports" uuid="c"/>
        <Travel commTitle="travel" uuid="d"/>
        <Tv commTitle="Tv" uuid="e"/>
        <Health commTitle="Health" uuid="f"/>
        <Fashion commTitle="fashion" uuid="g"/>
      </Accordion>
    </div>
  );
};

export default PopComm;
