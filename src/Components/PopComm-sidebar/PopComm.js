import "./PopComm.css";
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

  const onClickHandler = (setData, data, secondData) => {
    setData([...data, transformItems(secondData)]);
  }
  const transformItems = (items) => items.map((item, index) => <span><a href="#" key={index} className="listItem">{item}</a> {" "}</span>)

  return (
    <div className="popCommAreas">
      <Accordion preExpanded={['a']}>
        <PopCommGen commTitle="popular communities" uuid="a" onClickHandler={onClickHandler} transformItems={transformItems} />
        <Gaming commTitle="gaming" uuid="b" onClickHandler={onClickHandler} transformItems={transformItems}/>
        <Sports commTitle="sports" uuid="c" onClickHandler={onClickHandler} transformItems={transformItems}/>
        <Travel commTitle="travel" uuid="d" onClickHandler={onClickHandler} transformItems={transformItems}/>
        <Tv commTitle="Tv" uuid="e" onClickHandler={onClickHandler} transformItems={transformItems}/>
        <Health commTitle="Health" uuid="f" onClickHandler={onClickHandler} transformItems={transformItems}/>
        <Fashion commTitle="fashion" uuid="g" onClickHandler={onClickHandler} transformItems={transformItems}/>
      </Accordion>
    </div>
  );
};

export default PopComm;
