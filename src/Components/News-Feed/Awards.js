//needs to have each award component passed into here
import Star from "./Star-Counter";
import Help from "./Helpful";


const Awards = (props) => {
  return (
    <div className="Awards-all">
      <Star 
            star={props.star}/>
        <Help 
        help={props.help}/>

    </div>
  )
};

export default Awards;
