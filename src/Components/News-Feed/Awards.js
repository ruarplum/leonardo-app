//needs to have each award component passed into here
import Star from "./Star-Counter";
import Help from "./Helpful";
import Seal from "./Seal";
import Spoon from "./Spoon";
import Hugz from "./Hugz";

const Awards = (props) => {
  return (
    <div className="Awards-all">
      <Star star={props.star} />
      <Help help={props.help} />
      <Seal seal={props.seal} />
      <Spoon spoon={props.spoon} />
      <Hugz hugz={props.hugz} />
    </div>
  );
};

export default Awards;
