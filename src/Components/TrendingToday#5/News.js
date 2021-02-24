import "./News.css";

const News = (props) => {
  return (
    <div
      className={ "TrendTodayContainer " + `${props.className}`}
      style={{ backgroundImage: `url(${props.newsImg})`}}
    >
      <div className="textContainer">
        <h3 className="newsTitle">{props.newsTitle}</h3>
        <h4 className="newsSubtitle">{props.newsSubtitle}</h4>
      </div>
      <div className="commArea">
        <img src={props.commPic} alt={props.commName} className="commPic" />
        <p className="commName">{props.commName}</p>
      </div>
    </div>
  );
};

export default News;
