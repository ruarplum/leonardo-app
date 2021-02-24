//needs to have each award component passed into here

import StarCounter from "./Star-Counter";

const Awards = (props) => {
  return (
    <div className="Awards-join">
      <StarCounter star={props.star}/>
    </div>
  )
};

export default Awards;
