import "./PopComm.css"
import Health from "./PopCommTitles/Health";
import Tv from "./PopCommTitles/Tv";
import Travel from "./PopCommTitles/Travel";
import Sports from "./PopCommTitles/Sports";
import PopCommGen from "./PopCommTitles/PopCommGen";
import Gaming from "./PopCommTitles/Gaming";
import Fashion from "./PopCommTitles/Fashion";

const PopComm = () => {
  return (
  <div className="popCommAreas">
    <Health commTitle="Health" />
    <Tv commTitle="Tv"/>
    <Travel commTitle="travel"/>
    <Sports commTitle="sports"/>
    <PopCommGen commTitle="popcommGen"/>
    <Gaming commTitle="gaming"/>
    <Fashion commTitle="fashion"/>
  </div>
  )
};

export default PopComm;
