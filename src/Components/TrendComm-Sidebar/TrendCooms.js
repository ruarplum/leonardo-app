import "./TrendComms.css";

const TrendComms = (props) => {
  return (
    <div className="trendCommArea">
        <div className="leftTrendArea">
        <img src={props.commImg} className="trendCommImg" />
        <div className="trendCommTextArea">
          <p className="trendCommName">r/{props.trendCommName}</p>
          <p className="trendCommNumMemb">{props.trendCommNumMemb + " members"}</p>
        </div>
        </div>
      <button className="joinBtn">Join</button>
    </div>
  );
};

export default TrendComms;
